const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const autoprefixer = require('gulp-autoprefixer');
const watch = require('gulp-watch');

gulp.task('buildjs', () => {
    return gulp
        .src('js/**/*.+(js|css)')
	       .pipe(babel({presets: ['es2015']}))
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('buildcss', () => {
    return gulp
        .src('style/**/*.+(js|css|scss)')
        .pipe(sass())
        .pipe(uglifycss({
            // "maxLineLen": 80,
            "uglyComments": false
        }))
        .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('watch', () => {
    gulp.watch(['./style/**/*.scss', './style/**/*.css'], ['buildcss']);
    gulp.watch([
        './js/**/*.js', './es6/*.js'
    ], ['buildjs']);
});

//default
gulp.task('default', ['watch']);
