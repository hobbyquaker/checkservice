var net = require('net');

module.exports = function (host, port, callback) {

    var client = net.connect({host: host, port: port});

    client.on('error', function (e) {
        callback(e);
    });

    client.on('connect', function () {
        client.end();
        callback(null, true);
    });

};
