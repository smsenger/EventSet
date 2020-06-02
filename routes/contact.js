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
    db.User.findByPk(req.session.user.id)
        .then((User) => {
            User.createContact({
                name,
                email,
                phone,
                address,
            })
        }).then((result) => {
            res.redirect('/contact');
        });
});

router.put('/update/:id', (req, res) => {    //this will update everything except name. unable to access contact_id/id
    db.Contact.update({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,

    }, { where: { id: req.params.id } },
    ).then((result) => {
        console.log(result)
        res.redirect('/contact');
    });
});

router.delete('/delete/:id', (req, res) => {
    db.Contact.destroy({ where : { id: req.params.id}})
    .then((results) => {
            res.redirect('/contact');
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