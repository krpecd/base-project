module.exports = function (gulp, $, paths, browsersList) {
  'use strict';

  //Sass compilation and minification
  gulp.task('sass', () => {
    return gulp
      .src(paths.sassSource)
      .pipe($.sass({
          includePaths: ['node_modules'],
        })
        .on('error', (err) => {
          sass.logError;
          $.notify().write(err);
        }))
      .pipe($.autoprefixer({
        browsers: browsersList
      }))
      .pipe($.csso())
      .pipe(gulp.dest(paths.cssOutputFolder))
      .pipe($.notify({
        title: 'SASS compilation Success',
        message: 'Styles task complete'
      }));
  });
}
