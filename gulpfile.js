gulp=require('gulp');
minify=require('gulp-minify');
clean_css=require('gulp-clean-css');
gulp.task('min_js',function(){
	return gulp.src('src/js/*.js')
	.pipe(minify())
	.pipe(gulp.dest('js/'))
});
gulp.task('min_css',function(){
	return gulp.src('src/styles/*.css')
	.pipe(clean_css())
	.pipe(gulp.dest('styles/'))
});
