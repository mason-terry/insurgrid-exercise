import * as bodyParser from "body-parser";
import * as express from "express";
import { Logger } from "../logger/logger";

class Carriers {
  public express: express.Application;
  public logger: Logger;

  public carriers: any[];

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.carriers = [{ name: "Progressive"}];
    this.logger = new Logger();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    this.express.get("/carriers", (req, res, next) => {
      this.logger.info(req.url);
      res.json(this.carriers);
    });
  }
}

export default new Carriers().express;
