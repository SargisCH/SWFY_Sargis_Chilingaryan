import { Field, FieldOptions, InputType } from '@nestjs/graphql';
import { CreateClientArgs } from './create.client.args';

@InputType()
export class UpdateClientArgs extends CreateClientArgs {
  @Field(() => String, {} as FieldOptions<string>)
  id: string;
}
