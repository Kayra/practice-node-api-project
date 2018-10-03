import { Request, Response } from "express";

import { ContactController } from "./controllers";


export class Routes {

  public contactController: ContactController = new ContactController();

  public routes(app): void {

    app.route('/')
    .get((request: Request, response: Response) => {
      response.status(200).send({
        message: "GET request for the index page successful."
      })
    })

    app.route('/contact')

    .get((request: Request, response: Response) => {
      response.status(200).send({
        message: "This is the GET endpoint for contacts."
      })
    })

    .post(this.contactController.addNewContact)

    .put((request: Request, response: Response) => {
      response.status(200).send({
        message: "This is the PUT endpoint for contacts."
      })
    })

    .delete((request: Request, response: Response) => {
      response.status(200).send({
        message: "This is the DELETE endpoint for contacts."
      })
    })

  }

}