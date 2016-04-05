var gulp = require('gulp');
var eslint = require('gulp-eslint');

module.exports = function() {
    gulp.task('lint', function() {
        return gulp.src([
            'app/**/*.jsx',
            'app/**/*.js'
        ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
    });
};
