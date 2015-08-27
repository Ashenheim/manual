/* ====================================
    Default
==================================== */
var gulp            = require('gulp');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');
var ngAnnotate      = require('gulp-ng-annotate');
var plumber         = require('gulp-plumber');
var browserSync     = require('browser-sync');
var config          = require('../config').js;

/*
    Tasks & Functions
------------------------------------ */

gulp.task('scripts', function() {
    browserSync.notify('<span style="color: grey">Running:</span> Javascript compiling');
    gulp.src(config.src)
        .pipe(plumber())
        .pipe(concat('global.js'))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('minify', function() {
    gulp.src(config.src)
        .pipe(concat('global.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest(config.dest));
});
