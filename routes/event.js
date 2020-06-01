var express = require('express');
var router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');
const session = require('express-session');
const methodOverride = require('method-override');


router.use(methodOverride('_method'));



router.get('/', (req, res) => {
    db.Event.findAll({order: [['date', 'ASC']]}).then((results) => {
        res.render('event', {
            title: 'Events',
            results: results,
        });
    })
});

router.post('/create', (req, res) => {
    const { type, date, time } = req.body;
    const datetime = date + ' ' + time;
    db.Event.create({
        type,
        date: datetime,
    }).then((result) => {
        console.log(result);
        res.redirect('/event');
    });
});

router.put('/update/:id', (req, res) => {
    const { type, date, time } = req.body;
    const datetime = date + ' ' + time;
    db.Event.update({
        type, 
        date: datetime,
    }, {
        where: {id: req.params.id}
    }).then((result) => {
        res.redirect('/event');
    });
});




module.exports = router;