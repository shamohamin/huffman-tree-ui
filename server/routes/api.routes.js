const Router = require('express').Router() ;
const controller = require('../controller/api') ;

Router.post('/name' , controller.get_return_values) ;

module.exports = Router ;