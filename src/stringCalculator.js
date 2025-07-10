class StringCalculator {
    add(numbers) {
        if (numbers === '') {
            return 0;
        }
        let sum = 0;
        let numbersToAdd = numbers;
        numbersToAdd = numbersToAdd.replace(/\n/g, ',');

        const numArr = numbersToAdd.split(',');
        numArr.map((num) => {
            sum = sum + parseInt(num.trim(), 10)
        })

        return sum
    }
}

module.exports = StringCalculator;