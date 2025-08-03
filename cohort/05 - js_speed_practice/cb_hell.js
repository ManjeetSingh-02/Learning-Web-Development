import fs from "fs";

// callback hell
function cbHell() {
  fs.readFile("./hello.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      fs.writeFile("./backup.txt", data, (err) => {
        if (err) {
          console.log(err);
        } else {
          fs.unlink("./hello.txt", (err) => {
            if (err) {
              console.log(err);
            }
          });
        }
      });
    }
  });
}

cbHell();

// to resolve callback hell we can use promises
