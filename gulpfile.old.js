/* ------------------------------------
    Dependencies
------------------------------------ */
var gulp            = require('gulp');
// Style
var sass            = require('gulp-sass');
var sourcemaps      = require('gulp-sourcemaps');
var postcss         = require('gulp-postcss');
var autoprefixer    = require('autoprefixer');
var csswring        = require('csswring');
var cssgrace        = require('cssgrace');
// Javascript
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');
var ngAnnotate      = require('gulp-ng-annotate');
// Media
var svgstore        = require('gulp-svgstore');
var svgmin          = require('gulp-svgmin');
// Build
var rename          = require('gulp-rename');
var plumber         = require('gulp-plumber');
var browserSync     = require('browser-sync');


/* ------------------------------------
    Settings
------------------------------------ */

var settings = {
    sass: {
        outputStyle: 'nested',
        errLogToConsole: false
    },
    postcss: [
        autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', "ie 9"]}),
        cssgrace,
        csswring
    ]
};

var paths = {
    source: {
        sass : '_source/sass/',
        js   : '_source/js/',
        media: '_source/media/'
    },
    assets: {
        css : 'assets/css/',
        js  : 'assets/js/',
        media: 'assets/media/'
    },
    bower: 'bower_components/'
};

var files = {
    html: {
        src: [
            '*.{html,md,json,yml}',
            '**/*.{html,md,json,yml}'
        ]
    },
    sass: {
        src: [
            '_source/sass/**/*.{scss,sass}',
            '_source/sass/*.{scss,sass}'
        ],
        dest: 'assets/css/'
    },
    media: {
        src: [
            '_source/media/*.svg',
            '_source/media/**/*.svg'
        ],
        dest: 'assets/media/'
    },
    js: {
        src: [
            paths.bower + 'angular/angular.min.js',
            paths.bower + 'angular-sanitize/angular-sanitize.min.js',
            paths.bower + 'angular-animate/angular-animate.min.js',
            paths.bower + 'angular-embed-codepen/dist/embed-codepen.min.js',
            paths.bower + 'angular-ui-router/release/angular-ui-router.min.js',
            paths.bower + 'jquery/dist/jquery.min.js',
            paths.bower + 'showdown/dist/showdown.min.js',

            '_source/js/vendors/*.js',
            '_source/js/partials/*.js',
            '_source/js/init.js'
        ],
        dest: 'assets/js/'
    }
};

/* ------------------------------------
    Invidual tasks
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

gulp.task('scripts', function() {
  browserSync.notify('<span style="color: grey">Running:</span> Javascript compiling');
  gulp.src(files.js.src)
    .pipe(concat('global.js'))
    .pipe(gulp.dest(files.js.dest))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('minify', function() {
    gulp.src(files.js.src)
        .pipe(concat('global.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest(files.js.dest));
});




gulp.task('media', function() {
    gulp.src( files.media.src )
        .pipe(svgmin({
            plugins: [
                { removeViewBox: false },
                { removeUselessStrokeAndFill: false },
                { moveGroupAttrsToElems: false }
            ]
        }))
        .pipe(gulp.dest( files.media.dest ))
        .pipe(rename({prefix: 'icon-'}))
        .pipe(svgstore())
        .pipe(gulp.dest( files.media.dest ))
        .pipe(browserSync.reload({stream:true}))
});



gulp.task('watch', function() {
    gulp.watch( files.sass.src, ['sass']);
    gulp.watch( files.js.src, ['scripts']);
    gulp.watch( files.media.src, ['media']);
    gulp.watch( files.html.src ).on('change', browserSync.reload);
});

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


// Bundled tasks
gulp.task('serve', ['watch', 'browser-sync'])
gulp.task('default', ['sass', 'scripts', 'media', 'watch', 'browser-sync']);
