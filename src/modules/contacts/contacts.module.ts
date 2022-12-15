import { ContactsResolver } from './contacts.resolver'
import { ContactsService } from './contacts.service'
import { ContactSchema } from './schemas/task.schema'

import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Contact', schema: ContactSchema }])
  ],
  providers: [ContactsResolver, ContactsService]
})
export class ContactsModule {}
