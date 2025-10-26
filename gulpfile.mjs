import { src, dest, watch } from 'gulp';
import csso from 'gulp-csso';
import ext_replace from 'gulp-ext-replace';
import htmlmin from 'gulp-html-minifier-terser';
import sourcemaps from 'gulp-sourcemaps';
import gulpAmpValidator from 'gulp-amphtml-validator';

import through2 from 'through2';
import amphtmlValidator from 'amphtml-validator';
import AmpOptimizer from '@ampproject/toolbox-optimizer';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const ampOptimizer = AmpOptimizer.create();

const buildFilesGlob = ['./_site/**/*.html', '!./_site/embeds/**'];
const cssFilesGlob = ['./_includes/css/*.css', '!**/*.min.css'];

function build(cb) {
  return src(buildFilesGlob)
    .pipe(
      through2.obj(async (file, _, cb) => {
        if (file.isBuffer()) {
          const date = new Date();
          console.log(`[\x1b[90m${date.toLocaleTimeString('it-IT')}\x1b[0m] Running AMP Optimizer on ${file.path}`);
          const optimizedHtml = await ampOptimizer.transformHtml(
            file.contents.toString()
          );
          file.contents = Buffer.from(optimizedHtml);
        }
        cb(null, file);
      })
    )
    .pipe(htmlmin({ collapseWhitespace: false }))
    .pipe(dest('./_site/'));
}

function test() {
  return src(buildFilesGlob)
    // Validate the input and attach the validation result to the "amp" property
    // of the file object.
    .pipe(gulpAmpValidator.validate())
    // Print the validation results to the console.
    .pipe(gulpAmpValidator.format())
    // Exit the process with error code (1) if an AMP validation error
    // occurred.
    .pipe(gulpAmpValidator.failAfterWarningOrError());
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

  console.error(`\n${result.status}: ${relativePath}`);
  for (const error of result.errors) {
    let msg = `line ${error.line}, col ${error.col}: ${error.message}`;
    if (error.specUrl) {
      msg += ` (see ${error.specUrl})`;
    }
    (error.severity === 'ERROR' ? console.error : console.warn)(msg);
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
          console.log(`Skipping validation for ${file.relative}`);
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

function minifyCSS() {
  return src(cssFilesGlob)
    .pipe(sourcemaps.init())
    .pipe(csso())
    .pipe(ext_replace('.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./_includes/css/'));
}

export default function () {
  watch(cssFilesGlob, minifyCSS);
}

export { build, test, minifyCSS, validate };
