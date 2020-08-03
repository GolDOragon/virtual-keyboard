// const { unlimitedSize } = require('../components/Key.js');

// describe('Test unlimitedSize function:', () => {
//   expect(unlimitedSize).toBeDefined()
// })
const { checkKeySize } = require('../core/checkKeySize');
const COMMAND_KEYS = [
  'Backspace',
  'Tab',
  'CapsLock',
  'Enter',
  'shift',
  'space',
];

describe('test checkKeySize function', () => {
  test('should be defined', () => {
    expect(checkKeySize).toBeDefined();
    expect(checkKeySize('')).toBeDefined();
    expect(checkKeySize(' ')).toBeDefined();
  });

  test('should take string', () => {
    // not
    //expect(checkKeySize(1)).toThrowError("It's must be a string!");
    expect(() => checkKeySize(1)).toThrowError("It's must be a string!");
    expect(() => checkKeySize(true)).toThrowError("It's must be a string!");
    expect(() => checkKeySize({})).toThrowError("It's must be a string!");
    expect(() => checkKeySize('')).toBeDefined();
    expect(() => checkKeySize(' ')).toBeDefined();
  });
  test('should return boolean', () => {
    expect(checkKeySize('')).toEqual(expect.any(Boolean));
    expect(checkKeySize('1')).toEqual(expect.any(Boolean));
  });

  test.each(COMMAND_KEYS)('should return true on command', (key) => {
    expect(checkKeySize(key)).toEqual(true);
  });
});
