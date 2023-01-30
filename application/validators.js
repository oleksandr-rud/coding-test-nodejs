class RequestValidator {
    static validateNumberOrThrow(num) {
        if (!Number.isInteger(num)) {
            throw new ResponseError('Input must be an integer', HttpStatus.BAD_REQUEST);
        }
    }
}

module.exports = {
    RequestValidator
};