import Unit from './Unit';
import Row from './Row';

export default class Keyboard extends Unit {
  constructor(keyboardConfig) {
    super('div', 'keyboard-container');
    this.keyRows = [];

    keyboardConfig.forEach((rowConfig) => {
      const row = new Row(rowConfig);
      this.keyRows.push(row);
      this.append(row.unit);
    });

    this.subscribe('click', this.onMouseClick);
  }

  onMouseClick = (event) => {
    const { target } = event;
    if (!target.className.includes('cell')) return;

    this.keyRows.forEach((row) => row.onMouseClick(event));
  };
}
