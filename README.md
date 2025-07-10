# String Calculator TDD Kata

This project implements the String Calculator Kata using Test-Driven Development (TDD) approach in Node.js.

## TDD Approach

This project follows the Red-Green-Refactor cycle:

1. **Red**: Write a failing test
2. **Green**: Write the minimum code to make the test pass
3. **Refactor**: Improve the code while keeping tests green

## Implementation Steps

### Step 1: Basic Functionality
- Handle empty string → return 0
- Handle single number → return the number
- Handle two comma-separated numbers → return sum

### Step 2: Handle Any Amount of Numbers
- Support multiple comma-separated numbers

### Step 3: Handle New Lines
- Support new lines (`\n`) as delimiters alongside commas

### Step 4: Support Different Delimiters
- Custom delimiter format: `//[delimiter]\n[numbers...]`
- Example: `//;\n1;2` returns 3

### Step 5: Negative Numbers Not Allowed
- Throw exception for negative numbers
- Show all negative numbers in the exception message


## Setup and Installation

1. Clone or create the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

### Watch mode (for development):
```bash
npm test
```

### Single run with coverage:
```bash
npm run test:coverage
```

### CI mode (no watch):
```bash
npm run test:ci
```
