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
    .get(this.contactController.getContacts)
    .post(this.contactController.addNewContact)

    app.route('/contact/:contactId')
    .get(this.contactController.getContact)
    .put(this.contactController.updateContact)
    .delete(this.contactController.deleteContact)

  }

}