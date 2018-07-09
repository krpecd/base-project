module.exports = function (gulp, $, paths) {
  'use strict';

  gulp.task('sass-lint', () => {
    return gulp.src(paths.sassWatchPath)
      .pipe($.sassLint({
        configFile: './.sass-lint.yml'
      }))
      .pipe($.sassLint.format())
  });
};
