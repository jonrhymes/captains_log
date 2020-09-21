/* Set up Express / DEPENDENCIES */

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = mongoose.connection;
const show = console.log
const methodOverride = require('method-override')
const logController = require('./controllers/logs.js')

// User controller dependencies
require('dotenv').config()
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGODBURI;
const DBURI = process.env.MONGODBURI;
const userController = require('./controllers/users_controller.js')
const session = require('express-session')
const User = require('./models/users.js')
const bcrypt = require('bcrypt')

/* Set up Middleware */
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

/* Controllers */
app.use('/logs', logController);
app.use('/users', userController);

// Connect to Mongo
mongoose.connect(DBURI, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: true}, () => show('Mongo running at ', DBURI));

// Error/Success
db.on('error', (error) => show(error.message + ' Is Mongo NOT running?'));
db.on('connected', () => show('mongo CONNECTED. Congrats, Captain!', DBURI));
db.on('disconnected', () => show('mongo DISCONNECTED.'));
db.on('open', () => show('Connection made.'))

// Authorization route
const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}

// Authorization route
app.get('/sessions/new', (req, res) => {
    res.render('sessions/new', 
    {currentUser: req.session.currentUser}) 
})

// Authentication Route, login
app.post('/sessions/', (req, res) => {
    // see if user exists
    User.findOne({username: req.body.username}, (err, foundUser) => {
        if(err) {
            // send error if error
            console.log(err)
            res.send('oops the db had a problem!' + err)
        } else if(!foundUser) {
            // send to sign up if user doesn't exist
            res.redirect('/users/new')
        } else {
            // compare passwords
            if(bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser.username
                res.redirect('/logs/')
            } else {
                // tell them it's a wrong password
                res.send('UNAUTHORIZED')
            }
        }
    })
})

app.delete('/sessions', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/sessions/new');
    })
})

/* Listening Route */
app.listen(PORT, (req, res) => {
    console.log(`To boldly go where no one has gone before...`)
})
