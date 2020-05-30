var express = require('express');
var router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');
const session = require('express-session');
const methodOverride = require('method-override');


router.use(methodOverride('_method'));



router.get('/', (req, res) => {
    db.Contact.findAll().then((results) => {
        res.render('contact', {
            title: 'Contacts',
            results: results,
        });
    })
});

router.post('/create', (req, res) => {
    const { type, date } = req.body;
    db.Contact.create({
        type,
        date,
    }).then((result) => {
        res.redirect('/event');
    });
});

router.put('/update', (req, res) => {
    const { type, date } = req.body;
    db.Contact.update({
        type, 
        date,
    }).then((result) => {
        res.redirect('/event');
    });
});




module.exports = router;