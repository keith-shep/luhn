export function verify(digits: string) : boolean {
    const reversed: number = reverse(Number (digits));
    const transformed: number = transform(reversed);
    return isValid(transformed);
}


export function reverse(digits: number): number {
    return Number (digits.toString().split('').reverse().join(''));
}

export function transform(digits: number): number {
    const digitsArray:number[] = digits.toString().split('').map(digit => Number (digit));

    const resultArray:number[] = [];
    digitsArray.forEach((digit: number, index: number) => {
        if (isOdd(index)) {
            digit *= 2;
        }
        if (isDoubleDigit(digit)) {
            digit = sumAllDigits(digit)
        }
        resultArray.push(digit);
    })
    const result: number = Number (resultArray.join(''));
    return sumAllDigits(result);
}

export function isValid(calculatedResult: number): boolean {
    return calculatedResult % 10 === 0;
}

export function isEven(number: number): boolean {
    return number % 2 === 0;
}

export function isOdd(number: number): boolean {
    return !isEven(number);
}

export function isDoubleDigit(number: number): boolean {
    return number - 10 >= 0;
}

export function sumAllDigits(number: number): number {
    const digitArray: number[] = number.toString()
                            .split('')
                            .map(digit => Number (digit));
    let result: number = 0;
    digitArray.forEach((digit: number) => {
        result += digit;
    })

    return result;
}


