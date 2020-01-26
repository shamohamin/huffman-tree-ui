const express = require('express') ;
const cors = require('cors') ;
const bodyParser = require('body-parser');
const Router = express.Router() ;
const PORT = '3600' ;

const app = express() ;
app.use(cors()) ;
app.use(bodyParser.urlencoded({extended : false})) ;
app.use(bodyParser.json()) ;
const api = require('./server/routes/api.routes') ;

app.use('/' , Router) ;
Router.use('/api' , api) ;

app.listen(PORT ,() => {
    console.log("connection is okay!!!!! and established!!!!!") ;
});