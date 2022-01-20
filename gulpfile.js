var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
 
function compile() {
  return gulp
  .src('css/*.scss')
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(postcss([
    autoprefixer({cascade: false})
  ]))
  .pipe(gulp.dest('css'))
};

function watchtask(){
    gulp.watch("css/*.scss",compile)
};

exports.default = watchtask;
