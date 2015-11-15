var express = require('express');
var router = express.Router();
var restrict = require("../auth/restrict");

router.get('/', function(req, res, next) {
    var vm = { username: req.user ? req.user.firstName : null, error: req.flash('error') };
  res.render('index', vm);
});

module.exports = router;
