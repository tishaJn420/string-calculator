const StringCalculator = require('./src/stringCalculator');

describe('String Calculator', () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new StringCalculator();
    });

    describe('Step 1: Basic functionality', () => {
        test('should return 0 for empty string', () => {
          expect(calculator.add('')).toBe(0);
        });
    });

});