import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { ClientModel } from './models/client.model';
import { UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from '../common/exception/handler';
import { ClientService } from './client.service';
import {
  CreateClientFailure,
  CreateClientSuccess,
  CreateClientUnion,
} from './models/create/create.client.model';
import { CreateClientArgs } from './dto/create.client.args';
import { ClientNotFoundException } from '../common/exception/client.exception';
import { GetClientByIdArgs } from './dto/get.client.args';
import {
  GetClientFailure,
  GetClientsSuccess,
  GetClientSuccess,
  GetClientsUnion,
  GetClientUnion,
} from './models/getById/get.client';
import {
  UpdateClientFailure,
  UpdateClientSuccess,
  UpdateClientUnion,
} from './models/create/update.client.model';
import { UpdateClientArgs } from './dto/update.client.args';
import {
  DeleteClientFailure,
  DeleteClientSuccess,
  DeleteClientUnion,
} from './models/create/delete.client.model';
import { DeleteClientArgs } from './dto/delete.client.args';
import { PaginationArgs } from './dto/pagination.args';

@Resolver(() => ClientModel)
export class ClientResolver {
  constructor(private readonly service: ClientService) {}

  @Query(() => GetClientsUnion)
  @UseFilters(new HttpExceptionFilter(GetClientFailure))
  public async getClients(
    @Args('pagination', { type: () => PaginationArgs })
    pagination: PaginationArgs,
  ) {
    try {
      const { page, limit } = pagination;
      const data = await this.service.findWithPagination(page, limit);
      if (data.clients.length > 0) {
        return new GetClientsSuccess(data);
      }
      throw new ClientNotFoundException();
    } catch (e) {
      return new GetClientFailure({ message: e.message });
    }
  }

  @Query(() => GetClientUnion)
  @UseFilters(new HttpExceptionFilter(GetClientFailure))
  public async getClient(
    @Args('args', { type: () => GetClientByIdArgs }) args: GetClientByIdArgs,
  ) {
    try {
      const data = await this.service.findById({
        id: args.id,
      });

      if (data) {
        return new GetClientSuccess(data);
      }
      throw new ClientNotFoundException();
    } catch (e) {
      return new GetClientFailure({ message: e.message });
    }
  }

  @UseFilters(new HttpExceptionFilter(CreateClientFailure))
  @Mutation(() => CreateClientUnion)
  public async createClient(
    @Args('args', { type: () => CreateClientArgs }) args: CreateClientArgs,
  ) {
    try {
      const data = await this.service.create(args);

      if (data) {
        return new CreateClientSuccess(data);
      }

      throw new ClientNotFoundException();
    } catch (e) {
      return new CreateClientFailure({ message: e.message });
    }
  }
  @UseFilters(new HttpExceptionFilter(UpdateClientFailure))
  @Mutation(() => UpdateClientUnion)
  public async updateClient(
    @Args('args', { type: () => UpdateClientArgs }) args: UpdateClientArgs,
  ) {
    try {
      const data = await this.service.updateById(args);

      if (data) {
        return new UpdateClientSuccess(data);
      }

      throw new ClientNotFoundException();
    } catch (e) {
      return new UpdateClientFailure({ message: e.message });
    }
  }
  @UseFilters(new HttpExceptionFilter(DeleteClientFailure))
  @Mutation(() => DeleteClientUnion)
  public async deleteClient(
    @Args('args', {
      type: () => DeleteClientArgs,
    })
    args: DeleteClientArgs,
  ) {
    try {
      await this.service.deleteById(args.id);
      return new DeleteClientSuccess();
    } catch (e) {
      return new UpdateClientFailure({ message: e.message });
    }
  }
}
