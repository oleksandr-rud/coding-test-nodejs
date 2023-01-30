const assert = require("assert");
const ApplicationService = require("../application/application.service");

describe("ApplicationService", () => {
    describe("processNumber", () => {
        it("should return 'G' if the number is multiple of 3", () => {
            const result = ApplicationService.processNumber(3);
            assert.strictEqual(result, "G");
        });

        it("should return 'N' if the number is multiple of 5", () => {
            const result = ApplicationService.processNumber(5);
            assert.strictEqual(result, "N");
        });

        it("should return 'GN' if the number is multiple of 3 and 5", () => {
            const result = ApplicationService.processNumber(15);
            assert.strictEqual(result, "GN");
        });

        it("should return the number itself if the number is not multiple of 3 or 5", () => {
            const result = ApplicationService.processNumber(7);
            assert.strictEqual(result, 7);
        });
    });
});