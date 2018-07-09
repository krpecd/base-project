module.exports = function (gulp, $, paths) {
  'use strict';

  const browserify = require('browserify'),
        source = require('vinyl-source-stream'),
        buffer = require('vinyl-buffer');

  gulp.task('scripts', () => {
    return browserify(paths.jsEntryPoint, {
        debug: true,
        extensions: ['es6']
      })
      .transform('babelify', {
        presets: ['es2015']
      })
      .bundle()
      .pipe($.plumber())
      .on('error', error => {
        console.error(error.toString());
        this.emit('end');
      })
      .pipe(source('main.js'))
      .pipe(buffer())
      .pipe(gulp.dest('./js/'))
      .pipe($.rename('main.min.js'))
      .pipe($.uglify())
      .pipe(gulp.dest('./js/'))
      .pipe($.notify({
        title: 'JS compilation Success',
        message: 'JS task complete'
      }));
  });
};
