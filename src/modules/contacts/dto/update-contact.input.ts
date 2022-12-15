import { CreateContactInput } from './create-contact.input'

import { Field, InputType, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateContactInput extends PartialType(CreateContactInput) {
  @Field(() => String)
  id: string
}
