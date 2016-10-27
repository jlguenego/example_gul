var express = require('express');
// serve-index est un middleware pour afficher joliment les repertoires.
var serveIndex = require('serve-index');

// middleware traitant tout nos web services
var webservice = require('./ws/index.js');

var app = express();

app.use('/ws', webservice);

app.use(express.static('./app'));
app.use(serveIndex('./app', {icons: true}));


// url rewriting
app.all(['/01_login/signin*', '/01_login/signup*', '/01_login/services*',
	'/01_login/signout*', '/01_login/contact*'], function(req, res) {
	res.sendFile('./app/01_login/index.html', {root: __dirname});
});


app.use(function(req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

app.listen(8000, function() {
	console.log('server started on port 8000');
});
