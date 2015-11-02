module.exports = function(req, res, next) {
    console.log('Authenticated: ' + req.isAuthenticated());
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/users/login');
};