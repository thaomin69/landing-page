const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const watch = require('gulp-watch');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const jshint = require('gulp-jshint');
const sassGlob = require('gulp-sass-glob');

const sassMainFile = 'src/styles/main.scss';
const jsFiles = 'src/scripts/**/*.js';

function compileSass(done) {
    return gulp.src(sassMainFile)
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'))
        .on('end', done);
}

function processScripts(done) {
    return gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(jshint())
        .pipe(sourcemaps.write())
        .pipe(uglify())
        .pipe(concat('scripts.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist'))
        .on('end', done);
}

function watchFiles() {
    gulp.watch('src/styles/**/*', gulp.series(compileSass));
    gulp.watch('src/scripts/**/*', gulp.series(processScripts));
}

exports.sass = compileSass;
exports.scripts = processScripts;
exports.watch = watchFiles;
exports.default = gulp.series(compileSass, processScripts, watchFiles);