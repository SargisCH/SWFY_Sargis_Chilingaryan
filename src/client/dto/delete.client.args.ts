import { Field, FieldOptions, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteClientArgs {
  @Field(() => String, {} as FieldOptions<string>)
  id: string;
}
