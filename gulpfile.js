'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('./styles/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./assets/styles'));
}

exports.buildStyles = buildStyles;
exports.watch = function () {
    gulp.watch('./styles/**/*.scss', gulp.parallel('buildStyles'));
};


