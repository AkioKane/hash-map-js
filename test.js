import { HashMap } from "./hashMap.js";

const test = new HashMap();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')

test.set("cat", "love fish");
test.set("dogs", "love bounds");
test.set("a", "frank");
test.set("Carlos", "I am the old value");
test.set("Carlos", "I am the new value");
test.set("ab", "frankies");

console.log(test.table);
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
console.log(test.get(7))
console.log(test.has(6))
console.log(test.length());