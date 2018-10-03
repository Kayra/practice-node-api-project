import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes";


class App {

  public app: express.Application;
  public routePrv: Routes = new Routes();

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
  }

}

export default new App().app;
