const Router = require('express').Router() ;
const controller = require('../controller/api') ;

Router.post('/name' , controller.get_return_values) ;
Router.get('/ls' , controller.get_available_files) ;

module.exports = Router ;