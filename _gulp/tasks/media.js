/* ====================================
    Media
==================================== */
var gulp            = require('gulp');
var svgstore        = require('gulp-svgstore');
var svgmin          = require('gulp-svgmin');
var plumber         = require('gulp-plumber');
var rename          = require('gulp-rename');
var browserSync     = require('browser-sync');
var config          = require('../config.js').media;

/*
    Tasks & Functions
------------------------------------ */

gulp.task('media', function() {
    gulp.src( config.src )
        .pipe(svgmin({
            plugins: [
                { removeViewBox: false },
                { removeUselessStrokeAndFill: false },
                { moveGroupAttrsToElems: false }
            ]
        }))
        .pipe(gulp.dest( config.dest ))
        .pipe(rename({prefix: 'icon-'}))
        .pipe(svgstore())
        .pipe(gulp.dest( config.dest ))
        .pipe(browserSync.reload({stream:true}))
});
