var gulp            = require('gulp');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');
var ngAnnotate      = require('gulp-ng-annotate');
var plumber         = require('gulp-plumber');
var browserSync     = require('browser-sync');


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
})
