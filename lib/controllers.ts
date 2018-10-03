import * as mongoose from "mongoose";
import { Request, Response } from "express";

import { ContactSchema } from "./models";


const Contact = mongoose.model("Contact", ContactSchema);

export class ContactController {

  private returnJsonContactOrError = (response, error, contactObject) => {
    return error ? response.send(error) : response.json(contactObject)
  }

  public getContacts(request: Request, response: Response) {

    Contact.find({}, (error, contact) => {
      this.returnJsonContactOrError(response, error, contact); 
    });

  }

  public getContact(request: Request, response: Response) {

    Contact.findbyId(request.params.contactId, (error, contact) => {
      this.returnJsonContactOrError(response, error, contact);
    })

  }

  public addNewContact(request: Request, response: Response) {

    let newContact = new Contact(request.body);

    newContact.save((error, contact) => {
      this.returnJsonContactOrError(response, error, contact); 
    });

  }

}
