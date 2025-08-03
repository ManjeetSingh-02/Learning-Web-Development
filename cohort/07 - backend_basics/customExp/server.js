const { app } = require("./custom_express");

// function reqHandlerFn(req, res) {
  // switch (req.method) {
  //   case "GET":
  //     {
  //       if (req.url === "/") res.end("Home");
  //       if (req.url === "/about") res.end("About");
  //     }
  //     break;
  // }
// }
// const server = http.createServer(reqHandlerFn);
// server.listen(3000, function () {
//   console.log("Done");
// });

app.get("/", (req, res) => res.send("HOME"));
app.get("/about", (req, res) => res.send("ABOUT"));

app.suno(3000, function () {
  console.log("STARTED");
});
