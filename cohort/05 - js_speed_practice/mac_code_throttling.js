const f1 = (fn, delay) => {
  let myId = null;

  return (...args) => {
    if (myId === null) {
      fn(...args);
      myId = setTimeout(() => (myId = null), delay);
    }
  };
};

const x = f1(() => console.log("hi"), 3000);
x();
x();
x();
