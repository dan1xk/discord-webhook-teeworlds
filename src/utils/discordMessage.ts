import axios from 'axios';
import 'dotenv/config';

const webhook: string | undefined = process.env.DISCORD_WEBHOOK;

async function discordMessage(content: any): Promise<void> {
  if (!webhook) {
    throw new Error('Discord webhook URL not found in .env');
  }
  try {
    await axios.post(webhook, content);
  } catch (error) {
    console.error('Error sending message to Discord:', error);
    throw new Error('Failed to send message to Discord.');
  }
}

export default discordMessage;
