const http = require('http');
const url = require('url');

const ResponseHandler = require('./infrastructure/http/response-handler');
const ApplicationRouter = require('./application/application.router')

const server = http.createServer(async (req, res) => {
    try {
        const { pathname, query } = url.parse(req.url, true);
        req.params = query;

        const handler = ApplicationRouter.matchRouteOrThrow(req.method, pathname);
        await handler(req, res);
    } catch (error) {
        await ResponseHandler.handleError(res, error);
    }
});

module.exports = server;