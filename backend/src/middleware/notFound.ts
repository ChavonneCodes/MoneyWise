//handle situations where someone tries to access a route(URL) that doesnt exist in my backend

//Request-request coming  into our backend with URL,HTTP method(GET,POST,PUT,DELETE),any information sent in the request body, query parameters
//Response-response backend sends to whoever made the request
//NextFunction-Express processes requests through a sequence  of middleware functions. next() tells Expressto move on to the next middleware function. Can also pass an error to the next error-handling middleware.
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../shared/AppError';

//_res because we are not using the response object in this function.
//we are not sending the response directly, we are creating an error and passing it to the next middleware function. Constant error handling with central error handler.
//_ means parameter exists but we are intentionally not using it.
export function notFound(req: Request, _res: Response, next: NextFunction) {
  //req.method is what request method they used like GET or POST or PUT.
  //next says  something went wrong skip normal middleware and go to error haandling middleware.
  next(new AppError(404, 'NOT_FOUND', `Route ${req.method} ${req.originalUrl} not found`));
}