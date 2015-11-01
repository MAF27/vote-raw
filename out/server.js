'use strict';

var express = require('express'),
    routes = require('./app/routes/index.js'),
    mongoose = require('mongoose'), 
    passport = require("passport"),
    session = require("express-session");

var app = express();
require("dotenv").load();
require("./app/config/passport")(passport);

mongoose.connect(process.env.MONGO_URI, function (err, db) {

    if (err) {
        throw new Error('Database failed to connect!');
    } else {
        console.log('MongoDB successfully connected on port 27017.');
    }

    app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
    app.use('/public', express.static(process.cwd() + '/public'));
    app.use(session({
        secret: 'secretClementine',
        resave: false,
        saveUninitialized: true
    }));
    
    app.use(passport.initialize());
    app.use(passport.session());
    
    routes(app, passport);

	// DO NOT REPLACE, CLOUD9 SPECIFIC
	var port = process.env.PORT || 8080;
	app.listen(port,  function () {
		console.log('Node.js listening on port ' + port + '...');
	});
});