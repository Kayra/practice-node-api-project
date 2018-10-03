import { Request, Response } from "express";


export class Routes {

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
    .post((request: Request, response: Response) => {
      response.status(200).send({
        message: "This is the POST endpoint for contacts."
      })
    })
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