const http = require("http");

class MyExpress {
  constructor() {
    this._nodeServer = http.createServer(this.handlerFn);
  }

  handlerFn(req, res) {
    switch (req.method) {
        case "GET":
            this.getCallPr(req.url, )
        break;
      case "POST":
        {
          if (req.url === "/") res.end("GET Home");
          if (req.url === "/about") res.end("GET About");
        }
        break;
    }
  }

  getCallPr(route, callBackFn) {}
  postCallPr(route, callBackFn) {}
  suno(port, callBackFn) {
    this._nodeServer.listen(port, callBackFn);
  }
}

const app = new MyExpress();

module.exports = {
  app,
};
