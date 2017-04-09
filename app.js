// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./server/config'); // get our config file
var cors = require('cors');
var http = require('http');

// load models
var models = require('./server/models');

app.set('superSecret', config.secret); // secret variable
var port = process.env.PORT || 8090; // set our port

var ignoreJWTRoutes = ['authenticate','albums'];

var whitelist = ['http://localhost:3000']
var corsOptions = {
    origin: function(origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// parse application/vnd.api+json as json
//app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.use(function(req, res, next) {

    var parts = req.path.split('/');
    currentPath = parts[parts.length - 1];

    if (ignoreJWTRoutes.indexOf(currentPath) === -1 && req.method.toLowerCase() != 'options') {
        // check header or url parameters or post parameters for token
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            token = req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            token = req.query.token;
        } else {
            token = req.body.token || req.query.token || req.headers['x-access-token'];
        }
        // decode token
        if (token && typeof token != undefined) {
            // verifies secret and checks exp
            jwt.verify(token, app.get('superSecret'), function(err, decoded) {
                if (err) {
                    return res.status(401).send({
                        'success': false,
                        'error-message': 'Unclassified Authentication Failure',
                        'error-auxiliary': 'Access token is invalid. Please try with new Access token'
                    });
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            // if there is no token
            // return an error
            return res.status(403).send({
                'success': false,
                'error-message': 'Unclassified Authentication Failure',
                'error-auxiliary': 'Missing authorization token. Please try with valid Access token.'
            });
        }
    } else {
        // Pass to next layer of middleware
        next();
    }
});
var router = express.Router(); // get an instance of the express Router
// all of our routes will be prefixed with /api
app.use('/api', router);
require('./server/routes/index')(app, router, jwt);

// START THE SERVER
// =============================================================================
var server = http.createServer(app);
models.sequelize.sync().then(function() {
    /**
     * Listen on provided port, on all network interfaces.
     */
    server.listen(port, function() {
        console.log('Express server listening on port ' + server.address().port);
    });
    server.on('error', onError);
    server.on('listening', onListening);
});
/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    console.log('Listening on ' + bind);
}