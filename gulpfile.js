const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const terser = require('gulp-terser');


gulp.task('sass', function () {
    return gulp.src('./src/sass/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});


gulp.task('imagemin', function () {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
});


gulp.task('compress-js', function () {
    return gulp.src('./src/js/**/*.js')
        .pipe(terser())
        .pipe(gulp.dest('./dist/js'));
});


gulp.task('default', gulp.parallel('sass', 'imagemin', 'compress-js'));
