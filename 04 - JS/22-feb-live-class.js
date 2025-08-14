console.log(Math.random() * 6 + 1);
let message = "Hello World";

console.log(message.length);
console.log(message.toUpperCase());
console.log(message.indexOf("World"));
console.log(message.slice(0, 5));

if (!String.prototype.myIndexOf) {
  String.prototype.myIndexOf = function (element) {
    for (let i = 0; i < this.length; i++) {
      if (element[0] === this[i]) {
        let found = true;
        for (let j = 1; j < element.length; j++) {
          if (element[j] !== this[i + j]) {
            found = false;
            break;
          }
        }
        if (found) return i;
      }
    }
  };
}

console.log(message.myIndexOf("World"));

function check(v) {
  if (v) return "Truthy";
  else return "Falsy";
}

check(0);
check("0");
check("");
check(" ");
check([]);
check({});
check(NaN);
check(null);
check(undefined);
check(true);
check(false);
check(1);
check(-1);
check(Infinity);
check(-Infinity);
check(10 / 0);
check(10 / "a");
check(10 / "5");
check(10 / "0");
check(10 / " ");
check(10 / "");
check(10 / null);
check(10 / undefined);
check(10 / NaN);
check(10 / []);
check(10 / {});
check(10 / true);
check(10 / false);
check(10 / 1);
check(10 / -1);
check(10 / Infinity);
check(10 / -Infinity);
check(10 / 10);
check(10 / -10);
check(10 / 0);
check(10 / -0);

let userActivity = [
  { name: "A", count: 30 },
  { name: "B", count: 20 },
  { name: "C", count: 40 },
  { name: "D", count: 10 },
];
let mostactiveUser = userActivity.reduce((maxUser, user) => (maxUser.count > user.count ? maxUser : user));
console.log(mostactiveUser);
