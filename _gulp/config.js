/* ====================================
    Configuration file
==================================== */
var autoprefixer    = require('autoprefixer');
var csswring        = require('csswring');
var cssgrace        = require('cssgrace');

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


module.exports = {

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
        dest: 'assets/css/',
        settings: {
            sourcemaps: {
                includeContent: false,
                sourceRoot: '../../_source/sass'
            },
            sass: {
                outputStyle: 'nested',
                errLogToConsole: false
            },
            postcss: [
                autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', "ie 9"]}),
                cssgrace,
                csswring
            ]
        }
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

}
