var express = require('express');
var router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');
const session = require('express-session');

function checkAuthentication(req, res, next) {
  if (req.session.user) {
      next();
  } else {
      res.redirect('/user/login')
  }
}

router.get('/', (req, res) => {
    res.render('users', {
      title: 'Users | Home',
    });
})

// router.get('/', (req, res) => {
//     db.User.findAll().then((results) => {
//         res.render('user', {
//             title: 'Users',
//             results: results,
//         });
//     })
// });

router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
      db.User.create({
          username,
          email,
          password: hash
      }).then((result) => {
          res.redirect('/users');
      });
  });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.User.findOne({ where: { username: username} })
  .then(User => {
      bcrypt.compare(password, User.password, (err, match) => {
          if(match) {
              req.session.user = User;
              res.redirect('/');
          }
          else {
              res.send('Incorrect password!')
          }
      })
  })
  .catch(() => {
      res.send('Username not found. Please return to previous page and try again.')
  });
});

// router.put('/user/:id', (req,res) => {    //this will update everything except name. unable to access contact_id/id
//     db.User.update({
//         name: req.body.name,
//         email: req.body.email,
//     }, { where: {id: req.params.id}}, 
//     ).then((result) => {
//         console.log(result)
//         res.redirect('/');
//     });
// });

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/users');
})


module.exports = router;
