export interface GenericRepository<T> {
  findOne: (query: any, projection?: any) => Promise<T | null>;
  findAll: () => Promise<T[]>;
}
