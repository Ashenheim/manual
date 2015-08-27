/* ====================================
    Default
==================================== */
var gulp            = require('gulp');
var browserSync     = require('browser-sync');
var config          = require('../config.js').browsersync;

/*
    Tasks & Functions
------------------------------------ */

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: '.'
        },
        host: "localhost",
        online: true,
        open: false,
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
