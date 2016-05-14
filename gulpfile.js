/**
 * Created by ioanistrate on 4/13/16.
 */
'use strict';
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    runSequence = require('run-sequence'),
    plumber = require('gulp-plumber'),

    //Images
    imagemin = require('gulp-imagemin'),

    //JavaScript/Typescript
    uglify = require('gulp-uglify'),
    typescript = require('gulp-typescript'),

    //SASS/CSS
    compass = require('gulp-compass'),
    csso = require('gulp-csso'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
	postcss    = require('gulp-postcss'),

    //Directories
    PRODUCTION_DIR = 'production/',
    DEVELOPMENT_DIR  = 'development/';


function errorHandler(err) {
    //log the error
    console.log(err);
    //end task that caused error
    this.emit('end');
}

gulp.task('clean:js', function() {
    return del.sync(PRODUCTION_DIR.concat('js/**/*.js'));
});

gulp.task('clean:html', function() {
    return del.sync(PRODUCTION_DIR.concat('**/*.html'));
});

gulp.task('clean:app', function() {
    return del.sync(PRODUCTION_DIR.concat('app/**/*.js'));
});


gulp.task('clean:css', function() {
    return del.sync([PRODUCTION_DIR.concat('css/**/.css')]);
});

gulp.task('clean:images', function() {
    return del.sync(PRODUCTION_DIR.concat('images/**/*.*'));
});

gulp.task('html', function() {
    gulp.src(DEVELOPMENT_DIR.concat('**/*.html'))
        .pipe(plumber({
            handleError: errorHandler
        }))
        .pipe(gulp.dest(PRODUCTION_DIR))
        .pipe(livereload());
});

/*regular es6*/
gulp.task('js', function() {
    //grab all our javascript stuff from development
    gulp.src(DEVELOPMENT_DIR.concat('js/**/*.js'))
        .pipe(plumber({
            handleError: errorHandler
        }))
        .pipe(sourcemaps.init())
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())

        .pipe(gulp.dest(PRODUCTION_DIR.concat('js')))
        .pipe(livereload());
});

/*typescript*/
var tsProject = typescript.createProject('tsconfig.json');
gulp.task('ts', function() {
    gulp.src(DEVELOPMENT_DIR.concat('app/**/*.ts'))
        .pipe(typescript(tsProject))
        .pipe(gulp.dest(PRODUCTION_DIR.concat('app')))
        .pipe(livereload());
});

gulp.task('style', function() {
    gulp.src(DEVELOPMENT_DIR.concat('sass/**/*.scss'))
        .pipe(plumber({
            handleError: errorHandler
        }))
        .pipe(compass({
            config_file: DEVELOPMENT_DIR.concat('sass/config.rb'),
            image: PRODUCTION_DIR.concat('images'),
            css: PRODUCTION_DIR.concat('css'),
            sass: DEVELOPMENT_DIR.concat('sass'),
            font: DEVELOPMENT_DIR.concat('typography/fonts')
        }))
        //.pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(postcss([ require('postcss-flexibility') ]))
        .pipe(autoprefixer({browsers: ['last 2 version', 'ie 9-11']}))
        .pipe(csso())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(PRODUCTION_DIR.concat('css')))
        .pipe(livereload());
});

gulp.task('images', function() {
    gulp.src(DEVELOPMENT_DIR.concat('images/*.*'))
        .pipe(plumber({
            handleError: errorHandler
        }))
        .pipe(imagemin())
        .pipe(gulp.dest(PRODUCTION_DIR.concat('images')))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(DEVELOPMENT_DIR.concat('images/**.*'), function() {runSequence('clean:images','images')});
    gulp.watch(DEVELOPMENT_DIR.concat('js/**.js'), function() {runSequence('clean:js','js')});
    gulp.watch(DEVELOPMENT_DIR.concat('app/**/*.ts'), function() {runSequence('clean:app','ts')});
    gulp.watch(DEVELOPMENT_DIR.concat('sass/**/*.scss'), function() {runSequence('clean:css','style')});
    gulp.watch(DEVELOPMENT_DIR.concat('**/*.html'), ['html']);
});

gulp.task('default', function() {
    //run clean, (build css,js,images)
    runSequence('clean:js', "clean:html", "clean:images", "clean:app", "clean:css", ['html', 'js', 'ts', 'style', 'images']);
});