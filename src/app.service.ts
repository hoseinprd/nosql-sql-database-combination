import { BadRequestException, Injectable } from '@nestjs/common';

import { RepositoryService } from './common/repository/services/repository.service';

class UserDTO {
  constructor(public readonly name: string) {}
}

@Injectable()
export class AppService {
  constructor(private readonly repository: RepositoryService) {}

  async findUserById({ name }: UserDTO) {
    const user = await this.repository.users.findOne({ name });

    if (!user) throw new BadRequestException('USER:NOT_FOUND');

    return user;
  }
}
