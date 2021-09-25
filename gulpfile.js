const {src, dest} = require('gulp');
const htmlmin = require('gulp-htmlmin');
const minifyInline = require('gulp-minify-inline');
const through2 = require('through2');

const AmpOptimizer = require('@ampproject/toolbox-optimizer');
const ampOptimizer = AmpOptimizer.create();

function build(cb) {
  return src('/github/workspace/build/**/*.html')
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
    .pipe(minifyInline())
    .pipe(htmlmin({ collapseWhitespace: false }))
    .pipe(dest('/github/workspace/build/'));
}

exports.default = build;