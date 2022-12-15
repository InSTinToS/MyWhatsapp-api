import { Whatsapp } from './entities/whatsapp.entity'
import { WhatsappService } from './whatsapp.service'

import { Query, Resolver } from '@nestjs/graphql'

@Resolver(() => Whatsapp)
export class WhatsappResolver {
  constructor(private readonly whatsappService: WhatsappService) {}

  @Query(() => Whatsapp, { name: 'stopListenWhatsapp' })
  stopListenWhatsapp() {
    return this.whatsappService.stopListenWhatsapp()
  }

  @Query(() => Whatsapp, { name: 'listenWhatsapp' })
  listenWhatsapp() {
    return this.whatsappService.listenWhatsapp()
  }
}
