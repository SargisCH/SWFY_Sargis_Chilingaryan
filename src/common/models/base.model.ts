import { Field, ObjectType } from '@nestjs/graphql';
import { Expose } from 'class-transformer';

@ObjectType()
export abstract class BaseModel {
  @Field({ nullable: true, name: 'created_at' })
  @Expose({ name: 'createdAt', toPlainOnly: true })
  createdAt?: Date;

  @Field({ nullable: true, name: 'updated_at' })
  @Expose({ name: 'updatedAt', toPlainOnly: true })
  updatedAt?: Date;

  @Field({ nullable: true, name: 'deleted_at' })
  @Expose({ name: 'deletedAt', toPlainOnly: true })
  deletedAt?: Date;
}
