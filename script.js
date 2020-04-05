"use strict";

let reference = document.createElement("div");
reference.className = "reference";
reference.insertAdjacentHTML(
  "afterbegin",
  `<p>Клавиатура создана в операционной системе Windows</p>
  <p>Для переключения языка комбинация: левыe ctrl + alt</p>`
);
document.body.insertAdjacentHTML(
  "beforeend",
  `<div class="reference">
  <p>Клавиатура создана в операционной системе Windows</p>
  <p>Для переключения языка комбинация: левыe alt + shift</p>
  </div>`
);
