module.exports = function (gulp, $, paths) {
  'use strict';

  const config = {
    mode: {
      stack: {
        render: {
          scss: false
        }
      }
    }
  };

  gulp.task('svg-sprite', () => {
    return gulp
      .src(paths.svgEntryFiles)
      .pipe($.plumber())
      .pipe($.svgSprite(config))
      .pipe(gulp.dest(paths.svgOutputFolder));
  });
};
