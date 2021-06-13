import { Client, Message, User } from 'discord.js';

import { DISCORD_BOT_TOKEN } from './config';

export class DiscordClient {
  private client: Client;

  constructor(messageHandler: (a: Message) => void) {
    this.client = new Client();
    this.setupListeners(messageHandler);
  }

  private setupListeners(messageHandler: (a: Message) => void) {
    this.client.on('ready', () => {
      console.log(`The bot ${this.client.user.username} has started!`);
    });
    this.client.on('message', messageHandler);
    this.client.login(DISCORD_BOT_TOKEN);
  }

  getBotUser(): User {
    return this.client.user;
  }
}
