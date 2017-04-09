var models = require('./../models');
var passwordHash = require('password-hash');

// find all albums
exports.getAlbums = function(req, res, next) {
    models.Album.findAll({
        attributes: ['id', 'name', 'description']
    }).then(function(albums) {
        return res.status(200).send(JSON.stringify(albums));
    });
}