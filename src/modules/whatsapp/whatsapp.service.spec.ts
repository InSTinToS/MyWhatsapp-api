import { WhatsappService } from './whatsapp.service'

import { Test, TestingModule } from '@nestjs/testing'

describe('WhatsappService', () => {
  let service: WhatsappService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhatsappService]
    }).compile()

    service = module.get<WhatsappService>(WhatsappService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
