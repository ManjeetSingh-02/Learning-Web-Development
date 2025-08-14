import fs from "fs";

// promisification - wrapping inside a promise
function readFilePromise(filePath, encoding) {
  return new Promise((res, rej) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) rej(err);
      else res(data);
    });
  });
}

function writeFilePromise(filePath, data) {
  return new Promise((res, rej) => {
    fs.writeFile(filePath, data, (err) => {
      if (err) rej(err);
      else res();
    });
  });
}

function deleteFilePromise(filePath) {
  return new Promise((res, rej) => {
    fs.unlink(filePath, (err) => {
      if (err) rej(err);
      else res();
    });
  });
}

readFilePromise("hello.txt", "utf-8")
  .then((data) => writeFilePromise("backup.txt", data))
  .then(() => deleteFilePromise("hello.txt"))
  .catch((err) => console.log(err));
