import getServer from './api/getServer';
import 'dotenv/config';

const ip = process.env.SERVER_IP as string;

(async function () {
  const server = await getServer(ip);

  //TODO: make the messages
  console.log(server);
})();
