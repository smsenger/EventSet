// contact page opens 
// router to display contacts
// card w/option for update/delete
// router.put and router.del
// if no contacts, will display card w/caption 'no contacts'
// click add button: display form that creates
// router for registration

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

router.post('/register', (req, res) => {
    const { name, email, phone, address } = req.body;
    db.Contact.create({
        name,
        email,
        phone,
        address,
    }).then((result) => {
        res.redirect('/contact');
    });
});

router.put('/update', (req, res) => {
    const { name, email, phone, address } = req.body;
    db.Contact.update({
        name,
        email,
        phone,
        address,
    }).then((result) => {
        res.redirect('/contact');
    });
});




module.exports = router;