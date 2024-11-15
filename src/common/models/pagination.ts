import { ObjectType } from '@nestjs/graphql';

import {
  IPagination,
  IPaginationOptions,
} from '../interfaces/pagination.interface';

@ObjectType({
  implements: () => [IPagination],
})
export class Pagination extends IPagination {
  constructor(options?: IPaginationOptions) {
    super(options);
  }
}
