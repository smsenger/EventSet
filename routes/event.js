var express = require('express');
var router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');
const session = require('express-session');
const methodOverride = require('method-override');


router.use(methodOverride('_method'));



router.get('/', (req, res) => {
    db.User.findByPk(req.session.user.id, {
        include: [
            {
                model: db.Event,
                order: [
                    [
                        'date',
                        'ASC',
                    ]
                ],
                include: [
                    {
                        model: db.Contact,
                    }
                ]
            },
            {
                model: db.Contact,
                order: [
                    [
                        'name',
                        'ASC',
                    ]
                ],
            }
        ]
    }).then((user) => {
        console.log(user.Events)
        res.render('event', {
            title: 'Events',
            user: user,
            contacts: user.Contacts,
            results: user.Events,
        });
    });
})


router.post('/create', (req, res) => {
    const { type, date, time, contact } = req.body;
    const datetime = date + ' ' + time;
    db.Event.create({
        type,
        Contact_Id: contact || null,
        User_Id: req.session.user.id,
        date: datetime,
    }).then((result) => {
        console.log(result);
        res.redirect('/event');
    });
});

router.put('/update/:id', (req, res) => {
    const { type, date, time, contact } = req.body;
    const datetime = date + ' ' + time;
    db.Event.update({
        type,
        Contact_Id: contact || null,
        User_Id: req.session.user.id,
        date: datetime,
    }, {
        where: { id: req.params.id }
    }).then((result) => {
        res.redirect('/event');
    });
});

router.delete('/delete/:id', (req, res) => {
    db.Event.destroy({ where: { id: req.params.id } })
        .then((results) => {
            res.redirect('/event');
        })
        .then(rowsDeleted => {
            if (rowsDeleted === 1) {
                console.log('Deleted successfully');
            }
        })
        .catch(err => {
            console.log(err);
        });

});


module.exports = router;