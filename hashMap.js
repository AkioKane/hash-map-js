export class HashMap {
  constructor(tableSize = 16) {
    this.table = new Array(tableSize).fill(null);
    this.tableSize = tableSize;
    this.loadFactor = 0.75;
  }

  load() {
    const length = this.length();

    if (length / this.table.length >= this.loadFactor) {
      this.tableSize = this.tableSize * 2;
      const oldTable = [...this.table];
      this.table = oldTable.concat(new Array(this.tableSize).fill(null));
    }

    return;
  }

  length() {
    let counter = 0;

    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== null) {
        counter++;
      }
    }

    return counter;
  }

  hash(key) {
    let hashCode = 0;

    const primaryNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primaryNumber * hashCode + key.charCodeAt(i)) % this.table.length;
    }

    return hashCode;
  }

  set(key, value) {
    this.load()
    const index = this.hash(key);

    if (index < 0 || index >= this.table.length) {
      throw new Error("Tryind to acess index out of bound");
    }
    
    this.table[index] = value;

    console.log(`Index: ${index} ${this.table[index]}`)
  }

  get(key) {
    if (key < 0 || key >= this.table.length) {
      throw new Error("Trying to acces index out of bound");
    }

    if (key !== null) {
      return this.table[key];
    }
    return null;
  }

  has(key) {
    if (key < 0 || key >= this.table.length) {
      throw new Error("Trying to acces index out of bound");
    }

    if (this.table[key] !== null) {
      return true;
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);

    if (this.table[index] !== null) {
      this.table[index] = null;
      return true;
    }
    return false;
  }

  clear() {
    return this.table = new Array(16).fill(null);
  }

  keys() {
    const keys = [];

    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== null) {
        keys.push(i);
      }
    }
    return keys;
  }

  values() {
    const values = [];

    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== null) {
        values.push(this.table[i]);
      }
    }
    return values;
  }

  entries() {
    const entries = [];

    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== null) {
        let arr = [i, this.table[i]]
        entries.push(arr)
      }
    }
    return entries;
  }
}

// const map = new HashMap();
// map.set("cat", "love fish");
// map.set("dogs", "love bounds");
// map.set("a", "frank");
// map.set("Carlos", "I am the old value");
// map.set("Carlos", "I am the new value");

// map.remove("cat");
// console.log(map.table);
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());
// console.log(map.get(7))
// console.log(map.has(6))