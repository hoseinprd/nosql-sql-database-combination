import { Injectable } from '@nestjs/common';

import { UserRepository } from '../models';
import type { RepositoryAbstractAsDataService } from '../repository.abstract';

@Injectable()
export class RepositoryService implements RepositoryAbstractAsDataService {
  users: UserRepository;

  constructor(users: UserRepository) {
    this.users = users;
  }
}
