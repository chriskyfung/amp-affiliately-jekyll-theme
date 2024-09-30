import { src, dest, watch, series, parallel } from 'gulp';
import changed from 'gulp-changed';
import csso from 'gulp-csso';
import ext_replace from 'gulp-ext-replace';
import htmlmin from 'gulp-html-minifier-terser';
import gulpAmpValidator from 'gulp-amphtml-validator';

import through2 from 'through2';
import amphtmlValidator from 'amphtml-validator';
import AmpOptimizer from '@ampproject/toolbox-optimizer';

const ampOptimizer = AmpOptimizer.create();

function build(cb) {
  return src('./_site/**/*.html')
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
  return src('./_site/**/*.html')
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
  return src('./_site/**/*.html')
    .pipe(
      through2.obj(async (file, _, cb) => {
        if (file.isBuffer()) {
          const validator = await amphtmlValidator.getInstance();
          const result = validator.validateString(file.contents.toString());
          if (result.status !== 'PASS') console.error(`\n${result.status}: ${file.relative}`);
          // (result.status === 'PASS' ? console.log : console.error)(result.status);
          for (let ii = 0; ii < result.errors.length; ii++) {
            const error = result.errors[ii];
            let msg =
              'line ' + error.line + ', col ' + error.col + ': ' + error.message;
            if (error.specUrl !== null) {
              msg += ' (see ' + error.specUrl + ')';
            }
            (error.severity === 'ERROR' ? console.error : console.warn)(msg);
          }
        }
        cb(null, file);
      })
    );
}

function minifyCSS() {
  return src(['./_includes/css/*.css', '!**/*.min.css'])
    .pipe(changed('./_includes/css/'))
    .pipe(csso())
    .pipe(ext_replace('.min.css'))
    .pipe(dest('./_includes/css/'));
}

export default function() {
  watch(['./_includes/css/*.css', '!**/*.min.css'], minifyCSS);
}

export { build, test, minifyCSS, validate };
