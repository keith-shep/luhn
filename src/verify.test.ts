import {verify, transform, isEven, isDoubleDigit, sumAllDigits} from "./verify";

test('test 1', () => {
    expect(verify('79927398713')).toBe(true);
})


test('test 2', () => {
    expect(transform('79927398713')).toBe(70);
})

test('test 3', () => {
    expect(isEven(79927398713)).toBe(false);
})

test('test 4', () => {
    expect(isEven(79927398714)).toBe(true);
})

test('test 5', () => {
    expect(isDoubleDigit(10)).toBe(true);
})

test('test 6', () => {
    expect(isDoubleDigit(9)).toBe(false);
})

test('test 7', () => {
    expect(sumAllDigits(11)).toBe(2);
})

test('test 8', () => {
    expect(sumAllDigits(18)).toBe(9);
})

test('test 9', () => {
    expect(sumAllDigits(123)).toBe(6);
})




