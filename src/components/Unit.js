export default class Unit {
  /**
   *
   * @param {string} tag - html tag like 'div', 'nav' and etc.
   * @param {string} CSSClass - CSS class for element
   * @param {string[]} otherClass - next CSS classes for element
   *
   * @example
   * const img = new Unit('img');
   * const img = new Unit('img', 'class1');
   * const img = new Unit('img', ['class1', 'class2', 'class3']);
   * const img = new Unit('img', 'class1', 'class2', 'class3');
   */
  constructor(tag, CSSClass = '', ...otherClass) {
    this.subscriptions = [];
    this.unit = document.createElement(tag);
    if (CSSClass) this.addClass(CSSClass);
    if (otherClass.length) this.addClass(otherClass);
  }

  /**
   * add CSS class to unit
   * @param {(string|string[])} className adding class(es)
   */
  addClass = (className) => {
    if (Array.isArray(className)) {
      this.unit.classList.add(...className);
    } else {
      this.unit.classList.add(className);
    }
  };

  /**
   * Remove CSS class from unit
   * @param {(string|string[])} className removing class(es)
   */
  rmClass = (className) => {
    if (Array.isArray(className)) {
      this.unit.classList.remove(...className);
    } else {
      this.unit.classList.remove(className);
    }
  };

  /**
   * Add attributes to tag
   * @param {object} attrObj - The object that containing attributes
   *
   * @example
   * img.addAttr({
   *  id: 'myImg',
   *  src: '/some/path/img.jpg',
   *  required: true,
   * })
   */
  addAttr = (attrObj) => {
    Object.keys(attrObj).forEach((attr) => {
      this.unit[attr] = attrObj[attr];
    });
  };

  /**
   * Remove attributes from tag
   * @param {(string|string[])}
   */
  rmAttr = (attrArr) => {
    if (Array.isArray(attrArr)) {
      attrArr.forEach((attr) => {
        this.unit.removeAttribute(attr);
      });
    } else {
      this.unit.removeAttribute(attrArr);
    }
  };

  /**
   * Add dataset-attributes to tag
   * @param {object} data - The object that containing dataset-attributes
   * @example
   * img.addDataset({
   *  name: 'John',
   *  dateOfBirth: '2000-10-10',
   * })
   */
  addDataset = (data) => {
    Object.keys(data).forEach((key) => {
      this.unit.dataset[key] = data[key];
    });
  };

  setInnerText = (text) => {
    this.unit.innerText = text;
  };

  /**
   * Inserts nodes after the last child of node.
   * @param {(string|Node)[]} nodes
   */
  append = (...nodes) => {
    if (Array.isArray(nodes)) {
      this.unit.append(...nodes);
    } else {
      this.unit.append(nodes);
    }
  };

  /**
   * Delete all node's children
   */
  clearChildren = () => {
    this.unit.innerHTML = '';
  };

  /**
   * Appends an events listener for tag
   * @param {string} event - type of event
   * @param {Function} func - the callback that will be invoked when the event is dispatched
   */
  subscribe = (event, func) => {
    this.subscriptions.push([event, func]);
    this.unit.addEventListener(event, func);
  };

  /**
   * Removes the event listener from tag with the same type and callback.
   * @param {string} event- type of event to delete
   * @param {Function} func - the callback that will be deleted
   */
  unsubscribe = (event, func) => {
    for (let i = 0; i < this.subscriptions.length - 1; i += 1) {
      const element = this.subscriptions[i];

      if (event === element[0] && func === element[1]) {
        this.unit.removeEventListener(event, func);
        this.subscriptions.splice(i, 1);
        i -= 1;
      }
    }
  };
}
