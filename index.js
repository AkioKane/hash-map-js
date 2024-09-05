class HashMap {
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
      this.table = oldTable.concat(new Array(this.table).fill(null));
    }

    return;
  }

  length() {
    let counter = 0;

    for (i = 0; i < this.table.length; i++) {
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
      hashCode = primaryNumber * hashCode + key.charCodeAt(i)
    }
    
    return hashCode % this.table.length;
  }
  
  set(key, value) {
    const index = this.hash(key);
    console.log(index)

    if (index < 0 || index >= this.table.length) {
      throw new Error("Tryind to acess index out of bound");
    }

    this.table[index] = value;

    console.log(`Hashcode: ${index} \n arr[hashCode]: ${this.table[index]}`)
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
}

const map = new HashMap();
map.set("cat", "love fish");
map.set("dogs", "love bounds");
map.set("a", "frank");
map.set("Carlos", "I am the old value");
map.set("Carlos", "I am the new value");

console.log(map.table)
// console.log(map.get(7))
// console.log(map.has(6))