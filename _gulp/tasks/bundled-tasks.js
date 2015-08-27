/* ====================================
    Default
==================================== */
var gulp            = require('gulp');

/*
    Tasks & Functions
------------------------------------ */

gulp.task('serve',   ['watch', 'browser-sync'])
gulp.task('default', ['sass', 'scripts', 'media', 'watch', 'browser-sync']);
