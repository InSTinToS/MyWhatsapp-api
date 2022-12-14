import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateContactInput {
  @Field(() => String)
  name: string

  @Field(() => Int)
  phone: number
}
