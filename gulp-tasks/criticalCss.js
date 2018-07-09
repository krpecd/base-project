module.exports = function (gulp, $, paths, browsersList) {
  'use strict';

  //Critical CSS from sass compilation and minification
  gulp.task('critical-css', () => {
    return gulp
      .src(paths.sassCriticalSource)
      .pipe($.sass({
          includePaths: ['node_modules'],
        })
        .on('error', (err) => {
          console.error(err.toString());
        }))
      .pipe($.autoprefixer({
        browsers: browsersList
      }))
      .pipe($.csso())
      .pipe(gulp.dest(paths.cssOutputFolder));
  });
}
