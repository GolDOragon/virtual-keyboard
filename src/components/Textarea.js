import Unit from './Unit';

export default class Textarea extends Unit {
  constructor() {
    super('div', 'text-container');
    this.area = new Unit('textarea', 'textarea');
    this.area.addAttr({
      className: 'textarea',
      name: 'textarea',
      id: 'textarea',
      cols: 100,
      rows: 10,
      placeholder: 'Write something...',
    });

    this.append(this.area.unit);
  }
}
