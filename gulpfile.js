
var fs = require('fs');
var Mailgun = require('mailgun-js')

// Mailgun
var api_key = "key-9764ba5e75ff605c208541d0d8ab770a";

var domain = "linklatervoicekorea.com";
var mailgun = new Mailgun({apiKey: api_key, domain: domain});

var Recaptcha = require('express-recaptcha');
var recaptcha = new Recaptcha('6LfmmDQUAAAAAJzFYLj-n0hI_LKgaSZ8NMvfELsJ', '6LfmmDQUAAAAAAmLKQQQuKMm7bGKZdzrVaBuHck5');

const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("public/stylesheets"))
        .pipe(browserSync.stream());
});

// Move JS Files to src/js
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});

// Move Fonts to src/fonts
gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('src/fonts'));
});

// Move Font Awesome CSS to src/css
gulp.task('fa', function() {
  return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('src/css'));
});

gulp.task('default', ['sass', 'js', 'fa', 'fonts']);