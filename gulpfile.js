/*global require*/

(function () {
    'use strict';

    var gulp = require('gulp'),
        jshint = require('gulp-jshint'),
        mocha = require('gulp-mocha'),
        istanbul = require('gulp-istanbul'),
        clean = require('gulp-clean'),
        exec = require('gulp-exec'),
        plato = require('gulp-plato');

    gulp.task('lint', function () {
        gulp.src(['./lib/*', './test/*', './gulpfile.js'])
            .pipe(jshint('.jshintrc'))
            .pipe(jshint.reporter('default'));
    });

    gulp.task('pre-test', function () {
        return gulp.src(['lib/**/*.js'])
            // Covering files
            .pipe(istanbul())
            // Force `require` to return covered files
            .pipe(istanbul.hookRequire());
    });

    gulp.task('test', function () {
        gulp.src('./test/*.js').pipe(mocha({
            reporter: 'spec',
            bail: true,
            ui: 'bdd'
        }));
    });

    gulp.task('test-coverage', ['pre-test'], function () {
        return gulp.src(['test/*.js'])
            .pipe(mocha())
            // Creating the reports after tests ran
            .pipe(istanbul.writeReports())
            // Enforce a coverage of at least 90%
            .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
    });

    gulp.task('code-report', function () {
        gulp.src('./lib/*.js')
            .pipe(plato('./report'))
            .pipe(exec('echo The code report has been generated. See report directory for details.'));
    });

    gulp.task('reports', function () {
        gulp.run('test-coverage', 'code-report');
    });

    gulp.task('clean-reports', function () {
        gulp.src(['./coverage', './report'], {
            read: false
        })
            .pipe(clean({
                force: true
            }));
        gulp.src('').pipe(exec('echo Coverage ^& Report directories has been removed'));
    });
}());