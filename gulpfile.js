var gulp = require('gulp');
var angularProtractor = require('gulp-angular-protractor');

gulp.task('default', ['test:e2e']);
gulp.task('test:e2e', function () {
    return gulp.src(['tests/*.js'])
                .pipe(angularProtractor({
                    'configFile': 'conf.js',
                    'args': ['--baseUrl', 'http://127.0.0.1:8000'],
                    'autoStartStopServer': true
                }))
                .on('error', function(e) { throw e })
});
