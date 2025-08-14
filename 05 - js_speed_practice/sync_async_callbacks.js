import fs from "fs";

fs.readFile("./hello.txt", "utf8", (err, data) => {
  console.log("ASYNC");
  if (err) console.log(err);
  else console.log(data);
});

const fileContents = fs.readFileSync("./hello.txt", "utf8"); // blocking code other code will not run until this line is executed
console.log("SYNC");
console.log(fileContents);

function sum1(a, b) {
  return a + b;
}
console.log("s1", sum1(1, 2));

function sum2(a, b, cb) {
  cb(a + b);
}
sum2(1, 2, (res) => console.log("s2", res));
