const gulp = require('gulp');
const { src, series, parallel, dest, watch } = require('gulp')
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
//const sass = require('gulp-sass');
//const browserSync = require('browser-sync').create();

const jsPath = 'src/js/**/*.js';


// function copyHtml() {}

function imgTask() {
	return src('src/images/*').pipe(imagemin()).pipe(gulp.dest('build/images'));
}

function jsTask() {
	return src(jsPath)
		.pipe(sourcemaps.init())
		.pipe(concat('all.js'))
		.pipe(terser())
		.pipe(sourcemaps.write('.'))
		.pipe(dest('build/assets/js'));
}

// compile scss into css
function style() {

	// where is my css file
	return gulp.src('./scss/**/*.scss')
		// pass that file thru sass compiler
		.pipe(sass().on('error', sass.logError))
		// where to save the compile css
		.pipe(gulp.dest('./css'))
		// stream changes to all browser
		.pipe(browserSync.stream());
}


exports.jsTask = jsTask;
//exports.default = paralell() // will make default 'gulp' command
exports.style = style;
exports.watch = watch;
exports.imgTask = imgTask;

