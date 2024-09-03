class HashMap {
  constructor(tableSize = 16) {
    this.table = new Array(tableSize);
    this.tableSize = tableSize;
  }

  hash(key) {
    let hashCode = 0;

    const primaryNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primaryNumber * hashCode + key.charCodeAt(i)
    }
    
    return hashCode;
  }
}