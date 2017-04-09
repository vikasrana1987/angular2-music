var models = require('./../models');
var passwordHash = require('password-hash');

exports.authenticate = function(app, jwt) {
    return function(req, res) {
        models.User.findOne({ where: { email: req.body.username } }).then(function(user) {
            if (!user) {
                res.status(401).json({
                    success: false,
                    message: 'Authentication failed. Wrong password.'
                });
            } else if (user) {
                // check if password matches
                if (passwordHash.verify(req.body.password, user.password)) {
                    var userObj = {
                        id: user.id,
                        username: user.username,
                        password: user.password
                    };
                    // if user is found and password is right
                    // create a token
                    var token = jwt.sign(userObj, app.get('superSecret'), {
                        expiresIn: 1440
                    });

                    // return the information including token as JSON
                    res.json({
                        success: true,
                        message: 'You are logged in successfully.',
                        token: token
                    });
                } else {
                    res.status(401).json({
                        success: false,
                        message: 'Authentication failed. Wrong password.'
                    });
                }

            }
        });
    }
}

// find all users
exports.getUsers = function(req, res, next) {
    models.User.findAll({
        attributes: ['id', 'firstName', 'lastName', 'email']
    }).then(function(users) {
        return res.status(200).send(JSON.stringify(users));
    });
}

// find user by id
exports.getUserById = function(req, res, next) {
    var userId = req.params.id;
    models.User.findById(userId, {
        attributes: ['id', 'firstName', 'lastName', 'email']
    }).then(function(user) {
        if (!user) {
            res.status(404).json({
                success: false,
                message: 'User not found.'
            });
        } else {
            return res.status(200).send(JSON.stringify(user));
        }
    });
}