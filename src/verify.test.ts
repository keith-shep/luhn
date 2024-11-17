import {verify} from "./verify";

test('test 1', () => {
    expect(verify('79927398713')).toBe(true);
})