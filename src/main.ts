import { Message } from 'discord.js';

import { DiscordClient } from './config/client';

new DiscordClient(serverMessageHandler);

function serverMessageHandler(message: Message) {
  // TODO: Integrate bot and message handler
}
