var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var bower = require('main-bower-files');
var autoprefixer = require('gulp-autoprefixer');
var coffee = require('gulp-coffee');

gulp.task('sass', function() {
	gulp.src('files/styles/scss/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed',
			precision: 14,
		})
		.on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('files/styles/css'))
});

gulp.task('watch', function() {
	gulp.watch('files/styles/scss/**/*.scss', [ 'sass', ]);
	gulp.watch('files/scripts/coffee/**/*.coffee', [ 'coffee', ]);
});

gulp.task('coffee', function() {
	gulp.src('files/scripts/coffee/*.coffee')
		.pipe(sourcemaps.init())
		.pipe(coffee({
			bare: true
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('files/scripts/js'))
});

gulp.task('bower', function() {
	
	gulp.src(bower(), {
		base: 'bower_components' // Required!
	})
		.pipe(gulp.dest('files/plugins'));
	
});

gulp.task('default', [ 'watch', ]);
