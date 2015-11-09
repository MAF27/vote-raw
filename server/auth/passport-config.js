module.exports = function() {
    var passport = require("passport");
    var passportLocal = require('passport-local');
    var bcrypt = require("bcrypt");

    var userService = require("../services/user-service");

    passport.use(new passportLocal.Strategy(function(username, password, next) {
        userService.findUser(username, function(err, user) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return next(null, null);
            }
            bcrypt.compare(password, user.password, function(err, same) {
                if (err) {
                    return next(err);
                }
                if (!same) {
                    return next(null, null);
                }
                next(null, user);
            });
        });
    }));

    passport.serializeUser(function(user, next) {
        next(null, user.username);
    });

    passport.deserializeUser(function(username, next) {
        userService.findUser(username, function(err, user) {
            next(err, user);
        });
    });
};