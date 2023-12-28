import { IEnvironment } from './env.interface';

export const env: Partial<IEnvironment> = {
  production: false,
  globalApiPrefix: 'api',
  port: 3000,
  baseUrl: 'http://localhost',
  database: {
    host: 'localhost',
    port: 5432,
    database: 'jobboard',
    username: 'postgres',
    password: 'postgres',
  },
};