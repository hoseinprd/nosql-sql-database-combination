/* eslint-disable @typescript-eslint/naming-convention */

export interface EnvironmentVariables {
  NODE_ENV: 'development' | 'production' | 'test';
  PORT: number;
  DATABASE_URL: string;
  INTROSPECTION_ENABLED: boolean;
}
