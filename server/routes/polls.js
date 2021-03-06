var express = require('express');
var router = express.Router();
var PollService = require("../services/poll-service");
var restrict = require("../auth/restrict");

router.get('/', function(req, res, next) {
    var vmserver = {
        username: req.user ? req.user.firstName : null
    };
    res.render('polls/index', vmserver);
});

router.get('/api/get-ideas', restrict, function(req, res, next) {
    PollService.getIdeas(function(err, ideas) {
        if (err) {
            console.log("Couldn't get any ideas at all.");
            return res.status(500).json({
                error: "Couldn't get any ideas at all."
            });
        }
        res.json(ideas);
    });
});

router.get('/api/get-polls', restrict, function(req, res, next) {
    PollService.getPolls(req.user._id, function(err, polls) {
        if (err) {
            return res.status(500).json({
                error: "Couldn't get polls."
            });
        }
        res.json(polls);
    });
});

router.get('/api/retrieve-poll', function(req, res, next) {
    PollService.retrievePoll(req.query.pollId, function(err, poll) {
        if (err) {
            return res.status(500).json({
                error: "Couldn't get poll."
            });
        }
        res.json(poll);
    });
});

router.post('/api/create-poll', restrict, function(req, res, next) {
    PollService.addPoll(req.body, req.user._doc, function(err, pollId) {
        if (err) {
            return res.status(500).json({
                error: "Couldn't create poll"
            });
        }
        req.session.poll_id = pollId;
        res.json(pollId);
    });
});

router.post('/api/update-votes', function(req, res, next) {
    PollService.updateVotes(req.body, function(err) {
        if (err) {
            return res.status(500).json({
                error: "Couldn't update votes"
            });
        }
    });
});

router.post('/api/delete-poll', restrict, function(req, res, next) {
    PollService.deletePoll(req.body.pollId, function(err) {
        if (err) {
            return res.status(500).json({
                error: "Couldn't delete poll"
            });
        }
    });
});

module.exports = router;
