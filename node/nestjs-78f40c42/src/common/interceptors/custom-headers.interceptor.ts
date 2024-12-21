import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class CustomHeadersInterceptor implements NestInterceptor {
  private logger: Logger = new Logger(CustomHeadersInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    const id = crypto.randomUUID();
    request.headers['x-custom-id'] = id;
    return next.handle().pipe(
      tap(() => {
        response.setHeader('x-custom-id', id);
      }),
    );
  }
}
