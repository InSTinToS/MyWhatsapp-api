import { AppController } from './app.controller'
import { GlobalModule } from './global.module'
import { ContactsModule } from './modules/contacts/contacts.module'
import { WhatsappModule } from './modules/whatsapp/whatsapp.module'

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose'

import { join } from 'path'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    MongooseModule.forRoot(
      'mongodb+srv://user:9vXvDQhwfpzkGZ9s@cluster0.tbfgvgu.mongodb.net/?retryWrites=true&w=majority',
      { useNewUrlParser: true }
    ),
    GlobalModule,
    ContactsModule,
    WhatsappModule
  ],
  providers: [],
  controllers: [AppController]
})
export class AppModule {}
