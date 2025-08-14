import fs from "fs/promises";

// promise chaining
fs.readFile("./hello.txt", "utf8")
  .then((data) => fs.writeFile("./backup.txt", data))
  .then(() => fs.unlink("./hello.txt"))
  .then(() => console.log("done1"))
  .then(() => console.log("done2"))
  .then(() => console.log("done3"))
  .then(() => console.log("done4"))
  .then(() => console.log("done5"))
  .catch((err) => console.log(err))
  .finally(() => console.log("finally"));

// to resolve the promise hell, we can use async await
