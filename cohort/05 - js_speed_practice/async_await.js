import fs from "fs";

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

function wait(seconds) {
  return new Promise((resolve, rej) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
}

async function test() {
  try {
    // await readFilePromise("hello.txt", "utf-8") === readFilePromise("hello.txt", "utf-8")

    const fileContent = await readFilePromise("hello.txt", "utf-8");
    await writeFilePromise("backup.txt", fileContent);
    await wait(5);
    await deleteFilePromise("hello.txt");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Done");
  }
}
test();
