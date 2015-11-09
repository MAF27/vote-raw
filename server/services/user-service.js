var User = require("../models/user").User;
var bcrypt = require("bcrypt");

exports.addUser = function(user, next) {
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      return next(err);
    }

    var newUser = new User({
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      password: hash
    });

    newUser.save(function(err) {
      if (err) {
        return next(err);
      }
      next(null);
    });
  });
};

exports.findUser = function(username, next) {
  User.findOne({
    username: username
  }, function(err, user) {
    next(err, user);
  });
};