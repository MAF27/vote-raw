var Poll = require("../models/poll").Poll;

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