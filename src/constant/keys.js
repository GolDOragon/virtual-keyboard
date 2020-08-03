const KEYS = [
  // {lang: [symbol, pressShift, capsLockOn, pressShift+capsLockOn], keyCode: ""}
  [
    {
      ru: ['ё', 'Ё', 'Ё', 'ё'],
      en: ['`', '~', '`', '~'],
      keyCode: 'Backquote',
    },
    { ru: ['1', '!', '1', '!'], en: ['1', '!', '1', '!'], keyCode: 'Digit1' },
    { ru: ['2', '"', '2', '"'], en: ['2', '@', '2', '@'], keyCode: 'Digit2' },
    { ru: ['3', '№', '3', '№'], en: ['3', '#', '3', '#'], keyCode: 'Digit3' },
    { ru: ['4', ';', '4', ';'], en: ['4', '$', '4', '$'], keyCode: 'Digit4' },
    { ru: ['5', '%', '5', '%'], en: ['5', '%', '5', '%'], keyCode: 'Digit5' },
    { ru: ['6', ':', '6', ':'], en: ['6', '^', '6', '^'], keyCode: 'Digit6' },
    { ru: ['7', '?', '7', '?'], en: ['7', '&', '7', '&'], keyCode: 'Digit7' },
    { ru: ['8', '*', '8', '*'], en: ['8', '*', '8', '*'], keyCode: 'Digit8' },
    { ru: ['9', '(', '9', '('], en: ['9', '(', '9', '('], keyCode: 'Digit9' },
    { ru: ['0', ')', '0', ')'], en: ['0', ')', '0', ')'], keyCode: 'Digit0' },
    { ru: ['-', '_', '-', '_'], en: ['-', '_', '-', '_'], keyCode: 'Minus' },
    { ru: ['=', '+', '=', '+'], en: ['=', '+', '=', '+'], keyCode: 'Equal' },
    {
      ru: ['Backspace', 'Backspace', 'Backspace', 'Backspace'],
      en: ['Backspace', 'Backspace', 'Backspace', 'Backspace'],
      keyCode: 'Backspace',
    },
  ],
  [
    {
      ru: ['Tab', 'Tab', 'Tab', 'Tab'],
      en: ['Tab', 'Tab', 'Tab', 'Tab'],
      keyCode: 'Tab',
    },
    { ru: ['й', 'Й', 'Й', 'й'], en: ['q', 'Q', 'Q', 'q'], keyCode: 'KeyQ' },
    { ru: ['ц', 'Ц', 'Ц', 'ц'], en: ['w', 'W', 'W', 'w'], keyCode: 'KeyW' },
    { ru: ['у', 'У', 'У', 'у'], en: ['e', 'E', 'E', 'e'], keyCode: 'KeyE' },
    { ru: ['к', 'К', 'К', 'к'], en: ['r', 'R', 'R', 'r'], keyCode: 'KeyR' },
    { ru: ['е', 'Е', 'Е', 'е'], en: ['t', 'T', 'T', 't'], keyCode: 'KeyT' },
    { ru: ['н', 'Н', 'Н', 'н'], en: ['y', 'Y', 'Y', 'y'], keyCode: 'KeyY' },
    { ru: ['г', 'Г', 'Г', 'г'], en: ['u', 'U', 'U', 'u'], keyCode: 'KeyU' },
    { ru: ['ш', 'Ш', 'Ш', 'ш'], en: ['i', 'I', 'I', 'i'], keyCode: 'KeyI' },
    { ru: ['щ', 'Щ', 'Щ', 'щ'], en: ['o', 'O', 'O', 'o'], keyCode: 'KeyO' },
    { ru: ['з', 'З', 'З', 'з'], en: ['p', 'P', 'P', 'p'], keyCode: 'KeyP' },
    {
      ru: ['х', 'Х', 'Х', 'х'],
      en: ['[', '{', '[', '{'],
      keyCode: 'BracketLeft',
    },
    {
      ru: ['ъ', 'Ъ', 'Ъ', 'ъ'],
      en: [']', '}', ']', '}'],
      keyCode: 'BracketRight',
    },
    {
      ru: ['\\', '/', '\\', '/'],
      en: ['\\', '|', '\\', '|'],
      keyCode: 'Backslash',
    },
  ],
  [
    {
      ru: ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
      en: ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
      keyCode: 'CapsLock',
    },
    { ru: ['ф', 'Ф', 'Ф', 'ф'], en: ['a', 'A', 'A', 'a'], keyCode: 'KeyA' },
    { ru: ['ы', 'Ы', 'Ы', 'ы'], en: ['s', 'S', 'S', 's'], keyCode: 'KeyS' },
    { ru: ['в', 'В', 'В', 'в'], en: ['d', 'D', 'D', 'd'], keyCode: 'KeyD' },
    { ru: ['а', 'А', 'А', 'а'], en: ['f', 'F', 'F', 'f'], keyCode: 'KeyF' },
    { ru: ['п', 'П', 'П', 'п'], en: ['g', 'G', 'G', 'g'], keyCode: 'KeyG' },
    { ru: ['р', 'Р', 'Р', 'р'], en: ['h', 'H', 'H', 'h'], keyCode: 'KeyH' },
    { ru: ['о', 'О', 'О', 'о'], en: ['j', 'J', 'J', 'j'], keyCode: 'KeyJ' },
    { ru: ['л', 'Л', 'Л', 'л'], en: ['k', 'K', 'K', 'k'], keyCode: 'KeyK' },
    { ru: ['д', 'Д', 'Д', 'д'], en: ['l', 'L', 'L', 'l'], keyCode: 'KeyL' },
    {
      ru: ['ж', 'Ж', 'Ж', 'ж'],
      en: [';', ':', ';', ':'],
      keyCode: 'Semicolon',
    },
    { ru: ['э', 'Э', 'Э', 'э'], en: ["'", '"', "'", '"'], keyCode: 'Quote' },
    {
      ru: ['Enter', 'Enter', 'Enter', 'Enter'],
      en: ['Enter', 'Enter', 'Enter', 'Enter'],
      keyCode: 'Enter',
    },
  ],
  [
    {
      ru: ['Shift', 'Shift', 'Shift', 'Shift'],
      en: ['Shift', 'Shift', 'Shift', 'Shift'],
      keyCode: 'ShiftLeft',
    },
    { ru: ['я', 'Я', 'Я', 'я'], en: ['z', 'Z', 'Z', 'z'], keyCode: 'KeyZ' },
    { ru: ['ч', 'Ч', 'Ч', 'ч'], en: ['x', 'X', 'X', 'x'], keyCode: 'KeyX' },
    { ru: ['с', 'С', 'С', 'с'], en: ['c', 'C', 'C', 'c'], keyCode: 'KeyC' },
    { ru: ['м', 'М', 'М', 'м'], en: ['v', 'V', 'V', 'v'], keyCode: 'KeyV' },
    { ru: ['и', 'И', 'И', 'и'], en: ['b', 'B', 'B', 'b'], keyCode: 'KeyB' },
    { ru: ['т', 'Т', 'Т', 'т'], en: ['n', 'N', 'N', 'n'], keyCode: 'KeyN' },
    { ru: ['ь', 'Ь', 'Ь', 'ь'], en: ['m', 'M', 'M', 'm'], keyCode: 'KeyM' },
    { ru: ['б', 'Б', 'Б', 'б'], en: [',', '<', ',', '<'], keyCode: 'Comma' },
    { ru: ['ю', 'Ю', 'Ю', 'ю'], en: ['.', '>', '.', '>'], keyCode: 'Period' },
    { ru: ['.', ',', '.', ','], en: ['/', '?', '/', '?'], keyCode: 'Slash' },
    { ru: ['↑', '↑', '↑', '↑'], en: ['↑', '↑', '↑', '↑'], keyCode: 'ArrowUp' },
    {
      ru: ['Shift', 'Shift', 'Shift', 'Shift'],
      en: ['Shift', 'Shift', 'Shift', 'Shift'],
      keyCode: 'ShiftRight',
    },
  ],
  [
    {
      ru: ['ctrl', 'ctrl', 'ctrl', 'ctrl'],
      en: ['ctrl', 'ctrl', 'ctrl', 'ctrl'],
      keyCode: 'ControlLeft',
    },
    {
      ru: ['win', 'win', 'win', 'win'],
      en: ['win', 'win', 'win', 'win'],
      keyCode: 'MetaLeft',
    },
    {
      ru: ['alt', 'alt', 'alt', 'alt'],
      en: ['alt', 'alt', 'alt', 'alt'],
      keyCode: 'AltLeft',
    },
    {
      ru: ['Space', 'Space', 'Space', 'Space'],
      en: ['Space', 'Space', 'Space', 'Space'],
      keyCode: 'Space',
    },
    {
      ru: ['alt gr', 'alt gr', 'alt gr', 'alt gr'],
      en: ['alt gr', 'alt gr', 'alt gr', 'alt gr'],
      keyCode: 'AltRight',
    },
    {
      ru: ['←', '←', '←', '←'],
      en: ['←', '←', '←', '←'],
      keyCode: 'ArrowLeft',
    },
    {
      ru: ['↓', '↓', '↓', '↓'],
      en: ['↓', '↓', '↓', '↓'],
      keyCode: 'ArrowDown',
    },
    {
      ru: ['→', '→', '→', '→'],
      en: ['→', '→', '→', '→'],
      keyCode: 'ArrowRight',
    },
    {
      ru: ['ctrl', 'ctrl', 'ctrl', 'ctrl'],
      en: ['ctrl', 'ctrl', 'ctrl', 'ctrl'],
      keyCode: 'ControlRight',
    },
  ],
];

const WRITING_KEYS = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash',
  'ArrowUp',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
];
const COMMAND_KEYS = [
  'Backspace',
  'Tab',
  'CapsLock',
  'Enter',
  'ShiftLeft',
  'ShiftRight',
  'ControlLeft',
  'ControlRight',
  'MetaLeft',
  'AltLeft',
  'AltRight',
  'Space',
];

module.exports = { KEYS, WRITING_KEYS, COMMAND_KEYS };
