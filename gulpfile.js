var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
  	connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
  	port:8080,
  	livereload:true
  });
});

gulp.task('listen',function(){
	return watch('*.scss',function(){
    gulp.src('*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'))
      .pipe(connect.reload());
  });
});
 
gulp.task('default', ['connect','listen']);