import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export async function createApp() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // middlewares
  const logger = app.get(Logger);
  app.useLogger(logger); // Logger from pino

  // versioning
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
    prefix: 'api/v',
  });

  // swagger documentation
  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('NestJS API')
    .setVersion('1.0')
    .build();
  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  return app;
}
