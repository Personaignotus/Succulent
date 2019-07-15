//Deklaracja zmiennych
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');


gulp.task('serve', (done) => {
  browserSync.init({
    server: {
        baseDir: './'
    },
  });

  done();

  // gulp.watch('assets/styles/**/*.scss', gulp.series('sass'));
});

gulp.task('sass', () => {
  return gulp.src('assets/styles/main.scss')
  .pipe(sass()) // Converts Sass to CSS with gulp-sass
  .pipe(gulp.dest('assets/styles'))
  .pipe(browserSync.reload({
    stream: true
    }))
});

gulp.task('watch', () => {
    gulp.watch('assets/styles/**/*.scss', gulp.series('sass'));
});
  
gulp.task('default', gulp.series('sass', 'serve', 'watch'));