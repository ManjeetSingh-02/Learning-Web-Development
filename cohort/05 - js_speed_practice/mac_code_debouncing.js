// function(parent) returning a function(child) is called a higher order function
// this concept is called closure where returned function has access to the variables of the parent function

function f1(fn, delay) {
  let myId = null;
  return function (...args) {
    clearTimeout(myId);
    myId = setTimeout(() => fn.apply(this, args), delay);
  };
}

function greet(msg) {
  console.log(msg);
}

const x = f1((msg) => greet(msg), 3000);

x(1);
x(2);
x(3);
x(4);
