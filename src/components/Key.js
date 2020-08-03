// eslint-disable-next-line import/no-unresolved
import { checkKeySize } from '@/core/checkKeySize';
import Unit from './Unit';

export default class Key extends Unit {
  constructor(keyConfig) {
    super('div', 'cell');
    this.keyRu = keyConfig.ru;
    this.keyEn = keyConfig.en;
    this.keyCode = keyConfig.keyCode;

    this.setInnerText(this.keyEn[0]);
    this.addDataset({
      keyCode: this.keyCode,
    });

    if (checkKeySize(this.keyCode)) this.addClass('long');
    // this.subscribe('click', this.pressKey.bind(this));
  }

  keyPress() {
    this.addClass('active');
    console.log(`Press ${this.code}`);
  }

  keyUp() {
    this.rmClass('active');
    console.log(`Press ${this.code}`);
  }
}
