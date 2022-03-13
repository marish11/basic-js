const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: '',

  getLength() {
    return this.result.split('~~').length;
  },

  addLink(value) {
    if (value === '') {
      if (this.result.length === 0) {
        this.result += `( )`;
      } else {
        this.result += `~~( )`;
      }
    }

    if (this.result.length === 0) {
      this.result += `( ${value} )`;
    } else {
      this.result += `~~( ${value} )`;
    }

    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position % 1 || position > this.getLength() || position <= 0) {
      this.result = '';
      throw new Error("You can't remove incorrect link!");
    }

    this.result = this.result.split('~~');
    this.result.splice(position - 1, 1);
    this.result = this.result.join('~~');
    return this;
  },

  reverseChain() {
    this.result = this.result.split('~~').reverse().join('~~');
    return this;
  },
  
  finishChain() {
    let chain = this.result;
    this.result = '';
    return chain;
  }
};

module.exports = {
  chainMaker
};
