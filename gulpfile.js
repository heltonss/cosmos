'use strict';
const gulp = require('gulp');
var browserSync = require('browser-sync').create();
const inject = require('gulp-inject');
const wiredep = require('wiredep').stream;
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const clean = require('gulp-clean-dest');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const Server = require('karma').Server;
const protractor = require("gulp-protractor").protractor;
var webdriver_update = require('gulp-protractor').webdriver_update;
var webdriver_standalone = require("gulp-protractor").webdriver_standalone;

//webserver listening directories
gulp.task('webserver', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
    gulp.watch("app/**/*.html").on('change', browserSync.reload);
});

//SASS
gulp.task('sass', function() {
    return gulp.src('app/styles/sass/**/*.scss').pipe(sass({
        noCache: true
    })).pipe(gulp.dest('app/styles/css'));
});

//Injecting dependencies of the bower with wiredep
gulp.task('injection-bower', function() {
    gulp.src('app/index.html').pipe(wiredep({})).pipe(gulp.dest('app/'));
});

//inject the scripts js and the css
gulp.task('injection-dev', function() {
    const target = gulp.src('app/index.html');
    const sources = gulp.src(['app/styles/**/*.css', 'app/scripts/**/*.js'], { read: false });

    target.pipe(inject(sources, { relative: true })).pipe(gulp.dest('./app'));
});

//watch all
gulp.task('watch', function() {
    gulp.watch("app/styles/**/**/*.scss", ['sass']);
    gulp.watch('bower.json', ['injection-bower']);
    gulp.watch(['app/styles/**/*.css', 'app/scripts/**/*.js'], ['injection-dev']);
});


//test with  karma and jasmine for CI - continuous integration
gulp.task('karma-test', function(done) {
    new Server({
        configFile: __dirname + '/test/test.karma.conf.js',
        singleRun: true
    }, done).start();
});

//test with karma and jasmine for TDD
gulp.task('karma-tdd', function(done) {
    new Server({
        configFile: __dirname + '/test/test.karma.conf.js'
    }, done).start();
});

//test end to end with protractor and webdriver
gulp.task('webdriver_standalone', webdriver_standalone);
gulp.task('webdriver_update', webdriver_update);

gulp.task('test-protractor', ['webdriver_update'], function(done) {
    gulp.src(["test/e2e/*.js"])
        .pipe(protractor({
            configFile: "test/test.protractor.conf.js",
            args: ['--baseUrl', 'http://localhost:3000']
        }))
        .on('error', function(e) {
            console.log(e);
        })
        .on('end', done)
});


//process of buid
gulp.task('uglifyJs', function() {
    gulp.src(['app/bower_components/angular/angular.js', 'app/bower_components/angular-route/angular-route.js', 'bower_components/jquery/dist/jquery.js', 'bower_components/materialize/bin/materialize.js', 'app/scripts/**/**/*.js'])
        .pipe(uglify())
        .pipe(concat('script.min.js'))
        .pipe(clean('build/js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('perform-css', function() {
    gulp.src(['app/bower_components/materialize/bin/materialize.css', 'app/bower_components/material-design-icons/iconfont/material-icons.css', 'app/styles/**/*.css'])
        .pipe(cleanCSS())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('perform-html', function() {
    gulp.src(['app/**/**/*.html', '!app/index.html', '!app/bower_components'])
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('build/'))
});


gulp.task("inject-build", function() {
    const target = gulp.src('build/index.html');
    const sources = gulp.src(['build/css/**/*.css', 'build/js/**/*.js'], { read: false });

    target.pipe(inject(sources, { relative: true })).pipe(gulp.dest('build/'));
})

gulp.task('build', function() {
    gulp.watch(['app/styles/**/*.css', 'app/scripts/**/**/*.js'], ['perform-css', 'uglifyJs', 'inject-build']);
    gulp.watch(['app/**/**/*.html', '!app/index.html', '!app/bower_components'], ['perform-html']);
});

gulp.task('default', ['webserver', 'sass', 'injection-bower', 'injection-dev', 'watch', 'karma-tdd', 'build']);