import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import type { MockProxy } from 'jest-mock-extended';
import { mockDeep } from 'jest-mock-extended';

import { AppService } from './app.service';
import type { UserDocument } from './common/repository/models/users/schema/user.schema';
import { RepositoryService } from './common/repository/services/repository.service';

describe('AppService', () => {
  let service: AppService;
  let repository: MockProxy<RepositoryService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: RepositoryService,
          useFactory: () => mockDeep<RepositoryService>(),
        },
      ],
    }).compile();

    service = module.get<AppService>(AppService);
    repository = module.get(RepositoryService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('findUserById', () => {
    const mockDto = {
      name: 'John',
    };

    const mockUser = {
      name: 'John Doe',
    } as UserDocument;

    it('should be defined', () => {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(service.findUserById).toBeDefined();
    });

    it('should be called with', async () => {
      const test = jest
        .spyOn(service, 'findUserById')
        .mockResolvedValue(mockUser);

      await service.findUserById(mockDto);

      expect(test).toHaveBeenCalledWith(mockDto);
    });

    it('should throw an error: USER:NOT_FOUND', async () => {
      jest.spyOn(repository.users, 'findOne').mockResolvedValue(null);

      const user = service.findUserById(mockDto);

      await expect(user).rejects.toThrow('USER:NOT_FOUND');
    });

    it('should pass: return user', async () => {
      jest.spyOn(repository.users, 'findOne').mockResolvedValue(mockUser);

      const user = await service.findUserById(mockDto);

      expect(user).toEqual(mockUser);
    });
  });
});
