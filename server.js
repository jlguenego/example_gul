// run with --prod if you want to test the prod stuff (you don't have the short dev loop)
var prod = (process.argv[2] === '--prod');
var htdocs = './app';
var port = 8000;
if (prod) {
	htdocs = './dist';
	port = 9000;
}

var express = require('express');
// serve-index est un middleware pour afficher joliment les repertoires.
var serveIndex = require('serve-index');


// middleware traitant tout nos web services
var webservice = require('./ws/index.js');

var app = express();

// for the short loop dev paradigm: express watches the files and build the bundles when needed.
if (!prod) {
	var webpack = require('webpack');
	var webpackConfig = require('./webpack.config.js');
	webpackConfig.output.path = '/';
	var compiler = webpack(webpackConfig);
	var webpackDevMiddleware = require('webpack-dev-middleware');
	app.use('/wpk/', webpackDevMiddleware(compiler, {
		// options
	}));
}

app.use('/ws', webservice);

app.use(express.static(htdocs));
app.use(serveIndex(htdocs, {icons: true}));

// url rewriting
var fs = require('fs');
var directories = fs.readdirSync(htdocs).filter(function(dir) {
	return dir.match(/^\d\d_/) !== null;
});
console.log('directories', directories);
var pages = ['signin', 'signup', 'signout', 'services', 'contact'];

directories.forEach(function(dir) {
	app.all(pages.map(function(page) {
		return '/' + dir + '/' + page + '*';
	}), function(req, res) {
		res.sendFile('./app/' + dir + '/index.html', {root: __dirname});
	});
});


app.use(function(req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

app.listen(port, function() {
	console.log('server started on port ' + port);
});
