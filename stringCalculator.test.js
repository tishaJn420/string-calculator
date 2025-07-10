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
            expect(calculator.add('2,9')).toBe(11);

        });
    });

    describe('Step 2: Handle any amount of numbers', () => {
        test('should handle multiple numbers separated by commas', () => {
          expect(calculator.add('1,2,3')).toBe(6);
          expect(calculator.add('1,2,3,4,5')).toBe(15);
        });
      });

    describe('Step 3: Handle new lines between numbers', () => {
        test('should handle new lines and commas as delimiters', () => {
          expect(calculator.add('1\n2,3')).toBe(6);
          expect(calculator.add('1\n2\n3')).toBe(6);
          expect(calculator.add('1,2\n3,4')).toBe(10);
        });
    });

    describe('Step 4: Support different delimiters', () => {
        test('should support custom delimiter specified at beginning', () => {
          expect(calculator.add('//;\n1;2')).toBe(3);
        });
    });
});