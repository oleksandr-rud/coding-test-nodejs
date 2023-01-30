class ResponseHandler {
    static async handleSuccess(res, data) {
        res.writeHead(HttpStatus.OK, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ data }));
    }

    static async handleError(res, error) {
        res.writeHead(error?.statusCode || HttpStatus.INTERNAL_SERVER_ERROR, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: error.message }));
    }
}

module.exports = ResponseHandler;