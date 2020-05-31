var express = require('express');
var router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');
const session = require('express-session');
const methodOverride = require('method-override');


router.use(methodOverride('_method'));



router.get('/', (req, res) => {
    db.Event_Final.findAll().then((results) => {
        res.render('event', {
            title: 'Events',
            results: results,
        });
    })
});

router.post('/create', (req, res) => {
    const { type, date, time } = req.body;
    db.Event_Final.create({
        type,
        date,
        time,
    }).then((result) => {
        console.log(result);
        res.redirect('/event');
    });
});

router.put('/update', (req, res) => {
    const { type, date, time } = req.body;
    db.Event_Final.update({
        type, 
        date,
        time,
    }).then((result) => {
        res.redirect('/event');
    });
});




module.exports = router;