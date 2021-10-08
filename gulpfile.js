const {src, dest, watch, series, parallel} = require('gulp');
const csso = require('gulp-csso');
const ext_replace = require('gulp-ext-replace');
const htmlmin = require('gulp-htmlmin');
const minifyInline = require('gulp-minify-inline');
const through2 = require('through2');

const AmpOptimizer = require('@ampproject/toolbox-optimizer');
const ampOptimizer = AmpOptimizer.create();
const gulpAmpValidator = require('gulp-amphtml-validator');

const cssConverter = require('styleflux');

function build(cb) {
  return src('./_site/**/*.html')
    .pipe(
      through2.obj(async (file, _, cb) => {
        if (file.isBuffer()) {
          const optimizedHtml = await ampOptimizer.transformHtml(
            file.contents.toString()
          );
          file.contents = Buffer.from(optimizedHtml);
        }
        cb(null, file);
      })
    )
    .pipe(htmlmin({ collapseWhitespace: false }))
    .pipe(minifyInline())
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
      .pipe(gulpAmpValidator.failAfterError());
}

function css2scss() {
  return src(['./_includes/css/*.css', '!**/*.min.css'])
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
    .pipe(csso())
    .pipe(ext_replace('.min.css'))
    .pipe(dest('./_includes/css/'));
}

exports.default = function() {
  watch(['./_includes/css/*.css', '!**/*.min.css'], parallel(css2scss, minifyCSS));
};

exports.build = build;
exports.test = test;
exports.css2scss = css2scss;
exports.minifyCSS = minifyCSS;