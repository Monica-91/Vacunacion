const express = require('express')
// const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');

const app = express();
require('./database');
require('./passport/local-auth');

// Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(session({
  secret: 'mysecretsession',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.user = req.user;
    console.log(app.locals)
    next();
  });

// Routes

app.get('/', (req, res) => {
    
});


app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});