class StringCalculator {
    add(numbers) {
        if (numbers === '') {
            return 0;
        }
        let sum = 0;
        const numArr = numbers.split(',')
        sum = parseInt(numArr[0].trim(), 10) + (numArr[1] ? parseInt(numArr[1].trim(), 10) : 0);
        return sum
    }
}

module.exports = StringCalculator;