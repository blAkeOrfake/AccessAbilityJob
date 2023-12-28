import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { OfferController } from './controllers/offer/offer.controller';
import { OfferService } from './controllers/offer/offer.service';
import { getEnvConfig } from '../environment/env-config';
import { envValidation } from '../environment/env-validator';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [getEnvConfig],
      isGlobal: true,
      cache: true,
      validate: envValidation,
    })
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
