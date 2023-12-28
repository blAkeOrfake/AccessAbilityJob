/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { IEnvironment } from './environment/env.interface';

async function bootstrap() {
  const fastifyOptions: ConstructorParameters<typeof FastifyAdapter>[0] = {
    logger: true,
  };
  const fastifyAdapter = new FastifyAdapter(fastifyOptions);
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastifyAdapter);
  
  const config: ConfigService = app.get(ConfigService);
  const globalPrefix = config.get<IEnvironment['globalApiPrefix']>('globalPrefix') ?? 'api';
  app.setGlobalPrefix(globalPrefix)
  setupOpenApi(app);

  // const port = process.env.PORT || 3000;
  const port = (config.get<IEnvironment['port']>('port') ?? process.env.PORT) || 3000;

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();

function setupOpenApi(app: INestApplication) {
  const config = new DocumentBuilder().setTitle('API Documentation').setVersion('1.0').addTag('api').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

