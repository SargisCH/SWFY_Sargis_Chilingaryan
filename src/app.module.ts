import { Module } from '@nestjs/common';
import { AppController } from './probe/app.controller';
import { AppService } from './probe/app.service';
import { GraphQLModule, registerEnumType } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { InvoiceModule } from './invoice/invoice.module';
import { ClientModule } from './client/client.module';
import { ErrorCode } from './common/enum/error.code';
import { DatabaseModule } from './database/postgres/modules/postgress.database';

registerEnumType(ErrorCode, {
  name: 'ErrorCode',
});
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    InvoiceModule,
    ClientModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
