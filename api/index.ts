import * as http from "http";
import App from "./app";
import { Logger } from "./logger/logger";

const PORT = 3000;

App.set("port", PORT);
const server = http.createServer(App);
server.listen(PORT);

const logger = new Logger();

server.on("listening", function (): void {
  const addr = server.address();
  const port = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  logger.info(`Listening on ${port}`);
});

module.exports = App;
