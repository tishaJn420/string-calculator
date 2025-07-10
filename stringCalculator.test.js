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
          expect(calculator.add('//|\n1|2|3')).toBe(6);
          expect(calculator.add('//*\n1*2*3*4')).toBe(10);
        });

        test('should handle custom delimiter with single number', () => {
            expect(calculator.add('//;\n5')).toBe(5);
        });

        test('should handle custom delimiter with empty numbers', () => {
            expect(calculator.add('//;\n')).toBe(0);
        });
    });

    describe('Step 5: Negative numbers not allowed', () => {
        test('should throw exception for single negative number', () => {
          expect(() => calculator.add('-1')).toThrow('negative numbers not allowed -1');
          expect(() => calculator.add('1,-2')).toThrow('negative numbers not allowed -2');
        });

        test('should throw exception with all negative numbers for multiple negatives', () => {
            expect(() => calculator.add('-1,-2')).toThrow('negative numbers not allowed -1,-2');
            expect(() => calculator.add('1,-2,3,-4')).toThrow('negative numbers not allowed -2,-4');
        });

        test('should throw exception for negative numbers with custom delimiter', () => {
            expect(() => calculator.add('//;\n-1;2')).toThrow('negative numbers not allowed -1');
            expect(() => calculator.add('//;\n-1;-2')).toThrow('negative numbers not allowed -1,-2');
        });
    });
});