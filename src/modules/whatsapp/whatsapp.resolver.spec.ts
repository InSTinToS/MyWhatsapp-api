import { WhatsappResolver } from './whatsapp.resolver'
import { WhatsappService } from './whatsapp.service'

import { Test, TestingModule } from '@nestjs/testing'

describe('WhatsappResolver', () => {
  let resolver: WhatsappResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhatsappResolver, WhatsappService]
    }).compile()

    resolver = module.get<WhatsappResolver>(WhatsappResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
