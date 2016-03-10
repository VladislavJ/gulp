var gulp = require('gulp'),
	postcss = require('gulp-postcss');

gulp.task('css', function () {
return gulp.src('css/main.css')
.pipe(postcss([
	require('postcss-import'),
	require('postcss-nested'),
	require('autoprefixer'),
]))
.pipe(gulp.dest('dist'))
});



// gulp.task('default', function () {
//   return gulp.src('css/*.css')
//     .pipe(concatCss("styles/bundle.css"))
//     .pipe(gulp.dest('out/'));
// });