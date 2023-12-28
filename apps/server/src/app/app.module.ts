import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { OfferController } from './controllers/offer/offer.controller';
import { OfferService } from './controllers/offer/offer.service';
import { getEnvConfig } from '../environment/env-config';
import { envValidation } from '../environment/env-validator';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './typeorm/typeorm.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [getEnvConfig],
      isGlobal: true,
      cache: true,
      validate: envValidation,
    }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    UsersModule
  ],
  controllers: [
    AppController,
    OfferController
  ],
  providers: [
    AppService,
    OfferService
  ],
})
export class AppModule {}
