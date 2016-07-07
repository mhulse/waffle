var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var coffee = require('gulp-coffee');
var connect = require('gulp-connect');

gulp.task('connect', function() {
	connect.server({
		root: '../demo',
		livereload: true
	});
});

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
		.pipe(connect.reload());
});

gulp.task('coffee', function() {
	gulp.src('files/scripts/coffee/*.coffee')
		.pipe(sourcemaps.init())
		.pipe(coffee({
			bare: true
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('files/scripts/js'))
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('files/styles/scss/**/*.scss', [
		'sass',
	]);
	gulp.watch('files/scripts/coffee/**/*.coffee', [
		'coffee',
	]);
});

gulp.task('default', [
	'connect',
	'watch',
]);
