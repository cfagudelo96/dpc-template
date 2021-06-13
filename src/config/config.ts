import * as dotenv from 'dotenv';
import * as fs from 'fs';

if (!fs.existsSync(`.env`)) {
  console.error("The environment file wasn't found");
  process.exit(1);
}

dotenv.config({ path: `.env` });

export const DISCORD_BOT_TOKEN = process.env['DISCORD_BOT_TOKEN'];
