import type { UserRepository } from './models';

export abstract class RepositoryAbstractAsDataService {
  abstract users: UserRepository;
}
