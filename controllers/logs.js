// Express
const express = require('express')
// Router
const logController = express.Router()
// Mongoose and Log Schema
const mongoose = require('mongoose')
const show = console.log

// Models
const Log = require('../models/logs.js')
const logSeed = require('../models/seed.js')

// Authentication
const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}

// Routes
/* Presentational Routes */

// Index
logController.get('/', isAuthenticated, (req, res) => {
    const thisRunsNext = (error, allLogs) => {
        if(error){
            show(error.message)
        } else {
            const props = {
                logs: allLogs
            }
            res.render('Index', props)}
    }
    Log.find({}, thisRunsNext)
})

// New
logController.get('/new', isAuthenticated, (req, res) => {
    res.render('New')
})

// Create
logController.post('/', isAuthenticated, (req, res) => {
    show('This is before data is changed')
    show(req.body)

    req.body.shipIsBroken === 'on'
    ? req.body.shipIsBroken = true
    : req.body.shipIsBroken = false;
    
    show('This is After we changed it');
    show(req.body);

    Log.create(req.body, {new: true}, (error, createdLog) => {
            res.redirect('/logs')
    })
})

// Show
logController.get('/:id', isAuthenticated, (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
        res.render('Show', {
            log: foundLog
        })
    })
})


// Seed
// logController.get('/seed', (req, res) => {
//     Log.create(logSeed, (error, data) => {
//     if (error) {
//     show(error.message)
//     } else {
//     show('Logs Seeded')}
//     })
// })

/* Functional Routes */

// Edit 
logController.get('/edit/:id', isAuthenticated, (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
        res.render('Edit', {log: foundLog})
    })
})

// Delete
logController.delete('/:id', isAuthenticated, (req, res) => {
    Log.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/logs')
    })
})

// Update
logController.put('/:id', isAuthenticated, (req, res) => {
    console.log(req.body)
    if (req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false; 
    }

    Log.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, data) => {
        if(error){
            show(error)
        } else {
            show(data)
            res.redirect('/logs')
        }
    })
})


// Export

module.exports = logController;

