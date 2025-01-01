// src/logger.module.ts
import { Module, DynamicModule } from '@nestjs/common';
import { CustomLogger, LoggerOptions } from './logger.service';

@Module({})
export class DynamicLoggerModule {
  static register(options: LoggerOptions): DynamicModule {
    return {
      module: DynamicLoggerModule,
      providers: [
        {
          provide: CustomLogger,
          useValue: new CustomLogger(options),
        },
      ],
      exports: [CustomLogger],
    };
  }
}
