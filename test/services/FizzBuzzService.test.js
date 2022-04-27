const FizzBuzzService = require("./../../lib/services/FizzBuzzService"); 

describe("Test for FizzBuzzService", () => {
    test("1) FizzBuzz dilemma", () => {
        const explorer = {"score": 5};
        const result = FizzBuzzService.applyValidationInExplorer(explorer);

        expect(result.trick).toMatch(/BUZZ/);
    });

    test("2) FizzBuzz dilemma for any number", () => {
        const number1 = 15;
        const result1 = FizzBuzzService.applyValidationInNumber(number1);
        const number2 = 3;
        const result2 = FizzBuzzService.applyValidationInNumber(number2);
        const number3 = 5;
        const result3 = FizzBuzzService.applyValidationInNumber(number3);

        expect(result1).toMatch(/FIZZBUZZ/);
        expect(result2).toMatch(/FIZZ/);
        expect(result3).toMatch(/BUZZ/);
    });
});