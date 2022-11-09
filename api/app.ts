import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { Logger } from "./logger/logger";
import Routes from "./routes/routes";
import progressive from "./scripts/progressive";

class App {
  public express: express.Application;

  public logger: Logger;

  private corsOptions = {
    origin: "http://localhost:8080",
  };

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.logger = new Logger();
  }

  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(cors(this.corsOptions));
  }

  private routes(): void {
    this.express.get("/healthcheck", (req, res, next) => {
      this.logger.info(req.url);
      res.send("I'm healthy!");
    });

    // this.express.use("/api", Routes);

    this.express.get("/api/carriers", (req, res, next) => {
      this.logger.info(req.url);
      res.send([{ id: 1, name: "Progressive" }]);
    });

    this.express.post("/api/carriers/:id/login", (req, res, next) => {
      const { username, password, url } = req.body;
      this.logger.info(req.url);
      progressive(url, username, password);
      res.send("Success!");
    });
  }
}

export default new App().express;
