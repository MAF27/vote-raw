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

exports.getPolls = function(userId, next) {
  console.log('Getting polls for ', userId);
  Poll.find({
    'user._id': userId
  }, function(err, polls) {
    console.log(polls);
    next(err, polls);
  });
};

exports.retrievePoll = function(pollId, next) {
  Poll.findOne({
    _id: pollId
  }, function(err, poll) {
    next(err, poll);
  });
};

exports.updateVotes = function(data, next) {
  Poll.update({
    _id: data.pollId, "poll.options.index": data.index
  },{
    "poll.options.$.votes": data.votes
  }, null, function(err, numAffected){
    if (err) {
      next(err);
    }
    next(null); // No error
  });
};
