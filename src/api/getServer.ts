import axios from 'axios';
import { Server } from '../types';
import addressFormat from '../utils/addressFormat';
import 'dotenv/config';

const url = process.env.MASTER_URL as string;

async function getServer(ip: string): Promise<Server> {
  try {
    const result = await axios.get(url);
    const servers = result.data.servers;

    const foundServer = servers.find((server: Server) => {
      const serverIp = addressFormat(server.addresses[0]);
      if (serverIp === ip) {
        return true;
      }
      return false;
    });

    return foundServer;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting servers');
  }
}

export default getServer;
