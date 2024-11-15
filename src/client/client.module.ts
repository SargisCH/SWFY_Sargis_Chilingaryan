import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientResolver } from './client.resolver';
import { DatabaseModule } from 'src/database/postgres/modules/postgress.database';

@Module({
  imports: [DatabaseModule],
  providers: [ClientService, ClientResolver],
})
export class ClientModule {}
