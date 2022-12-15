import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class CreateContactInput {
  @Field(() => String)
  name: string

  @Field(() => Int)
  phone: number

  @Field(() => Boolean)
  whatsapp: boolean
}
