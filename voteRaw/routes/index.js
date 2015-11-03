var express = require('express');
var router = express.Router();
var restrict = require("../auth/restrict");

/* GET home page. */
router.get('/', restrict, function(req, res, next) {
    var vm = { username: req.user ? req.user.firstName : null, error: req.flash('error') };
  res.render('index', vm);
});

router.get('/profile', restrict, function(req, res, next) {
    var vm = { input: req.user };
  res.render('profile', vm);
});

router.get('/polls', restrict, function(req, res, next) {
  res.render('./polls/polls');
});

module.exports = router;
