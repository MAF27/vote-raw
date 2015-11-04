'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PollSchema = new Schema({
  poll: {
    title: String,
    options: [{
      description: String,
      votes: Number
    }],
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  user: {
    _id: Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    username: String,
  },
});

var Poll = mongoose.model('Poll', PollSchema);

module.exports = {
  Poll: Poll
};