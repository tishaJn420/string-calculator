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

        test('should return number itself for single number', () => {
            expect(calculator.add('1')).toBe(1);
            expect(calculator.add('4')).toBe(4);
        });

        test('should return sum for two comma-separated numbers', () => {
            expect(calculator.add('1,5')).toBe(6);
        });
    });

});