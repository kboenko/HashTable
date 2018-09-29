class HashTable {

  constructor() {
    this.size = 19;
    this.step = 3;
    this.storage = {};
  }

  getHashFunction(item) {
    let hash = 0;
    for (let i = 0; i < item.length; i++) {
      hash = (hash << 5) - hash + item.charCodeAt(i); // алгоритм djb2
      hash = hash >>> 0;  // преобразование в 32-битное беззнаковое целое число
    }
    return Math.abs(hash % this.size) + 1;
  }

  seekSlot(item) {

    let slot = this.getHashFunction(item);
    let count = 0;

    if (this.storage[slot]) {
      do {

        slot = this.doSteps(slot, count);

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

  doSteps(slot, count) {
    slot += this.step;
    count ++;

    if (slot > this.size) {
      slot -= this.size;
    }

    if (count === this.size) {
      return 'Slot not found'
    }

    return slot;
  }

  find(item) {
    if (this.storage[this.getHashFunction(item)] && this.storage[this.getHashFunction(item)] === item) {
      return this.getHashFunction(item);
    } else if (this.storage[this.getHashFunction(item)] && this.storage[this.getHashFunction(item)] !== item) {

      let count = 0;
      let slot = this.getHashFunction(item);

      do {

        slot = this.doSteps(slot, count);

      } while (this.storage[slot] !== item);

      return slot;
    } else {
      return 'Элемент не найден'
    }
  }


}

module.exports = HashTable;