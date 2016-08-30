var checkservice = require('./index.js');

checkservice('example.com', 80, function (err, res) {
    if (err) {
        console.log('Error! No service could be reached on example.com tcp port 80', err)
    } else if (res) {
        console.log('Success! A service is listening on example.com tcp port 80');
    }
});

checkservice('8.8.8.8', 80, function (err, res) {
    if (err) {
        console.log('Error! No service could be reached on 8.8.8.8 tcp port 80', err)
    } else if (res) {
        console.log('Success! A service is listening on 8.8.8.8 tcp port 80');
    }
});