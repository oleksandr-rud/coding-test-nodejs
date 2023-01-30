/**
 * @description Class representing an error in the API response.
 * @class
 */
class ResponseError extends Error {
    /**
    * Creates a new ResponseError object.
    * @param {string} message - The error message.
    * @param {number} statusCode - The HTTP status code to be associated with the error.
    */
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

module.exports = {
    ResponseError
};