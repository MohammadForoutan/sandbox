import { Module } from '@nestjs/common';
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino';
import { EnvModule, EnvService } from '../env';

@Module({
  imports: [
    PinoLoggerModule.forRootAsync({
      imports: [EnvModule],
      inject: [EnvService],
      useFactory: async (envService: EnvService) => {
        return {
          pinoHttp: {
            level: envService.get('LOG_LEVEL'),
            transport: {
              target: 'pino-pretty',
              options: {
                colorize: true,
                levelFirst: true,
                translateTime: 'HH:MM:ss yyyy-mm-dd',
                messageFormat: '{levelLabel} {hostname} [{context}] {msg}',
              },
            },
          },
        };
      },
    }),
  ],
})
export class LoggerModule {}
