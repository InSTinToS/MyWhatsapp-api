import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Whatsapp {
  @Field(() => Boolean)
  listening: boolean
}
