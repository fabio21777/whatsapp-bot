import { Injectable } from '@nestjs/common';

@Injectable()
export class BotService {
  private client;

  constructor() {
    //venom.create().then((client) => this.start(client));
  }

  private start(client) {
    this.client = client;

    this.client.onMessage((message) => {
      if (message.body === 'Oi') {
        this.client.sendText(
          message.from,
          'Olá! Este é um bot criado usando Venom-bot e NestJS.',
        );
      }
    });
  }
}
