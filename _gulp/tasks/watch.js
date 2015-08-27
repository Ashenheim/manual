/* ====================================
    Default
==================================== */
var gulp            = require('gulp');
var browserSync     = require('browser-sync');
var config          = require('../config.js');

/*
    Tasks & Functions
------------------------------------ */

gulp.task('watch', function() {
    gulp.watch( config.sass.src, ['sass']);
    gulp.watch( config.js.src, ['scripts']);
    gulp.watch( config.media.src, ['media']);
    gulp.watch( config.html.src ).on('change', browserSync.reload);
});
