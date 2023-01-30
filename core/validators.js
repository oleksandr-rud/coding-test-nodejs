/**
 * @description Class that validates incoming request parameters and data.
 * @class
 */
class RequestValidator {
    /**
     * @description Validates if the provided input is a valid integer or throws an error.
     * @param {Number} number - The input number to validate.
     * @throws {Error} - If the input is not a valid integer.
     */
    static validateNumberOrThrow(num) {
        if (!Number.isInteger(num)) {
            throw new ResponseError('Input must be an integer', HttpStatus.BAD_REQUEST);
        }
    }
}

module.exports = {
    RequestValidator
};