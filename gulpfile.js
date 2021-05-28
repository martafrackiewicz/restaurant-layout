const gulp = require('gulp'); 
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const csso = require('gulp-csso');
const imagemin = require("gulp-imagemin");

sass.compiler = require('sass')


function server(cb) { 
    browserSync.init({
      server: {
        baseDir: "./dist",
      },
      notify: false,
      open: true
    });
    cb();
}

function makeCss() {
    return gulp
      .src("./src/scss/main.scss")
      .pipe(sourcemaps.init())
      .pipe(
        sass({
          outputStyle: "compressed",
        })
      )
      .pipe(autoprefixer())
      .pipe(csso())
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("./dist/css"))
      .pipe(browserSync.reload({ stream: true }));
}

function makeHtml() {
    return gulp
      .src("./src/index.html")
      .pipe(gulp.dest("./dist"))
      .pipe(browserSync.reload({ stream: true }));
}

function makeJs() {
    return gulp
      .src("./src/script.js")
      .pipe(uglify())
      .pipe(gulp.dest("./dist"))
      .pipe(browserSync.reload({ stream: true }));
}

function images() {
    return gulp
      .src("./src/images/*.*")
      .pipe(imagemin({ optimizationLevel: 7, progressive: true }))
      .pipe(gulp.dest("./dist/images"));
};


function watch() {
    gulp.watch("./src/scss/**/*.scss", gulp.series(makeCss));
    gulp.watch("./src/*.html", gulp.series(makeHtml));
    gulp.watch("./src/*.js", gulp.series(makeJs));
    gulp.watch("./dist/*").on("change", browserSync.reload);
}

module.exports.makeCss = makeCss;
module.exports.watch = watch;
module.exports.makeHtml = makeHtml;
module.exports.makeJs = makeJs;
module.exports.images = images;

module.exports.default = gulp.series(
    server,
    makeCss,
    makeHtml,
    makeJs,
    images,
    watch
);