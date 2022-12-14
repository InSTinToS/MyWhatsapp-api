import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { AppController } from './app.controller'

import { ContactsModule } from './contacts/contacts.module'
import { MongooseModule } from '@nestjs/mongoose'

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
    ContactsModule
  ],
  providers: [],
  controllers: [AppController]
})
export class AppModule {}
