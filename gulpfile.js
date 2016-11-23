var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
  	connect = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');
 
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

gulp.task('way1',function () {
	return watch('./way-1/sass/*.scss',function () {
		gulp.src('./way-1/sass/*.scss')
			//.pipe(sourcemaps.init())
			.pipe(sass().on('error',sass.logError))
			//.pipe(sourcemaps.write())
			.pipe(gulp.dest('./way-1/css'))
			.pipe(connect.reload());
	});
});

gulp.task('default', ['connect','listen']);
gulp.task('default-way1',['connect','way1']);