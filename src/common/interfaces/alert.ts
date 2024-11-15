import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class Alert {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  name?: string;

  @Field()
  message: string;
}

export interface AlertOptions {
  message: string;
  id?: number;
  name?: string;
}

export interface ValidationResponse {
  alerts?: AlertOptions[];
  isError?: boolean;
}
