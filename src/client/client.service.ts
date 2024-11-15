import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateClientArgs } from './dto/create.client.args';
import { ClientModel } from './models/client.model';
import { plainToInstance } from 'class-transformer';
import { ClientEntity } from 'src/database/postgres/entities';
import { UpdateClientArgs } from './dto/update.client.args';

@Injectable()
export class ClientService {
  private clientRepository = this.dataSource.getRepository(ClientEntity);
  constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) {}

  async findWithPagination(page: number, limit: number) {
    const [clients, total] = await this.clientRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      clients: clients.map((client) => plainToInstance(ClientModel, client)),
      pagination: {
        total,
        page,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  public async findById({ id }: { id: string }) {
    const clientData = await this.clientRepository.findOne({
      where: { id },
      relations: ['invoices'],
    });
    return plainToInstance(ClientModel, clientData);
  }

  public async create(args: CreateClientArgs) {
    const client = {
      ...args,
    };
    const clientData = this.clientRepository.create(client);
    const insertRes = await this.clientRepository.insert(clientData);
    const clientReturned = await this.clientRepository.findOneBy({
      id: insertRes.raw[0].id,
    });
    return plainToInstance(ClientModel, clientReturned);
  }

  public async updateById(updateClientArgs: UpdateClientArgs) {
    await this.clientRepository.update(
      { id: updateClientArgs.id },
      { ...updateClientArgs, id: undefined },
    );

    const clientDataUpdated = await this.clientRepository.findOneBy({
      id: updateClientArgs.id,
    });

    return plainToInstance(ClientModel, clientDataUpdated);
  }
  public async deleteById(id: string) {
    await this.clientRepository.delete({ id });
  }
}
