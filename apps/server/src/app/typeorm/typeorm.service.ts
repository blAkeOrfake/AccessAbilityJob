import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { IEnvironment } from '../../environment/env.interface';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private config: ConfigService) {}

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    const db = this.config.get<IEnvironment['database']>('database') as IEnvironment['database'];
    const productionMode = this.config.get<IEnvironment['production']>('production') as IEnvironment['production'];
    return {
      type: 'postgres',
      host: db.host,
      port: db.port,
      database: db.database,
      username: db.username,
      password: db.password,
      migrations: ['dist/migrations/*.{ts,js}'],
      migrationsTableName: "custom_migration_table",
      logger: 'file',
      synchronize: !productionMode, // never use TRUE in production!
      autoLoadEntities: true,
    };
  }
}