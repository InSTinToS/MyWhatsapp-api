import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Contact {
  @Field(() => String)
  id: string

  @Field(() => String)
  name: string

  @Field(() => Int)
  phone: number
}
