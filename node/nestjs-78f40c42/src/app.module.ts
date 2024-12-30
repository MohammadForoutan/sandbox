import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './common/filters';
import { CustomHeadersInterceptor } from './common/interceptors';
import { CatsModule } from './modules/cats/cats.module';

@Module({
  imports: [CommonModule, CatsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: CustomHeadersInterceptor,
    },
  ],
})
export class AppModule {}
