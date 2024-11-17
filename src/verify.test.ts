import {verify, transform, isEven, isDoubleDigit, sumAllDigits} from "./verify";

test('verify 1', () => {
    expect(verify('79927398713')).toBe(true);
})

test('verify 2', () => {
    expect(verify('4147203059780942')).toBe(false);
})

test('verify 3', () => {
    expect(verify('4147200059780942')).toBe(true);
})


test('transform 1', () => {
    expect(transform('79927398713')).toBe(70);
})

test('isEven 1', () => {
    expect(isEven(79927398713)).toBe(false);
})

test('isEven 2', () => {
    expect(isEven(79927398714)).toBe(true);
})

test('isDoubleDigit 1', () => {
    expect(isDoubleDigit(10)).toBe(true);
})

test('isDoubleDigit 2', () => {
    expect(isDoubleDigit(9)).toBe(false);
})

test('sumAllDigits 1', () => {
    expect(sumAllDigits(11)).toBe(2);
})

test('sumAllDigits 2', () => {
    expect(sumAllDigits(18)).toBe(9);
})

test('sumAllDigits 3', () => {
    expect(sumAllDigits(123)).toBe(6);
})




