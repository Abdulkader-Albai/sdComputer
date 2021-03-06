/**
 *  importing libraries
 **/
// const dotenv = require('dotenv').config()
const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');

//> nodeJS native libraries
const path = require('path')

//> local files
const router = require('./router')

/**
 * setting up variables
 **/

const app = express();
const PORT = process.env.PORT || 3000 ;

//> configuring handlebars
app.set('view engine','hbs')
app.engine('hbs', hbs({
    extname: 'hbs',
    partialsDir: __dirname + "/views/partials",
    layoutsDir: __dirname + "/views/layouts",
}))

/**
 * setting public folder to serve css files, favi icon, js client files
 *
 * use nginx to serve public files, it's faster then express
 **/
app.use(express.static(path.join(__dirname,'public')));

/**
 * setting router file
 **/
app.use(bodyParser.urlencoded({
    extended: false
}));

// app.use(bodyParser.json());



app.use('/',router);

/**
 * listening port on the browser on development
 **/
app.listen( PORT, ()=> console.log(`server is listening on ${PORT}`));