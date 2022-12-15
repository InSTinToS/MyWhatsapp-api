import { Inject, Injectable } from '@nestjs/common'

import WAWebJS, { Buttons, Client, List } from 'whatsapp-web.js'

const worldCupButtons = (client: Client, to?: WAWebJS.Message['from']) => {
  client.sendMessage(
    to,
    new Buttons(
      'Copa do mundo 2026!',
      [
        { id: '1', body: '✅ Com certeza!!' },
        { id: '2', body: '❌ Não, Só em 2030 😞' }
      ],
      'Brasil será hexa em 2026?',
      'Hexa?'
    )
  )
}

const worldCupList = (client: Client, to?: WAWebJS.Message['from']) => {
  const sections = [
    {
      title: 'Escolha a seleção vencedora de 2022!',
      rows: [
        { title: 'França', description: 'De Mbappé' },
        { title: 'Argentina', description: 'De Messi' },
        { title: 'Brasil', description: 'Em nossos sonhos' }
      ]
    }
  ]

  const list = new List(
    'Quem vencerá a copa do mundo?',
    'Escolher',
    sections,
    'Copa do mundo!'
  )

  client.sendMessage(to, list)
}

@Injectable()
export class WhatsappService {
  constructor(
    @Inject('WhatsAppClient')
    private whatsClient: Client
  ) {}

  async listenWhatsapp() {
    this.whatsClient.on('qr', qr => {
      console.log(qr)
    })

    this.whatsClient.on('ready', async () => {
      console.log('WhatsApp Ready')
    })

    this.whatsClient.on('message', message => {
      switch (message.body) {
        case '!copa': {
          worldCupList(this.whatsClient, message.from)
          worldCupButtons(this.whatsClient, message.from)

          break
        }

        case 'ping': {
          this.whatsClient.sendMessage(message.from, 'pong')

          break
        }

        default:
          break
      }
    })

    this.whatsClient.initialize()

    return { listening: true }
  }

  async stopListenWhatsapp() {
    await this.whatsClient.destroy()

    return { listening: false }
  }
}
