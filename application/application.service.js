/**
* @description The ApplicationService class is responsible for providing the core logic of the API, processing the integer input and determining the appropriate response based on the requirements of the API.
* @class
*/
class ApplicationService {
    static processNumber(num) {
        if (num % 3 === 0 && num % 5 === 0) {
            return 'GN';
        }
        if (num % 3 === 0) {
            return 'G';
        }
        if (num % 5 === 0) {
            return 'N';
        }

        return num;
    }
}

module.exports = ApplicationService;