module.exports = function (gulp, $, paths) {
  'use strict';

  const browserSync = require('browser-sync');

  // browsersync config
  const bsConfig = require('../bs-config.js');

  function bs() {

    browserSync.init(bsConfig);
    browserSync.watch(paths.cssOutputFile, () => {
      browserSync.reload('*.css');
    });
    browserSync.watch(paths.jsOutputFile, () => {
      browserSync.reload('*.js');
    });

    browserSync.watch(paths.smartyWatchPath, () => {
      browserSync.reload();
    })
  }

  gulp.task('browser-sync', () => {
    return bs();
  });
}
