import { Hono } from "hono";
import routeloader from "./src/config/loaders/routeloader";

class App {
  public app: Hono
  public port: number = 3080

  constructor() {
    this.app = new Hono();
    routeloader(this.app);
  }
}

const server = new App()
export default {
  port: server.port, 
  fetch: server.app.fetch 
}

console.log("(√) your app running on http://localhost" + server.port);