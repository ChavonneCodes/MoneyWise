//starts the backend server and listens for incoming requests on the specified port, logging a message to the console when the server is running.
import { app } from './app';
import { env } from '../config/env';

//listen to the port in env and once it has started listining successfully log and give confirmation our backend has started successfully.
app.listen(env.port, () => {
  console.log(`MoneyWise API running on http://localhost:${env.port}`);
});