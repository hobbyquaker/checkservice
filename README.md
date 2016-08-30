# checkservice

[![License][mit-badge]][mit-url]
[![NPM version](https://badge.fury.io/js/checkservice.svg)](http://badge.fury.io/js/checkservice)
[![Dependency Status](https://img.shields.io/gemnasium/hobbyquaker/checkservice.svg?maxAge=2592000)](https://gemnasium.com/github.com/hobbyquaker/checkservice)

> Check if a service is listening on a tcp port

## Usage

```npm install checkservice```

```Javascript
var checkservice = require('checkservice');

checkservice('example.com', 80, function (err, res) {
    if (err) {
        console.log('Error! No service could be reached on example.com tcp port 80', err)
    } else if (res) {
        console.log('Success! A service is listening on example.com tcp port 80');
    }
});
```

# License

MIT (c) 2016 [Sebastian Raff](https://github.com/hobbyquaker)

[mit-badge]: https://img.shields.io/badge/License-MIT-blue.svg?style=flat
[mit-url]: LICENSE

