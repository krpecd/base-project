module.exports = function (gulp, $, paths) {
  'use strict';

  gulp.task('watch-scripts', () => {
    return gulp.watch(paths.jsWatchPath, gulp.parallel('scripts'));
  });

  gulp.task('watch-css', () => {
    return gulp.watch(paths.sassWatchPath, gulp.series('sass-lint', 'critical-css', 'sass'));
  });
}
