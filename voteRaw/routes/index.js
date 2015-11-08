var express = require('express');
var router = express.Router();
var restrict = require("../auth/restrict");

router.get('/', restrict, function(req, res, next) {
    var vm = { username: req.user ? req.user.firstName : null, error: req.flash('error') };
  res.render('index', vm);
});

router.get('/test', function(req, res, next) {
  res.render('test');
});

module.exports = router;
