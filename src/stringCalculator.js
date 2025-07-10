class StringCalculator {
    add(numbers) {
        if (numbers === '') {
            return 0;
        }
        let sum = 0;
        const numArr = numbers.split(',');
        numArr.map((num) => {
            sum = sum + parseInt(num.trim(), 10)
        })

        return sum
    }
}

module.exports = StringCalculator;