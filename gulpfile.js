var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var del = require('del');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
webpackConfig.setupProd();
var eslint = require('gulp-eslint');
var through = require('through2');
var open = require('open');

gulp.task('default', ['rebuild']);

var path = {
	base: 'app',
	dist: 'dist',
	html: ['app/[0-9][0-9]_*/index.html'],
	webpack: ['app/[0-9][0-9]_*/app.js'],
	resources: ['app/resources/**/*', 'app/bower_components/**/*', 'app/01_*/**/*', 'app/wpk/**/*']
};


// Delete the dist directory
gulp.task('clean', function() {
	return del(path.dist);
});

gulp.task('resources', function() {
	return gulp.src(path.resources, {base: path.base})
		.pipe(gulp.dest(path.dist));
});

function log(message) {
	return through.obj(function(file, encoding, callback) {
		console.log(message, file.path);
		callback(null, file);
	});
};

gulp.task('html', function() {
	return gulp.src(path.html)
		.pipe(log('processing html'))
		.pipe($.htmlReplace({
			js: ['app.min.js'],
			css: ['style.min.css']
		}))
		.pipe(gulp.dest(path.dist));
});

gulp.task('webpack', function(callback) {
    webpack(webpackConfig, function(err, stats) {
        if (err) {
			throw new gutil.PluginError('webpack', err);
		}
        // $.util.log('[webpack]', stats.toString({
            // output options
        // }));
        callback();
    });
});

// not useful at this time.
gulp.task('deploy', function() {
	return gulp.src('./dist/**/*')
		.pipe($.ghPages({cacheDir: '../.publish_example_gul'}));
});

gulp.task('build', function() {
	console.log('gulp build');
	runSequence('webpack', ['resources', 'html']);
});

gulp.task('rebuild', function() {
	runSequence('clean', 'build');
});

// deprecated on this project. (no short test/dev loop)
// because a watch will take time to rebuild
gulp.task('watch', function() {
	var watcher = gulp.watch('app/**/*', ['build']);
	watcher.on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});

gulp.task('start', function() {
	open('http://jlguenego.github.io/example_gul/');
});

// lint with es6 syntax ;)
gulp.task('lint', function() {
	return gulp.src(['**/*.js'])
	.pipe(eslint())
	.pipe(eslint.formatEach())
	.pipe(eslint.failAfterError());
});

