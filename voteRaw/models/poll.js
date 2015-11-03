'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({
  name: String,
  options: [{ optionName: String, votes: Number }]
});

module.exports = mongoose.model('Poll', PollSchema);