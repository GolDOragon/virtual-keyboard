/* eslint-disable no-fallthrough */
function checkKeySize(str) {
  if (typeof str !== 'string') throw new TypeError("It's must be a string!");

  switch (str.toLowerCase()) {
    case 'backspace':
    case 'tab':
    case 'capslock':
    case 'enter':
    case 'shift':
    case 'shiftleft':
    case 'shiftright':
    case 'space':
      return true;
    default:
      return false;
  }
}

module.exports = { checkKeySize };
