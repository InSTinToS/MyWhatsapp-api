import { whatsappClient } from './shared/whatsapp'

import { Global, Module } from '@nestjs/common'

@Global()
@Module({
  providers: [{ provide: 'WhatsAppClient', useValue: whatsappClient }],
  exports: ['WhatsAppClient']
})
export class GlobalModule {}
