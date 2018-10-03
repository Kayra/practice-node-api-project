import * as mongoose from "mongoose";
import { Request, Response } from "express";

import { ContactSchema } from "./models";


const Contact = mongoose.model("Contact", ContactSchema);

export class ContactController {

  public addNewContact(request: Request, response: Response) {

    let newContact = new Contact(request.body);

    newContact.save((error, contact) => {
      error ? response.send(error) : response.json(contact);
    });

  }

}
