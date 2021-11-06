const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require("express-session");
const logger = require('morgan');
const cors = require('cors')



const methodOverride = require('method-override');
const app = express();

const userLoggedMiddleware = require("./src/middlewares/userLoggedMiddleware");


// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "StoreCamisetas",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.static(path.join(__dirname, 'src/public')));
app.use(methodOverride('_method'));
app.use(userLoggedMiddleware);
app.use(cors());



//requiere routes
const mainRouter = require('./src/routes/main');
const usersRouter = require('./src/routes/users');
const productsRouter = require('./src/routes/products')
const shopCartRouter = require('./src/routes/shopCart')

// routes setup
app.use('/', mainRouter);
app.use('/products', productsRouter)
app.use('/shopCart', shopCartRouter)
app.use('/users', usersRouter);

//requiere API routes
const api_usersRouter = require('./src/routes/api/api_users');
const api_productsRouter = require('./src/routes/api/api_products');

// API routes setup
app.use('/api/users', api_usersRouter);
app.use('/api/products', api_productsRouter);


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
  //res.send('error');
});

module.exports = app;
