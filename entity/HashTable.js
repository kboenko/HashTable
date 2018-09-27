class HashTable {

  constructor() {
    this.size = 19;
    this.step = 3;
    this.storage = {};
  }

  getHashFunction(item) {
    return Buffer.byteLength(item, 'utf8') % this.size;
  }

  seekSlot(item) {

    let slot = this.getHashFunction(item);

    if (this.storage[slot]) {
      do {
        slot += this.step;

        if (slot > this.size) {
          slot -= this.size;
        }

      }
      while (this.storage[slot])
    }

    return slot;

  }

  put(item) {
    if (Object.keys(this.storage).length >= 0 && Object.keys(this.storage).length < this.size) {
      this.storage[this.seekSlot(item)] = item;
    }

  }

  find(item) {
    if (this.storage[this.getHashFunction(item)] && this.storage[this.getHashFunction(item)] === item) {
      return this.getHashFunction(item);
    } else if (this.storage[this.getHashFunction(item)] && this.storage[this.getHashFunction(item)] !== item) {

      let count = 0;
      let slot = this.getHashFunction(item);

      do {
          slot += this.step;
          count ++;

          if (count === this.size) {
            return 'Элемент не найден'
          }

      } while (this.storage[slot] !== item);

      return slot;
    } else {
      return 'Элемент не найден'
    }
  }


}

module.exports = HashTable;