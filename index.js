const StringCalculator = require('./src/stringCalculator');

// Create calculator instance
const calculator = new StringCalculator();

console.log('String Calculator TDD Kata Examples \n');

// Step 1: Basic functionality
console.log('Step 1: Basic functionality');
console.log(`add('') = ${calculator.add('')}`);                    // 0
console.log(`add('1') = ${calculator.add('1')}`);                  // 1
console.log(`add('1,5') = ${calculator.add('1,5')}`);              // 6
console.log();

// Step 2: Any amount of numbers
console.log('Step 2: Any amount of numbers');
console.log(`add('1,2,3') = ${calculator.add('1,2,3')}`);          // 6
console.log(`add('1,2,3,4,5') = ${calculator.add('1,2,3,4,5')}`);  // 15
console.log();

// Step 3: New lines between numbers
console.log('Step 3: New lines between numbers');
console.log(`add('1\\n2,3') = ${calculator.add('1\n2,3')}`);       // 6
console.log(`add('1\\n2\\n3') = ${calculator.add('1\n2\n3')}`);    // 6
console.log();

// Step 4: Different delimiters
console.log('Step 4: Different delimiters');
console.log(`add('//;\\n1;2') = ${calculator.add('//;\n1;2')}`);   // 3
console.log(`add('//|\\n1|2|3') = ${calculator.add('//|\n1|2|3')}`); // 6
console.log(`add('//*\\n1*2*3*4') = ${calculator.add('//*\n1*2*3*4')}`); // 10
console.log();

// Step 5: Negative numbers (will throw exceptions)
console.log('Step 5: Negative numbers (exceptions)');
try {
  calculator.add('-1');
} catch (error) {
  console.log(`add('-1') throws: ${error.message}`);
}

try {
  calculator.add('1,-2,3,-4');
} catch (error) {
  console.log(`add('1,-2,3,-4') throws: ${error.message}`);
}

try {
  calculator.add('//;\n-1;-2');
} catch (error) {
  console.log(`add('//;\\n-1;-2') throws: ${error.message}`);
}

console.log('\n=== All examples completed ===');
console.log('Run "npm test" to see the TDD test suite in action!');