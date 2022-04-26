const FizzBuzzService = require("./../../lib/services/FizzBuzzService"); 

describe("Test for FizzBuzzService", () => {
    test("1) FizzBuzz dilema", () => {
        const explorer = {"score": 5};
        const result = FizzBuzzService.applyValidationInExplorer(explorer);

        expect(result.trick).toMatch(/BUZZ/);
    });
});