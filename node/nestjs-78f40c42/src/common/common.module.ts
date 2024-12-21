import { Module } from '@nestjs/common';
import { LoggerModule } from './logger';
import { EnvModule } from './env';

@Module({
  imports: [LoggerModule, EnvModule],
})
export class CommonModule {}
