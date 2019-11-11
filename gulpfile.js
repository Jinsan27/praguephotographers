var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


/* Task to compile sass */
gulp.task('sass', function() {
	gulp.src('scss/main.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('dist/css/main'))
});

/* Task to watch sass changes */
gulp.task('watch-sass', function() {
	gulp.watch('scss/**/*.scss' , ['sass']);
});

gulp.task('serve', function () {

	// Serve files from the root of this project
	browserSync.init({
		server: {
			baseDir: "dist"
		}
	});
	gulp.watch("scss/**/*.scss").on("change", reload);
	gulp.watch("dist/*.html").on("change", reload);
});

/* Task when running `gulp` from terminal */
gulp.task('default', ['watch-sass', 'serve']);