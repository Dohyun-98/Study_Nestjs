import * as express from "express";
import CatsRouter from "./cats/cats.route";
const app: express.Express = express();
const port: number = 8000;

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(CatsRouter);
  }

  private setMiddeWare() {
    //* logging middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("this is logging middleware");
      next();
    });

    //* JSON middleware
    this.app.use(express.json());
    this.setRoute();
    //* 404 middleware
    this.app.use((req, res, next) => {
      console.log("this is error middleware");
      res.send({ error: "404 not found" }).status(404);
    });
  }
  public listen() {
    this.setMiddeWare();
    this.app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
