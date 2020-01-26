const Router = require('express').Router() ;
const controller = require('../controller/api') ;

Router.post('/name' , controller) ;

module.exports = Router ;