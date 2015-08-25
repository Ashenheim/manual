var gulp            = require('gulp');
var browserSync     = require('browser-sync');
var config          = require('../config').Sass;

gulp.task('watch', function() {
    gulp.watch( config.files.sass.src, ['sass']);
    gulp.watch( config.files.js.src, ['scripts']);
    gulp.watch( config.files.html.src ).on('change', browserSync.reload);
});
