import * as mongoose from "mongoose";
import { Request, Response } from "express";

import { ContactSchema } from "./models";


const Contact = mongoose.model("Contact", ContactSchema);

const returnJsonContactOrError = (response, error, contactObject) => {
  error ? response.send(error) : response.json(contactObject);
}

export class ContactController {

  public getContacts(request: Request, response: Response) {

    Contact.find({}, (error, contact) => {
      returnJsonContactOrError(response, error, contact);
    });

  }

  public getContact(request: Request, response: Response) {

    Contact.findById(request.params.contactId, (error, contact) => {
      returnJsonContactOrError(response, error, contact);
    })

  }

  public addNewContact(request: Request, response: Response) {

    let newContact = new Contact(request.body);

    newContact.save((error, contact) => {
      returnJsonContactOrError(response, error, contact); 
    });

  }

  public updateContact(request: Request, response: Response) {

    Contact.findOneAndUpdate({ _id: request.params.contactId }, request.body, { new: true }, (error, contact) => { 
      returnJsonContactOrError(response, error, contact);
    });

  }

  public deleteContact(request: Request, response: Response) {

    Contact.deleteOne({ _id: request.params.contactId }, (error, contact) => {
      returnJsonContactOrError(response, error, { "message": "Successfully deleted contact with ID: " + request.params.contactId });
    });

  }

}
