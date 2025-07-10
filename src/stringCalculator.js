class StringCalculator {
    add(numbers) {
        if (numbers === '') {
            return 0;
        }
        let sum = 0;
        let delimiter = ','; //Default delimiter
        let numbersToAdd = numbers;

        //Check if the string have a custom delimiter
        if (numbers.startsWith('//')) { 
            const delimiterEndIndex = numbers.indexOf('\n');
            delimiter = numbers.substring(2, delimiterEndIndex);
            numbersToAdd = numbers.substring(delimiterEndIndex + 1);
        }
        numbersToAdd = numbersToAdd.replace(/\n/g, ','); // Relace the new lines

        if (delimiter !== ',') {
            // Escape special regex characters
            const escapedDelimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            numbersToAdd = numbersToAdd.replace(new RegExp(escapedDelimiter, 'g'), ',');
        }

        if (numbersToAdd === '') {
            return 0;
        }
        const numArr = numbersToAdd.split(',');

        const negativeNumbers = numArr.filter(num => num < 0);
        if (negativeNumbers.length > 0) {
            throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
        }

        numArr.map((num) => {
            sum = sum + parseInt(num.trim(), 10)
        })

        return sum
    }
}

module.exports = StringCalculator;