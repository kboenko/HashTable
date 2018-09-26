const stringHash = require('string-hash');

class HashTable {

  constructor() {
    this.size = 19;
    this.step = 3;
    this.storage = {};
  }

  getHashFunction(item) {
    return stringHash(item);
  }

  seekSlot(item) {

  }

  put(item) {
    if (Object.keys(this.storage).length >= 0 && Object.keys(this.storage).length < this.size) {
      this.storage[this.getHashFunction(item)] = item;
    }

  }

  find(item) {
    if (this.storage[this.getHashFunction(item)]) {
      return this.getHashFunction(item);
    } else {
      return 'Элемент не найден'
    }
  }


}

module.exports = HashTable;