var Poll = require("../models/poll").Poll;
var Idea = require("../models/idea").Idea;

exports.getIdeas = function(next) {

  Idea.count().exec(function(err, count) {
    if (err) {
      return next(err, null);
    }

    var random = Math.floor(Math.random() * count);

    Idea.findOne().skip(random).exec(
      function(err, idea) {
        if (err) {
          return next(err, null);
        }
        next(err, idea);
      });
  });
};

exports.addPoll = function(poll, user, next) {
  console.log('addPoll: ', poll, user);
  var newPoll = new Poll({
    user: user,
    poll: poll
  });

  newPoll.save(function(err, savedPoll) {
    if (!err) {
      return next(null, savedPoll._id);
    }
    next(err);
  });
};

exports.findPolls = function(userId, next) {
  Poll.find({
    userId: userId
  }, function(err, polls) {
    next(err, polls);
  });
};