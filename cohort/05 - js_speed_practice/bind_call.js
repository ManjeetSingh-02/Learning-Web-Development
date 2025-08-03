let p1 = {
  n: "abc",
  g: function () {
    console.log(this.n);
  },
};

let p2 = {
  n: "xyz",
};

p1.g(); // call the function `g` with `p1` as a context

p1.g.call(p2); // automatic call the function `g` with `p2` as a context

const fn = p1.g.bind(p2); // bind the function `g` with `p2` as a context
fn(); // call the binded function

p1.g.bind(p2)(); // bind the function `g` with `p2` as a context and call it automatically
