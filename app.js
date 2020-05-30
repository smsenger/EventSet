const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const db = require('./models');
const session = require('express-session');

// establish routes below
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const contactsRouter = require('./routes/contact');


const app = express();
const PORT = process.env.PORT || 8000;
const bcrypt = require('bcrypt');
const fs = require('fs');
const hash = process.argv[2];
const password = process.argv[3];

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.set('views', 'views');

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('/public'));
app.unsubscribe(bodyParser.json());
app.use(bodyParser.urlencoded ({extended: false}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session( {
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
      // secure: true,
      maxAge: 86400000,
  },
}));

// link routes to app
app.use('/users', usersRouter);
app.use(checkAuthentication); 
app.use(indexRouter);
// app.use('/route') use this to run checkAuthentication for every route
//below above checkAuthentication function call
app.use('/contact', contactsRouter);


function checkAuthentication(req, res, next) {
  if (req.session.user) {
      next();
  } else {
      res.redirect('/users');
      //format here = res.render('/pagefilename.ejs')
  };
};

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

app.listen(PORT, () => console.log(`Listening: http://localhost:${PORT}`));

module.exports = app;
