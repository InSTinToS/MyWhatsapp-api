import { WhatsappResolver } from './whatsapp.resolver'
import { WhatsappService } from './whatsapp.service'

import { Module } from '@nestjs/common'

@Module({
  providers: [WhatsappResolver, WhatsappService]
})
export class WhatsappModule {}
