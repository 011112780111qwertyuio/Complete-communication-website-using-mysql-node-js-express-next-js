var createError = require('http-errors');
var express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
var path = require('path');

var logger = require('morgan');
/* import routers */ 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var regsterRouter = require('./routes/regster');
var singRouter = require ('./routes/sign');
var mypostsRotuer = require('./routes/roter_posts');
var messageRouter = require('./routes/mwssage_route');
const db = require('./connection');


/*-----------*/
var app = express();


app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Credentials",true)
  next();
})

app.use(cors({
  origin:"http://localhost:3000",

}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
/* routers */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/',regsterRouter);
app.use('/',singRouter);
app.use('/',mypostsRotuer);
app.use('/',messageRouter);
/* --------------- */

/* uplode server */



/* ------------ */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});







app.listen(4000,()=>{
  console.log("conected server");
}) 

module.exports = app;
 