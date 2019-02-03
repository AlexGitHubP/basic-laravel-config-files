var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');


gulp.task('compileSASS', function() {
    gulp.src('resources/sass/*.scss')
        .pipe(sass({
        			outputStyle: 'compressed'
        		}
        	).on('error', sass.logError))
        .pipe(gulp.dest('public/css'))
        .pipe(livereload())
});


//Watch task
gulp.task('default',function() {
	livereload.listen('reloadPage');
    gulp.watch('resources/sass/*.scss',['compileSASS']);
});