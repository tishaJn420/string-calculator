class StringCalculator {
    add(numbers) {
        if (numbers === '') {
            return 0;
        }
        return parseInt(numbers.trim(), 10)
    }
}

module.exports = StringCalculator;