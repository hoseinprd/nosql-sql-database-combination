import { getModelToken } from '@nestjs/mongoose';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';

import { UserRepository } from '../models';
import { User } from '../models/users/schema/user.schema';
import { RepositoryService } from './repository.service';

describe('RepositoryService', () => {
  let service: RepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RepositoryService,
        UserRepository,
        {
          provide: getModelToken(User.name),
          useValue: jest.fn(),
        },
      ],
    }).compile();

    service = module.get<RepositoryService>(RepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
