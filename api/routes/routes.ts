import * as bodyParser from "body-parser";
import * as express from "express";
import Carriers from "./carriers";

class Routes {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    this.express.use("/carriers", Carriers);
  }
}

export default new Routes().express;
