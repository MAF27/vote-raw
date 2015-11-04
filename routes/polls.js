var express = require('express');
var router = express.Router();
var PollService = require("../services/poll-service");
var restrict = require("../auth/restrict");

router.get('/', restrict, function(req, res, next) {
  res.render('polls/index');
});

router.post('/api/create-poll', restrict, function(req, res, next) {
    console.log('poll post: ', req.body, req.user._doc);
    PollService.addPoll(req.body, req.user._doc, function(err, pollId) {
        if (err) {
            return res.status(500).json({error: "Couldn't create poll"});
        }
        req.session.poll_id = pollId;
        res.json({success: true});
    });
});


module.exports = router;
