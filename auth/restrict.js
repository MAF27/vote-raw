module.exports = function(req, res, next) {
    if (req.isAuthenticated()) {
        console.log('User authenticated, ' + req.body.username);
        return next();
    }
    res.redirect('/users/login');
};