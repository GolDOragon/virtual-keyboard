import Unit from './Unit';
import Key from './Key';

export default class Row extends Unit {
  constructor(keys) {
    super('div', 'row');
    this.keysArr = [];

    keys.forEach((key) => {
      const cell = new Key(key);
      this.append(cell.unit);
      this.keysArr.push(cell);
    });
  }

  onMouseClick = (e) => {
    this.keysArr.forEach((cell) => {
      // console.log(cell);
      if (cell.keyCode === e.target.dataset.keyCode) console.log(cell);
    });
  };

  keyPress(target) {
    this.keysArr.forEach((key) => {
      if (key.unit === target) key.keyPress();
    });
  }

  keyUp(target) {
    this.keysArr.forEach((key) => {
      if (key.unit === target) key.keyUp();
    });
  }
}
