'use strict';


/* ------------------------------------
    Dependencies
------------------------------------ */
var gulp            = require('gulp');
var sass            = require('gulp-sass');
var sourcemaps      = require('gulp-sourcemaps');
var autoprefixer    = require('gulp-autoprefixer');
var plumber         = require('gulp-plumber');
var browserSync     = require('browser-sync');


/* ------------------------------------
    Settings
------------------------------------ */

var settings = {
    sass: {
        style: 'compressed',
        errLogToConsole: false
    },
    autoprefixer: {
        browsers: ['last 2 versions'],
        cascade: false
    }
};

var files = {
    html: {
        src: [
            '*.html'
        ]
    },
    sass: {
        src: [
            'sass/**/*.{scss,sass}',
            'sass/*.{scss,sass}'
        ],
        dest: 'css/'
    },
    js: {
        src: [
            'js/*.js',
            'js/**/*.js'
        ]
    }
};

/* ------------------------------------
    Invidual tasks
------------------------------------ */

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
    gulp.src(files.sass.src)
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sourcemaps.init())
        .pipe(sass( settings.sass ))
        .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/sass'}))
        .pipe(autoprefixer(settings.autoprefixer))
        .pipe(gulp.dest(files.sass.dest))
        .pipe(browserSync.stream());
});


gulp.task('watch', function() {
    gulp.watch( files.sass.src , ['sass']);
    gulp.watch( files.js.src ).on('change', browserSync.reload);
    gulp.watch( files.html.src ).on('change', browserSync.reload);
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: '.'
        },
        host: "localhost",
        open: true,
        online: true,
        notify: {
            styles: [
                'color: rgb(255, 255, 255)',
                'position: fixed',
                'z-index: 999999',
                'bottom: 0px',
                'left: 0px',
                'font-size: 1em',
                'background: rgba(0, 0, 0, 0.8)',
                'font-family: arial, sans-serif',
                'padding: 10px',
                'box-shadow: 0 0 5px rgba(0,0,0,.3)'
            ]
        }
    });
});


// Bundled tasks
gulp.task('default', ['sass', 'watch', 'browser-sync']);
