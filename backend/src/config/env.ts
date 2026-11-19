//store values such as port, nodeEnv, clientUrl in env object to be used throughout the application.
//no need to change code every time you deploy

//dotenv is a package thatt helps us read values from our .env files
import dotenv from 'dotenv';
//load environment variavles from .env file into process.env
dotenv.config();

//create an env object that collects all our configuration settings in one place
export const env = {
  //use those values loaded from .env file or use default values on right if not found
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 3000),
  clientUrl: process.env.CLIENT_URL ?? 'http://localhost:4200',
};