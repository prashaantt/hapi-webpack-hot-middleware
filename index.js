'use strict';

const WebpackHotMiddleware = require('webpack-hot-middleware');


exports.register = (server, options, next) => {

    const hotMiddlewareOptions = options.options;
    const compiler = server.app.webpackCompiler;
    const middleware = WebpackHotMiddleware(compiler, hotMiddlewareOptions);

    server.ext('onRequest', (request, reply) => {

        const req = request.raw.req;
        const res = request.raw.res;

        middleware(req, res, (err) => {

            if (err) {
                return reply(err);
            }

            return reply.continue();
        });
    });

    next();
};


exports.register.attributes = {
    pkg: require('./package.json'),
    dependencies: ['hapi-webpack-dev-middleware']
};
