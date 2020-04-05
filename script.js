"use strict";

const keys = [
  // lang: [symbol, symbolOnShift, symbolOnCaps]
  [
    { ru: ["ё", "Ё", "Ё"], en: ["`", "~", "`"] },
    { ru: ["1", "!", "1"], en: ["1", "!", "1"] },
    { ru: ["2", '"', "2"], en: ["2", "@", "2"] },
    { ru: ["3", "№", "3"], en: ["3", "#", "3"] },
    { ru: ["4", ";", "4"], en: ["4", "$", "4"] },
    { ru: ["5", "%", "5"], en: ["5", "%", "5"] },
    { ru: ["6", ":", "6"], en: ["6", "^", "6"] },
    { ru: ["7", "?", "7"], en: ["7", "&", "7"] },
    { ru: ["8", "*", "8"], en: ["8", "*", "8"] },
    { ru: ["9", "(", "9"], en: ["9", "(", "9"] },
    { ru: ["0", ")", "0"], en: ["0", ")", "0"] },
    { ru: ["-", "_", "-"], en: ["-", "_", "-"] },
    { ru: ["=", "+", "="], en: ["=", "+", "="] },
    {
      ru: ["backspace", "backspace", "backspace"],
      en: ["backspace", "backspace", "backspace"],
    },
  ],
  [
    { ru: ["tab", "tab", "tab"], en: ["tab", "tab"] },
    { ru: ["й", "Й", "Й"], en: ["q", "Q", "Q"] },
    { ru: ["ц", "Ц", "Ц"], en: ["w", "W", "W"] },
    { ru: ["у", "У", "У"], en: ["e", "E", "E"] },
    { ru: ["к", "К", "К"], en: ["r", "R", "R"] },
    { ru: ["е", "Е", "Е"], en: ["t", "T", "T"] },
    { ru: ["н", "Н", "Н"], en: ["y", "Y", "Y"] },
    { ru: ["г", "Г", "Г"], en: ["u", "U", "U"] },
    { ru: ["ш", "Ш", "Ш"], en: ["i", "I", "I"] },
    { ru: ["щ", "Щ", "Щ"], en: ["o", "O", "O"] },
    { ru: ["з", "З", "З"], en: ["p", "P", "P"] },
    { ru: ["х", "Х", "Х"], en: ["[", "{", "["] },
    { ru: ["ъ", "Ъ", "Ъ"], en: ["]", "}", "]"] },
    { ru: ["\\", "/", "\\"], en: ["\\", "|", "\\"] },
  ],
  [
    {
      ru: ["caps lock", "caps lock", "caps lock"],
      en: ["caps lock", "caps lock", "caps lock"],
    },
    { ru: ["ф", "Ф", "Ф"], en: ["a", "A", "A"] },
    { ru: ["ы", "Ы", "Ы"], en: ["s", "S", "S"] },
    { ru: ["в", "В", "В"], en: ["d", "D", "D"] },
    { ru: ["а", "А", "А"], en: ["f", "F", "F"] },
    { ru: ["п", "П", "П"], en: ["g", "G", "G"] },
    { ru: ["р", "Р", "Р"], en: ["h", "H", "H"] },
    { ru: ["о", "О", "О"], en: ["j", "J", "J"] },
    { ru: ["л", "Л", "Л"], en: ["k", "K", "K"] },
    { ru: ["д", "Д", "Д"], en: ["l", "L", "L"] },
    { ru: ["ж", "Ж", "Ж"], en: [";", ":", ";"] },
    { ru: ["э", "Э", "Э"], en: ["'", '"', "'"] },
    { ru: ["enter", "enter", "enter"], en: ["enter", "enter", "enter"] },
  ],
  [
    { ru: ["shift", "shift", "shift"], en: ["shift", "shift", "shift"] },
    { ru: ["я", "Я", "Я"], en: ["z", "Z", "Z"] },
    { ru: ["ч", "Ч", "Ч"], en: ["x", "X", "X"] },
    { ru: ["с", "С", "С"], en: ["c", "C", "C"] },
    { ru: ["м", "М", "М"], en: ["v", "V", "V"] },
    { ru: ["и", "И", "И"], en: ["b", "B", "B"] },
    { ru: ["т", "Т", "Т"], en: ["n", "N", "N"] },
    { ru: ["ь", "Ь", "Ь"], en: ["m", "M", "M"] },
    { ru: ["б", "Б", "Б"], en: [",", "<", ","] },
    { ru: ["ю", "Ю", "Ю"], en: [".", ">", "."] },
    { ru: [".", ",", "."], en: ["/", "?", "/"] },
    { ru: ["↑", "↑", "↑"], en: ["↑", "↑", "↑"] },
    { ru: ["shift", "shift", "shift"], en: ["shift", "shift", "shift"] },
  ],
  [
    { ru: ["ctrl", "ctrl", "ctrl"], en: ["ctrl", "ctrl", "ctrl"] },
    { ru: ["win", "win", "win"], en: ["win", "win", "win"] },
    { ru: ["alt", "alt", "alt"], en: ["alt", "alt", "alt"] },
    { ru: ["space", "space", "space"], en: ["space", "space", "space"] },
    { ru: ["alt gr", "alt gr", "alt gr"], en: ["alt gr", "alt gr", "alt gr"] },
    { ru: ["←", "←", "←"], en: ["←", "←", "←"] },
    { ru: ["↓", "↓", "↓"], en: ["↓", "↓", "↓"] },
    { ru: ["→", "→", "→"], en: ["→", "→", "→"] },
    { ru: ["ctrl", "ctrl", "ctrl"], en: ["ctrl", "ctrl", "ctrl"] },
  ],
];

function createKeyboard(language, isCapsLock, isShift) {
  let fragment = new DocumentFragment();

  for (let row of keys) {
    let rowUl = document.createElement("ul");
    rowUl.className = "row";

    for (let i = 0; i < row.length; i++) {
      let cell = document.createElement("li");
      cell.className = "cell";
      cell.append(row[i][language][(isCapsLock + isShift) % 2]);

      if (cell.textContent == "space") {
        cell.className += " space-size";
      } else if (cell.textContent.length > 4) {
        cell.className += " large-size";
      } else if (cell.textContent.length > 2) {
        cell.className += " medium-size";
      } else {
        cell.className += " small-size";
      }
      rowUl.append(cell);
    }
    fragment.append(rowUl);
  }
  return fragment;
}

let textContainer = document.createElement("div");
textContainer.className = "text-container";

let textArea = document.createElement("textarea");
textArea.className = "textarea";
textArea.placeholder = "Введите что-нибудь...";
textArea.name = "textarea";
textArea.id = "textarea";
textArea.cols = 100;
textArea.rows = 10;
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

let keyboardContainer = document.createElement("div");
keyboardContainer.className = "keyboard-container";

keyboardContainer.append(createKeyboard("ru", false, true));
textContainer.after(keyboardContainer);
