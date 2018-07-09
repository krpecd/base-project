'use strict';

// plugins
const gulp = require('gulp'),
      plugins = require('gulp-load-plugins')();

const taskPath = './gulp-tasks/',
      taskList = require('fs').readdirSync(taskPath);

// pathConfig
const paths = {
  jsEntryPoint: './src/js/main.js',
  jsWatchPath: './src/js/**/*.js',
  jsOutputFile: './js/main.min.js',
  sassSource: './src/scss/main.scss',
  sassCriticalSource: './src/scss/critical.scss',
  sassWatchPath: './src/scss/**/*.scss',
  cssOutputFile: './css/main.css',
  cssOutputFolder: './css',
  smartyWatchPath: './**/*.tpl'
};

//BrowsersList config for autoprefixer
const browsersList = [
  '> 1%',
  'Last 3 versions',
  'iOS > 8',
  'not IE 10',
  'not IE 9',
  'not bb 7'
];

// Require basic tasks
taskList.forEach(function (taskFile) {
  require(taskPath + taskFile)(gulp, plugins, paths, browsersList);
});

// Watch task
gulp.task('watch', gulp.series('scripts', 'sass-lint', 'critical-css', 'sass', gulp.parallel('watch-scripts', 'watch-css')))

// Default task
gulp.task('default', gulp.series('scripts', 'sass-lint', 'critical-css', 'sass', gulp.parallel('browser-sync', 'watch')));
