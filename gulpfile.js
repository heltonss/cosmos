'use strict';
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const inject = require('gulp-inject');
const wiredep = require('wiredep').stream;
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const clean = require('gulp-clean-dest');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const Server = require('karma').Server;
const gulpProtractorAngular = require('gulp-angular-protractor');

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
    var target = gulp.src('app/index.html');
    var sources = gulp.src(['app/styles/**/**/*.css', 'app/scripts/**/**/*.js'], { read: false });

    target.pipe(inject(sources, { relative: true })).pipe(gulp.dest('./app'));
});

//watch all
gulp.task('watch', function() {
    gulp.watch("app/styles/**/**/**/*.scss", ['sass']);
    gulp.watch('bower.json', ['injection-bower']);
    gulp.watch(['app/styles/**/*.css', 'app/scripts/**/**/*.js'], ['injection-dev']);
});


//test with  karma and jasmine for CI - continuous integration
gulp.task('karma-test', function(done) {
    new Server({
        configFile: __dirname + '/test.karma.continuous.integration.js',
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

gulp.task('test-protractor', function(callback) {
    gulp.src(['test/e2e/*.js'])
        .pipe(gulpProtractorAngular({
            'configFile': 'test/test.protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true
        }))
        // .on('error', function(e) {
        //     console.log(e);
        // })
        .on('end', callback);
});


//process of buid
gulp.task('uglifyJs', function() {
    gulp.src(['app/bower_components/angular/angular.js', 'app/bower_components/angular-route/angular-route.js', 'app/bower_components/jquery/dist/jquery.js', 'app/bower_components/materialize/bin/materialize.js', 'app/scripts/**/**/*.js'])
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
    gulp.src(['app/**/**/*.html', '!app/index.html', '!app/bower_components/**/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('build/'))
});


gulp.task("inject-build", function() {
    var target = gulp.src('build/index.html');
    var sources = gulp.src(['build/css/**/*.css', 'build/js/**/*.js'], { read: false });

    target.pipe(inject(sources, { relative: true })).pipe(gulp.dest('build/'));
})

gulp.task('build', function() {
    gulp.watch(['app/styles/**/*.css', 'app/scripts/**/**/*.js'], ['perform-css', 'uglifyJs', 'inject-build']);
    gulp.watch(['app/**/**/*.html', '!app/index.html', '!app/bower_components/**/*.html'], ['perform-html']);
});

gulp.task('default', ['webserver', 'sass', 'injection-bower', 'injection-dev', 'watch', 'karma-tdd']);