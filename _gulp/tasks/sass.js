/* ====================================
    Default
==================================== */
var gulp            = require('gulp');
var sass            = require('gulp-sass');
var postcss         = require('gulp-postcss');
var sourcemaps      = require('gulp-sourcemaps');
var plumber         = require('gulp-plumber');
var browserSync     = require('browser-sync');
var config          = require('../config.js').sass;

/*
    Tasks & Functions
------------------------------------ */

// Error handler
var onError = function (err) {
    var errorMessage =
        '<span style="color: #f10000;">Sass error: </span>' + err.message +
        '<span style="display: block; color: #ccc; font-size: 80%;"> on line: <span style="color: #fff;">' +
            err.line +
        '</span></span>' +
        '<span style="display: block; color: #ccc; font-size: 80%;"> in file: <span style="color: #fff;">' + err.file + '</span></span>';

    console.log(err);
    browserSync.notify(errorMessage);
    this.emit('end');
};

gulp.task('sass', function() {
    browserSync.notify('<span style="color: grey">Running:</span> Sass compiling');
    gulp.src(config.src)
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sourcemaps.init())
        .pipe(sass( config.settings.sass ))
        .pipe(postcss(config.settings.postcss))
        .pipe(sourcemaps.write( '../maps', config.settings.sourcemaps ))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.stream({match: '**/*.css'}));
});
