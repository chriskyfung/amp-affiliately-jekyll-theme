import { src, dest, watch } from 'gulp';
import csso from 'gulp-csso';
import ext_replace from 'gulp-ext-replace';
import htmlmin from 'gulp-html-minifier-terser';
import sourcemaps from 'gulp-sourcemaps';
import through2 from 'through2';
import amphtmlValidator from 'amphtml-validator';
import AmpOptimizer from '@ampproject/toolbox-optimizer';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import log from 'fancy-log';
import colors from 'ansi-colors';

const ampOptimizer = AmpOptimizer.create();

const buildFilesGlob = ['./_site/**/*.html', '!./_site/embeds/**'];
const cssFilesGlob = ['./_includes/css/*.css', '!**/*.min.css'];

const isProd = process.env.NODE_ENV === 'production';

/**
 * Gulp task to optimize and minify HTML files.
 * @param {Function} cb - The callback function to signal task completion.
 * @returns {NodeJS.ReadWriteStream} A Gulp stream.
 */
function build(cb) {
  return src(buildFilesGlob)
    .pipe(
      through2.obj(async (file, _, cb) => {
        if (file.isBuffer()) {
          log(`Running AMP Optimizer on ${file.relative}`);
          try {
            const optimizedHtml = await ampOptimizer.transformHtml(
              file.contents.toString()
            );
            file.contents = Buffer.from(optimizedHtml);
          } catch (err) {
            log.error(`AMP Optimizer failed for ${file.relative}:`, err);
            return cb(err);
          }
        }
        cb(null, file);
      })
    )
    .pipe(htmlmin({ collapseWhitespace: false }))
    .pipe(dest('./_site/'));
}

/**
 * Logs AMP validation errors to the console with appropriate color-coding.
 * @param {object} result - The validation result object from amphtml-validator.
 * @param {string} relativePath - The relative path of the file being validated.
 */
function logValidationErrors(result, relativePath) {
  if (result.status === 'PASS') {
    return;
  }

  log.error(colors.red(`${result.status}: ${relativePath}`));
  for (const error of result.errors) {
    let msg = `line ${error.line}, col ${error.col}: ${error.message}`;
    if (error.specUrl) {
      msg += ` (see ${error.specUrl})`;
    }
    if (error.severity === 'ERROR') {
      log.error(colors.red(msg));
    } else {
      log.warn(colors.yellow(msg));
    }
  }
}

/**
 * Gulp task to validate AMP HTML files.
 * Skips files specified via the `--ignore-files` command-line argument.
 * @returns {Promise<NodeJS.ReadWriteStream>} A Gulp stream.
 */
async function validate() {
  const argv = yargs(hideBin(process.argv)).argv;
  const ignoreFiles = new Set(argv.ignoreFiles ? argv.ignoreFiles.split(',') : []);
  const validator = await amphtmlValidator.getInstance();

  return src(buildFilesGlob)
    .pipe(
      through2.obj((file, _, cb) => {
        if (ignoreFiles.has(file.relative)) {
          log(`Skipping validation for ${file.relative}`);
          return cb(null, file);
        }

        if (file.isBuffer()) {
          const contents = file.contents.toString();
          // Skip validation for redirect pages.
          if (contents.includes('<title>Redirecting&hellip;</title>')) {
            return cb(null, file);
          }

          const result = validator.validateString(contents);
          logValidationErrors(result, file.relative);
        }
        cb(null, file);
      })
    );
}

/**
 * Gulp task to minify CSS files.
 * @returns {NodeJS.ReadWriteStream} A Gulp stream.
 */
function minifyCSS() {
  return src(cssFilesGlob)
    .pipe(isProd ? through2.obj() : sourcemaps.init()) // Conditionally init sourcemaps
    .pipe(csso())
    .on('error', log.error)
    .pipe(ext_replace('.min.css'))
    .pipe(isProd ? through2.obj() : sourcemaps.write('.')) // Conditionally write sourcemaps
    .pipe(dest('./_includes/css/'));
}

/**
 * Watches for changes in CSS files and runs the minifyCSS task.
 */
function watchFiles() {
  watch(cssFilesGlob, minifyCSS);
}

export default watchFiles;

export { build, minifyCSS, validate };
