const {src, dest, watch, series, parallel} = require('gulp');
const csso = require('gulp-csso');
const ext_replace = require('gulp-ext-replace');
const htmlmin = require('gulp-htmlmin');
const minifyInline = require('gulp-minify-inline');
const processIfModified = require('gulp-process-if-modified');

const through2 = require('through2');

const AmpOptimizer = require('@ampproject/toolbox-optimizer');
const ampOptimizer = AmpOptimizer.create();
const gulpAmpValidator = require('gulp-amphtml-validator');
const amphtmlValidator = require('amphtml-validator');

const cssConverter = require('@gecka/styleflux');

function build(cb) {
  return src('./_site/**/*.html')
    .pipe(processIfModified()) // generate ./cache/-default.json
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
    // .pipe(minifyInline())
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
          for (var ii = 0; ii < result.errors.length; ii++) {
            var error = result.errors[ii];
            var msg =
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

function css2scss() {
  return src(['./_includes/css/*.css', '!**/*.min.css'])
    .pipe(processIfModified())
    .pipe(
      through2.obj(async (file, _, cb) => {
        if (file.isBuffer()) {
          const scssify = await cssConverter.cssToScss(
            file.contents.toString()
          );
          file.contents = Buffer.from(scssify);
        }
        cb(null, file);
      })
    )
    .pipe(ext_replace('.scss'))
    .pipe(dest('./_sass/'));
}

function minifyCSS() {
  return src(['./_includes/css/*.css', '!**/*.min.css'])
    .pipe(processIfModified())
    .pipe(csso())
    .pipe(ext_replace('.min.css'))
    .pipe(dest('./_includes/css/'));
}

exports.default = function() {
  watch(['./_includes/css/*.css', '!**/*.min.css'], parallel(css2scss, minifyCSS));
};

exports.build = build;
exports.test = test;
exports.convert = parallel(css2scss, minifyCSS);
exports.css2scss = css2scss;
exports.minifyCSS = minifyCSS;
exports.validate = validate;
