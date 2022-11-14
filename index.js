
function getSumOfNumbers (number, type) {
    if (isNaN(number) || !number) {
        return NaN
    } else {
        let sum = 0;
        switch (type) {
            case 'odd':
                for (let i = 1; i <= number; i += 2) {
                    sum += i
                }
                return sum
            case 'even':
                for (let i = 0; i <= number; i += 2) {
                    sum += i
                }
                return sum
            case '':
                for (let i = 0; i <= number; i++) {
                    sum += i
                }
                return sum
        }
    }
}

console.log(getSumOfNumbers( 10,''))

