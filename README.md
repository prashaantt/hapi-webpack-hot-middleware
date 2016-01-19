# hapi-webpack-hot-middleware

hapi plugin to use webpack-hot-middleware.

[![Dependency Status](https://david-dm.org/prashaantt/hapi-webpack-hot-middleware.svg)](https://david-dm.org/prashaantt/hapi-webpack-hot-middleware)
[![devDependency Status](https://david-dm.org/prashaantt/hapi-webpack-hot-middleware/dev-status.svg?theme=shields.io)](https://david-dm.org/prashaantt/hapi-webpack-hot-middleware#info=devDependencies)


## Installation

```bash
$ npm install hapi-webpack-hot-middleware --save-dev
```


## Usage

Require this plugin along with [hapi-webpack-dev-middleware](https://github.com/prashaantt/hapi-webpack-dev-middleware) and register them normally:

```js
const HapiWebpackDevMiddleware = require('hapi-webpack-dev-middleware');
const HapiWebpackHotMiddleware = require('hapi-webpack-hot-middleware');


server.register(
    {
        register: HapiWebpackDevMiddleware,
        options: {...}
    },
    {
        register: HapiWebpackHotMiddleware
    }
);
```

See the documentation for [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) for configuration options. 

## License

MIT
