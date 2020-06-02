var express = require('express');
var router = express.Router();
const db = require('../models');
const session = require('express-session');
const methodOverride = require('method-override');

router.use(methodOverride('_method'));

/* GET home page. */
// router.get('/', (req, res) => {
//   res.render('index', {
//     title: 'EventSet',
//     user: req.session.user,
//   });
// });

router.get('/', (req, res) => {
  console.log(req.session);
  console.log(req.body)
  db.User.findOne().then((results) => {
      res.render('index', {
          title: 'EventSet',
          results: results,
          user: req.session.user,
          username: req.body.username,
          email: req.body.email,

      });
  })
});

router.put('/update/:id', (req,res) => {    //this will update everything except name. unable to access contact_id/id
  req.session.user.username = req.body.username;
  req.session.user.email = req.body.email;
  db.User.update({
      username: req.body.username,
      email: req.body.email,
  }, { where: {id: req.params.id}}, 
  ).then((result) => {
      res.redirect('/');
  });
});


router.delete('/delete/:id', (req, res) => {
  db.User.destroy({ where : { id: req.params.id}})
  .then((results) => {
          res.redirect('/users');
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
