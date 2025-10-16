import { src, dest, watch } from 'gulp';
import csso from 'gulp-csso';
import ext_replace from 'gulp-ext-replace';
import htmlmin from 'gulp-html-minifier-terser';
import sourcemaps from 'gulp-sourcemaps';
import gulpAmpValidator from 'gulp-amphtml-validator';

import through2 from 'through2';
import amphtmlValidator from 'amphtml-validator';
import AmpOptimizer from '@ampproject/toolbox-optimizer';

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

function validate() {
  return src(buildFilesGlob)
    .pipe(
      through2.obj(async (file, _, cb) => {
        if (file.isBuffer()) {
          const validator = await amphtmlValidator.getInstance();
          const contents_in_string = `${file.contents.toString()}`;
          if (contents_in_string.indexOf('<title>Redirecting&hellip;</title>') === -1) {
            const result = validator.validateString(contents_in_string);
            if (result.status !== 'PASS') console.error(`\n${result.status}: ${file.relative}`);
            for (let ii = 0; ii < result.errors.length; ii++) {
              const error = result.errors[ii];
              let msg =
                'line ' + error.line + ', col ' + error.col + ': ' + error.message;
              if (error.specUrl !== null) {
                msg += ' (see ' + error.specUrl + ')';
              }
              (error.severity === 'ERROR' ? console.error : console.warn)(msg);
            }
          };
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
