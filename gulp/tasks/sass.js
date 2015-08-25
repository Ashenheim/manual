var gulp            = require('gulp');
var sass            = require('gulp-sass');
var sourcemaps      = require('gulp-sourcemaps');
var postcss         = require('gulp-postcss');
var autoprefixer    = require('autoprefixer');
var csswring        = require('csswring');
var cssgrace        = require('cssgrace');
var plumber         = require('gulp-plumber');
var browserSync     = require('browser-sync');

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
    gulp.src(files.sass.src)
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sourcemaps.init())
        .pipe(sass( settings.sass ))
        .pipe(postcss(settings.postcss))
        .pipe(sourcemaps.write(
            '../maps',
            {
                includeContent: false,
                sourceRoot: '../../_source/sass'
            }
        ))
        .pipe(gulp.dest(files.sass.dest))
        .pipe(browserSync.stream({match: '**/*.css'}));
});
