/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {

    _config: {
        actions: false,
        shortcuts: false,
        rest: false
    },

    login: function(req, res) {

        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                // return res.send({
                //     message: info.message,
                //     user: user
                // });
                return res.view('/login');
            }
            req.logIn(user, function(err) {
                if (err) res.send(err);
                //req.session.userId = user.id;
                // return res.ok({
                //     message: info.message,
                //     user: user
                // }, '/pathtoview');
                res.redirect('/readyplayer1');
            });

        })(req, res);
    },

    logout: function(req, res) {
        req.logout();
        res.redirect('/');
    }
};