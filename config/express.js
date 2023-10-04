/*
Assignment1 express.js
Author: Radmir Taskynbayev	
ID: 301239725 
Date: 04/10/2023
 */

var config = require('config'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');
    const session = require('express-session');

module.exports = function () {
    var app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));

    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    

    const sessionSecret='developmentSessionSecret';
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: sessionSecret
    }));        
    
    app.set('views', './radmir-portfolio/views'),
    app.set('view engine', 'ejs');    

    app.use('/', require('../radmir-portfolio/routes/index.server.routes.js'));

    //require('../app/routes/index.server.routes.js')(app);
  app.use(express.static("./radmir-portfolio/public"))
    return app;
    }
	
