export function verify(digits: string) : boolean {
    const reversed = reverse(digits);
    const transformed = transform(reversed);
    return isValid(transformed);
}


export function reverse(digits: string): string {
    return digits.split('').reverse().join('');
}

export function transform(digits: string): number {
    const digitsArray = digits.split('').map(digit => Number (digit));

    const resultArray: Array <number> = [];
    digitsArray.forEach((digit, index) => {
        if (isOdd(index)) {
            digit *= 2;
        }
        if (isDoubleDigit(digit)) {
            digit = sumAllDigits(digit)
        }
        resultArray.push(digit);
    })
    const result = Number (resultArray.join(''));
    return sumAllDigits(result);
}

export function isValid(calculatedResult: number): boolean {
    return calculatedResult % 10 == 0;
}

export function isEven(number: number): boolean {
    return number % 2 == 0;
}

export function isOdd(number: number): boolean {
    return !isEven(number);
}

export function isDoubleDigit(number: number): boolean {
    return number - 10 >= 0;
}

export function sumAllDigits(number: number): number {
    const digitArray = number.toString()
                            .split('')
                            .map(digit => Number (digit));
    let result = 0;
    digitArray.forEach((digit) => {
        result += digit;
    })

    return result;
}


