let p1 = {
  name: "A",
  age: 19,
};
let p2 = p1;
console.log(p1 === p2);
console.log(p1);
console.log(p2);
p2.age = 25;
console.log(p1 === p2);
console.log(p1);
console.log(p2);

let p3 = {
  name: p1.name,
  age: p1.age,
};
console.log(p1 === p3);
console.log(p1);
console.log(p3);

let p4 = { ...p1 };
console.log(p1 === p4);
console.log(p1);
console.log(p4);

let obj1 = {
  a: 1,
  b: 2,
  c: {
    c1: 1,
    c2: 2,
  },
};
let obj2 = {
  a: obj1.a,
  b: obj1.b,
  c: obj1.c,
};
console.log(obj1 === obj2);
console.log(obj1);
console.log(obj2);
obj2.a = 7;
console.log(obj1 === obj2);
console.log(obj1);
console.log(obj2);
obj2.c = 5;
console.log(obj1 === obj2);
console.log(obj1);
console.log(obj2);
// Spread operator - first level - Shallow Copy

const a1 = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
};
const str = JSON.stringify(a1);
const a2 = JSON.parse(str);
console.log(a1 === a2);
console.log(a1);
console.log(a2);
// all levels - Deep Copy