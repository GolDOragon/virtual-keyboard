"use strict";

const keys = [
  // {lang: [symbol, pressShift, capsLockOn, pressShift+capsLockOn], keyCode: ""}
  [
    {
      ru: ["ё", "Ё", "Ё", "ё"],
      en: ["`", "~", "`", "~"],
      keyCode: "Backquote",
    },
    { ru: ["1", "!", "1", "!"], en: ["1", "!", "1", "!"], keyCode: "Digit1" },
    { ru: ["2", '"', "2", '"'], en: ["2", "@", "2", "@"], keyCode: "Digit2" },
    { ru: ["3", "№", "3", "№"], en: ["3", "#", "3", "#"], keyCode: "Digit3" },
    { ru: ["4", ";", "4", ";"], en: ["4", "$", "4", "$"], keyCode: "Digit4" },
    { ru: ["5", "%", "5", "%"], en: ["5", "%", "5", "%"], keyCode: "Digit5" },
    { ru: ["6", ":", "6", ":"], en: ["6", "^", "6", "^"], keyCode: "Digit6" },
    { ru: ["7", "?", "7", "?"], en: ["7", "&", "7", "&"], keyCode: "Digit7" },
    { ru: ["8", "*", "8", "*"], en: ["8", "*", "8", "*"], keyCode: "Digit8" },
    { ru: ["9", "(", "9", "("], en: ["9", "(", "9", "("], keyCode: "Digit9" },
    { ru: ["0", ")", "0", ")"], en: ["0", ")", "0", ")"], keyCode: "Digit0" },
    { ru: ["-", "_", "-", "_"], en: ["-", "_", "-", "_"], keyCode: "Minus" },
    { ru: ["=", "+", "=", "+"], en: ["=", "+", "=", "+"], keyCode: "Equal" },
    {
      ru: ["Backspace", "Backspace", "Backspace", "Backspace"],
      en: ["Backspace", "Backspace", "Backspace", "Backspace"],
      keyCode: "Backspace",
    },
  ],
  [
    {
      ru: ["Tab", "Tab", "Tab", "Tab"],
      en: ["Tab", "Tab", "Tab", "Tab"],
      keyCode: "Tab",
    },
    { ru: ["й", "Й", "Й", "й"], en: ["q", "Q", "Q", "q"], keyCode: "KeyQ" },
    { ru: ["ц", "Ц", "Ц", "ц"], en: ["w", "W", "W", "w"], keyCode: "KeyW" },
    { ru: ["у", "У", "У", "у"], en: ["e", "E", "E", "e"], keyCode: "KeyE" },
    { ru: ["к", "К", "К", "к"], en: ["r", "R", "R", "r"], keyCode: "KeyR" },
    { ru: ["е", "Е", "Е", "е"], en: ["t", "T", "T", "t"], keyCode: "KeyT" },
    { ru: ["н", "Н", "Н", "н"], en: ["y", "Y", "Y", "y"], keyCode: "KeyY" },
    { ru: ["г", "Г", "Г", "г"], en: ["u", "U", "U", "u"], keyCode: "KeyU" },
    { ru: ["ш", "Ш", "Ш", "ш"], en: ["i", "I", "I", "i"], keyCode: "KeyI" },
    { ru: ["щ", "Щ", "Щ", "щ"], en: ["o", "O", "O", "o"], keyCode: "KeyO" },
    { ru: ["з", "З", "З", "з"], en: ["p", "P", "P", "p"], keyCode: "KeyP" },
    {
      ru: ["х", "Х", "Х", "х"],
      en: ["[", "{", "[", "{"],
      keyCode: "BracketLeft",
    },
    {
      ru: ["ъ", "Ъ", "Ъ", "ъ"],
      en: ["]", "}", "]", "}"],
      keyCode: "BracketRight",
    },
    {
      ru: ["\\", "/", "\\", "/"],
      en: ["\\", "|", "\\", "|"],
      keyCode: "Backslash",
    },
  ],
  [
    {
      ru: ["CapsLock", "CapsLock", "CapsLock", "CapsLock"],
      en: ["CapsLock", "CapsLock", "CapsLock", "CapsLock"],
      keyCode: "CapsLock",
    },
    { ru: ["ф", "Ф", "Ф", "ф"], en: ["a", "A", "A", "a"], keyCode: "KeyA" },
    { ru: ["ы", "Ы", "Ы", "ы"], en: ["s", "S", "S", "s"], keyCode: "KeyS" },
    { ru: ["в", "В", "В", "в"], en: ["d", "D", "D", "d"], keyCode: "KeyD" },
    { ru: ["а", "А", "А", "а"], en: ["f", "F", "F", "f"], keyCode: "KeyF" },
    { ru: ["п", "П", "П", "п"], en: ["g", "G", "G", "g"], keyCode: "KeyG" },
    { ru: ["р", "Р", "Р", "р"], en: ["h", "H", "H", "h"], keyCode: "KeyH" },
    { ru: ["о", "О", "О", "о"], en: ["j", "J", "J", "j"], keyCode: "KeyJ" },
    { ru: ["л", "Л", "Л", "л"], en: ["k", "K", "K", "k"], keyCode: "KeyK" },
    { ru: ["д", "Д", "Д", "д"], en: ["l", "L", "L", "l"], keyCode: "KeyL" },
    {
      ru: ["ж", "Ж", "Ж", "ж"],
      en: [";", ":", ";", ":"],
      keyCode: "Semicolon",
    },
    { ru: ["э", "Э", "Э", "э"], en: ["'", '"', "'", '"'], keyCode: "Quote" },
    {
      ru: ["Enter", "Enter", "Enter", "Enter"],
      en: ["Enter", "Enter", "Enter", "Enter"],
      keyCode: "Enter",
    },
  ],
  [
    {
      ru: ["Shift", "Shift", "Shift", "Shift"],
      en: ["Shift", "Shift", "Shift", "Shift"],
      keyCode: "ShiftLeft",
    },
    { ru: ["я", "Я", "Я", "я"], en: ["z", "Z", "Z", "z"], keyCode: "KeyZ" },
    { ru: ["ч", "Ч", "Ч", "ч"], en: ["x", "X", "X", "x"], keyCode: "KeyX" },
    { ru: ["с", "С", "С", "с"], en: ["c", "C", "C", "c"], keyCode: "KeyC" },
    { ru: ["м", "М", "М", "м"], en: ["v", "V", "V", "v"], keyCode: "KeyV" },
    { ru: ["и", "И", "И", "и"], en: ["b", "B", "B", "b"], keyCode: "KeyB" },
    { ru: ["т", "Т", "Т", "т"], en: ["n", "N", "N", "n"], keyCode: "KeyN" },
    { ru: ["ь", "Ь", "Ь", "ь"], en: ["m", "M", "M", "m"], keyCode: "KeyM" },
    { ru: ["б", "Б", "Б", "б"], en: [",", "<", ",", "<"], keyCode: "Comma" },
    { ru: ["ю", "Ю", "Ю", "ю"], en: [".", ">", ".", ">"], keyCode: "Period" },
    { ru: [".", ",", ".", ","], en: ["/", "?", "/", "?"], keyCode: "Slash" },
    { ru: ["↑", "↑", "↑", "↑"], en: ["↑", "↑", "↑", "↑"], keyCode: "ArrowUp" },
    {
      ru: ["Shift", "Shift", "Shift", "Shift"],
      en: ["Shift", "Shift", "Shift", "Shift"],
      keyCode: "ShiftRight",
    },
  ],
  [
    {
      ru: ["ctrl", "ctrl", "ctrl", "ctrl"],
      en: ["ctrl", "ctrl", "ctrl", "ctrl"],
      keyCode: "ControlLeft",
    },
    {
      ru: ["win", "win", "win", "win"],
      en: ["win", "win", "win", "win"],
      keyCode: "MetaLeft",
    },
    {
      ru: ["alt", "alt", "alt", "alt"],
      en: ["alt", "alt", "alt", "alt"],
      keyCode: "AltLeft",
    },
    {
      ru: ["Space", "Space", "Space", "Space"],
      en: ["Space", "Space", "Space", "Space"],
      keyCode: "Space",
    },
    {
      ru: ["alt gr", "alt gr", "alt gr", "alt gr"],
      en: ["alt gr", "alt gr", "alt gr", "alt gr"],
      keyCode: "AltRight",
    },
    {
      ru: ["←", "←", "←", "←"],
      en: ["←", "←", "←", "←"],
      keyCode: "ArrowLeft",
    },
    {
      ru: ["↓", "↓", "↓", "↓"],
      en: ["↓", "↓", "↓", "↓"],
      keyCode: "ArrowDown",
    },
    {
      ru: ["→", "→", "→", "→"],
      en: ["→", "→", "→", "→"],
      keyCode: "ArrowRight",
    },
    {
      ru: ["ctrl", "ctrl", "ctrl", "ctrl"],
      en: ["ctrl", "ctrl", "ctrl", "ctrl"],
      keyCode: "ControlRight",
    },
  ],
];

function createKeyboard() {
  let fragment = new DocumentFragment();

  for (let row of keys) {
    let rowList = document.createElement("ul");
    rowList.className = "row";

    for (let i = 0; i < row.length; i++) {
      let cell = document.createElement("li");
      cell.className = "cell";
      cell.dataset.keyCode = row[i]["keyCode"];

      for (let lang of ["ru", "en"]) {
        let span = document.createElement("span");
        span.className = lang;

        for (let j = 0; j < row[i][lang].length; j++) {
          let symbol = document.createElement("span");
          let symbolType;
          switch (j) {
            case 0:
              symbolType = "caseDown";
              break;
            case 1:
              symbolType = "shift";
              break;
            case 2:
              symbolType = "caps";
              break;
            case 3:
              symbolType = "shiftCaps";
              break;
          }
          symbol.className = "key--symbol " + symbolType;
          symbol.append(row[i][lang][j]);
          span.append(symbol);
        }
        cell.append(span);
      }

      let cellTextContent = cell.children[0].children[0].textContent;
      if (cellTextContent == "Space") cell.classList.add("space-size");
      else if (cellTextContent.length > 4) cell.classList.add("large-size");
      else if (cellTextContent.length > 2) cell.classList.add("medium-size");
      else cell.classList.add("small-size");

      rowList.append(cell);
    }

    fragment.append(rowList);
  }
  return fragment;
}

function switchKeyboardLayout(lang, isPressShift, isPressCaps) {
  // {lang: [default, pressShift, pressCaps, pressShift+pressCaps], lang{...}}
  let symbolType = +isPressShift + +isPressCaps * 2;

  for (let row of keyboardContainer.children) {
    for (let key of row.children) {
      key.querySelectorAll("span").forEach((item) => {
        item.classList.remove("shown");
      });

      let symbols = key.getElementsByClassName(lang)[0];
      symbols.classList.add("shown");

      symbols.querySelectorAll("span").forEach((item) => {
        item.classList.remove("shown");
        if (item === symbols.children[symbolType]) item.classList.add("shown");
      });
    }
  }
}

function getCaret(textElement) {
  if (textElement.selectionStart) return textElement.selectionStart;
  else return 0;
}

let keyboardContainer = document.createElement("div");
keyboardContainer.className = "keyboard-container";

keyboardContainer.append(createKeyboard());

switchKeyboardLayout("ru", false, false);

keyboardContainer.addEventListener("mouseover", (event) => {
  let target = event.target;

  if (target.classList.contains("cell")) {
    target.style.backgroundColor = "rgb(193, 211, 202)";
  } else if (target.parentElement.parentElement.classList.contains("cell")) {
    target.parentElement.parentElement.style.backgroundColor =
      "rgb(193, 211, 202)";
  }
});

keyboardContainer.addEventListener("mouseout", (event) => {
  if (event.target.classList.contains("cell")) {
    event.target.style.backgroundColor = "#3a424e";
  }
});

// ----------------------------------

let textContainer = document.createElement("div");
textContainer.className = "text-container";

let textArea = document.createElement("textarea");
[textArea.className, textArea.name, textArea.id] = [
  "textarea",
  "textarea",
  "textarea",
];
[textArea.cols, textArea.rows] = [100, 10];
textArea.placeholder = "Введите что-нибудь...";
textArea.value = "0123456789";

textContainer.append(textArea);
document.body.prepend(textContainer);

document.body.insertAdjacentHTML(
  "afterbegin",
  `<div class="logo"><h1>RSS Виртуальная клавиатура</h1></div>`
);
document.body.insertAdjacentHTML(
  "beforeend",
  `<div class="reference">
  <p>Клавиатура создана в операционной системе Windows</p>
  <p>Для переключения языка комбинация: левыe alt + shift</p>
  </div>`
);

// -----------------
textContainer.after(keyboardContainer);
// --------------------

let lang = "ru";
let caret = getCaret(textArea);

function addKeyOnMouseClick(event) {
  let target = event.target;

  if (target.classList.contains("cell")) {
    let symbol = target
      .getElementsByClassName(lang)[0]
      .getElementsByClassName("shown")[0];

    textArea.value =
      textArea.value.slice(0, caret) +
      symbol.textContent +
      textArea.value.slice(caret);
    caret++;
  } else if (target.parentElement.parentElement.classList.contains("cell")) {
    textArea.value =
      textArea.value.slice(0, caret) +
      target.textContent +
      textArea.value.slice(caret);
    caret++;
  }
  console.log("OK");
}

keyboardContainer.addEventListener("click", addKeyOnMouseClick);
textArea.addEventListener("click", () => {
  caret = getCaret(textArea);
});
