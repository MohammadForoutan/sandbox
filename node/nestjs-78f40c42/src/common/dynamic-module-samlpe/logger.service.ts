// src/logger.service.ts
import { Injectable, LoggerService } from '@nestjs/common';

export interface LoggerOptions {
  level: 'log' | 'error' | 'warn' | 'debug' | 'verbose';
}

@Injectable()
export class CustomLogger implements LoggerService {
  private readonly level: LoggerOptions['level'];

  constructor(options: LoggerOptions) {
    this.level = options.level;
  }

  log(message: string) {
    console.log('\x1b[34m%s\x1b[0m', `[LOG]: ${message}`);
  }

  error(message: string) {
    if (this.level === 'error' || this.level === 'log') {
      console.error(`[ERROR]: ${message}`);
    }
  }

  warn(message: string) {
    if (this.level === 'warn' || this.level === 'log') {
      console.warn(`[WARN]: ${message}`);
    }
  }

  debug(message: string) {
    if (this.level === 'debug') {
      console.debug(`[DEBUG]: ${message}`);
    }
  }

  verbose(message: string) {
    if (this.level === 'verbose') {
      console.log(`[VERBOSE]: ${message}`);
    }
  }
}
