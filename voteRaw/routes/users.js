var express = require('express');
var router = express.Router();
var UserService = require("../services/user-service");
var passport = require("passport");

router.get('/register', function(req, res, next) {
    var vm = {
        title: 'Register as a new user'
    };
    res.render('register', vm);
})

router.post('/register', function(req, res, next) {
    UserService.addUser(req.body, function(err) {
        if (err) {
            var vm = {
                title: 'Register as a new user',
                input: req.body,
                error: err
            };
            console.log(err);
            delete vm.input.password;
            return res.render('register', vm);
        }
        req.login(req.body, function(err){
            res.redirect('/');
        })
    });
});

router.get('/login', function(req, res, next) {
    var vm = {
        title: 'Please log in'
    };
    res.render('login', vm);
});

router.post('/login', passport.authenticate('local', { 
    failureRedirect: '/login',
    successRedirect: '/',
    failureFlash: 'Invalid credentials.'
}));

router.get('/logout', function(req, res, next) {
   req.logout();
   res.redirect('/users/login');
});

module.exports = router;
