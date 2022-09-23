import { Injectable } from '@nestjs/common';

import { RepositoryService } from './common/repository/services/repository.service';

@Injectable()
export class AppService {
  constructor(private readonly repository: RepositoryService) {}

  async findUserById({ name }: any) {
    const user = await this.repository.users.findOne({ name });
  }
}
