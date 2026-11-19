//brings together all the different pieces
//central configuration of the Express application. Creates server application,registers middleware,defines routes and determines how requests are handled

//import dependencies
//framework used to build backend API
import express from 'express';
//controls which frontend origins are allowed to communicate with our backend
//CROSS ORIGIN RESOURCE SHARING
import cors from 'cors';
//adds security-related HTTP headers  to our responses
import helmet from 'helmet';
//access to environment configuration
import { env } from '../config/env';
//handles requests to routes that dont exitst
import { notFound } from '../middleware/notFound';
//centrally handles errors and sends responses
import { errorHandler } from '../middleware/errorHandler';

//create Express application
export const app = express();

//register middleware
//inspect or modify a request,perform some operation, pass control onwards or send a response
//helmet() creates its middleware and app,use() registers that middleware with Express
app.use(helmet());
//allow requests from the frontend origin specified in env.clientUrl
//without it browser can block Angular requests from accessing our backend responses because they come from different  origins
//security mechanism not authentication system.
app.use(cors({ origin: env.clientUrl }));
//read incoming JSON requet bodies from frontend and make the resulting JavaScript object abbailabe through req.body
//turns JSON to JavaScript object so we can access it in our route handlers
app.use(express.json());

//API ENDPOINT
app.get('/api/v1/health', (_req, res) => {
  //send JSON response with status ok and current timestamp in ISO format to indicate the server is running and healthy to whoever requested the endpoint.
  //makes JSON object from JavaScript object and sends it as response to whoever requested the endpoint.
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

//comes after routes so that if a request doesnt match any route, it will be handled by notFound middleware and then errorHandler middleware.
app.use(notFound);
app.use(errorHandler);