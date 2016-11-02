var express = require('express');
// eslint-disable-next-line new-cap
var router = express.Router();
module.exports = router;

var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

var error = require('./error.js');
var dbFilename = './ws/db.json';


var db = {};

var writeDb = function() {
	console.log('about to write', db);
	fs.writeFileAsync(dbFilename, JSON.stringify(db)).then(function(err) {
		if (err) {
			throw err;
		}
		console.log('It\'s saved!');
	});
};

fs.readFileAsync(dbFilename)
	.then(function(data) {
		db = JSON.parse(data);
	})
	.catch(function(err) {
		if (err) {
			writeDb();
			return;
		}
	});

router.post('/signup', function(req, res) {
	console.log('req.body', req.body);
	if (db[req.body.email]) {
		res.json({status: 'ko', error: error.accountAlreadyExists});
		return;
	}
	db[req.body.email] = req.body;
	writeDb();
	res.json({status: 'ok'});
});

router.get('/s1', function(req, res) {
	setTimeout(function() {
		res.json({result: 's1', titi: 'toto'});
	}, 200);
});

router.get('/s2', function(req, res) {
	setTimeout(function() {
		res.json({result: 's2'});
	}, 2000);
});

router.get('/s3', function(req, res) {
	setTimeout(function() {
		res.json({result: 's3'});
	}, 4000);
});

router.get('/s4', function(req, res) {
	setTimeout(function() {
		res.json({result: 's4'});
	}, 1000);
});

router.get('/s5', function(req, res) {
	setTimeout(function() {
		res.json({result: 's5'});
	}, 3000);
});


