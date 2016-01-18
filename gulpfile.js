var gulp = require('gulp');
var concat = require('gulp-concat-util');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var SETTINGS = require('./settings.json');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');

gulp.task('build', function() {
    var isProduction = gutil.env.production;
    return gulp.src('src/**/*.js')
        .pipe(isProduction ? gutil.noop(): sourcemaps.init())
        .pipe(concat(SETTINGS.filename))
        .pipe(concat.header('(function() {' + "\n"))
        .pipe(concat.footer([
            "\n",
            'if (isNode()) {',
            '    module.exports = FunnyLogConstructor;',
            '} else {',
            '    window.FunnyLog = FunnyLogConstructor;',
            '}',
            '})();'
        ].join("\n")))
        .pipe(replace(/var .* = require\(.*\);/g, ''))
        .pipe(replace(/module.exports = (?!FunnyLogConstructor).*;/g, ''))
        .pipe(isProduction ? gutil.noop(): sourcemaps.write())
        .pipe(isProduction ? uglify() : gutil.noop())
        .pipe(gulp.dest(SETTINGS.buildFolder));
});

gulp.task('serve', function() {
    return gulp.watch([
        './src/**/*.js'
    ], function() {
        gulp.run('build');
    }).on('error', gutil.log);
});
