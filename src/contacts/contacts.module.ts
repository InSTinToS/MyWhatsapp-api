import { Module } from '@nestjs/common'
import { ContactsService } from './contacts.service'
import { ContactsResolver } from './contacts.resolver'
import { ContactSchema } from './schemas/task.schema'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Contact', schema: ContactSchema }])
  ],
  providers: [ContactsResolver, ContactsService]
})
export class ContactsModule {}
