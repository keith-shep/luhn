import {verify, transform, isEven, isDoubleDigit, sumAllDigits, reverse} from "./verify";

test('verify 79927398713 is valid', () => {
    let validNumber = '79927398713';
    let reversed = reverse(validNumber);
    expect(reversed).toBe('31789372997');
    expect(transform(reversed)).toBe(70);
    expect(verify(validNumber)).toBe(true);
})

test('verify 4147203059780942 is invalid', () => {
    const invalidNumber = '4147203059780942';
    let reversed = reverse(invalidNumber);
    expect(reversed).toBe('2490879503027414');
    expect(verify(invalidNumber)).toBe(false);
})

test('verify 4147200059780942 is valid', () => {
    const validNumber = '4147200059780942';
    let reversed = reverse(validNumber);
    expect(reversed).toBe('2490879500027414');
    expect(verify(validNumber)).toBe(true);
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




