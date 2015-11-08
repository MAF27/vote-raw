'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var IdeaSchema = new Schema(
  {
    title: String,
    options: [{
      description: String,
      votes: Number
    }]
  }
);

var Idea = mongoose.model('Idea', IdeaSchema);

module.exports = {
  Idea: Idea
};