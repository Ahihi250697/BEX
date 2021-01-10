const gulp = require('gulp');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const htmlBeauty = require('gulp-html-beautify');
const imagemin = require('gulp-imagemin');
// const plumber = require('gulp-plumber');

const path = require('path');
const browserSync = require('browser-sync').create();

// const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const sortMediaQueries = require('postcss-sort-media-queries');
const perfectCss = require('perfectionist');
const suit = require('postcss-bem-fix');

gulp.task('browserSync', function() {
    browserSync.init({
       server: {
          baseDir: './'
       },
    });
    gulp.watch("**/*.html").on('change', browserSync.reload);
    gulp.watch("./js/**/*.js").on('change', browserSync.reload);
    gulp.watch("./images/**/*.{png,gif,jpg,svg}").on('change', browserSync.reload);
 })

gulp.task('pug', function(){
    return gulp.src('./source/pug/page/*.pug')
        .pipe(pug())
        .pipe(htmlBeauty({indentSize: 4}))
        .pipe(rename(function(file){
            if(file.basename != 'index') {
                file.dirname = path.join(file.dirname, file.basename);
                file.basename = 'index';
                file.extname = '.html';
            } else {
                file.dirname = path.dirname(file.dirname)
                // console.log(file.dirname);
            }
        }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('img', function(){
    return gulp.src('./source/images/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('./images/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('css', function(){
    var processors = [
        suit({
            defaultNamespace: undefined,
            style: 'suit',
            separators: {
                descendent: '__'
            },
            shortcuts: {
                utility: 'util'
            }
        }),
        postcssPresetEnv({ browsers: 'last 2 versions' }),
        sortMediaQueries({
            sort: 'desktop-first'
        }),
        // cssnano,
        perfectCss({
            cascade: true,
            colorCase: 'lower',
            colorShorthand: true,
            trimLeadingZero: true
        })
    ];
    return gulp.src('./source/sass/Page/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(prefix('last 2 versions'))
        .pipe(sourcemaps.write('./sourcemap'))
        // .pipe(plumber())
        // .pipe(plumber.stop())
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', function() {
    gulp.watch('./source/sass/**/*.sass', gulp.series('css'));
    gulp.watch('./source/pug/**/*.pug', gulp.series('pug'));
    gulp.watch(['./source/sass/**/*.sass', './source/pug/**/*.pug'], gulp.series('browserSync'));
  });