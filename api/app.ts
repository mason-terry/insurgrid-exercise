import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { Logger } from "./logger/logger";
import progressive from "./scripts/progressive";
import * as path from "path";

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
    this.express.get("/healthcheck", (req, res) => {
      this.logger.info(req.url);
      res.send("I'm healthy!");
    });

    this.express.get("/api/carriers", (req, res) => {
      this.logger.info(req.url);
      res.send([{ id: 1, name: "Progressive" }]);
    });

    this.express.post("/api/carriers/:id/login", async (req, res) => {
      const { username, password, url } = req.body;
      this.logger.info(req.url);
      const error = await progressive(url, username, password);
      if (error) {
        this.logger.error("Error logging in!");
        res.status(400);
      }
      const options = {
        root: path.join(__dirname),
      };
      res.sendFile("declaration-page.pdf", options);
    });
  }
}

export default new App().express;
