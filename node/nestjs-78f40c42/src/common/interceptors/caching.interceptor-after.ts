import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class SimpleCachingInterceptor implements NestInterceptor {
  private cache: Map<string, any> = new Map();
  private logger: Logger = new Logger(SimpleCachingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const key = `cache_${request.method}_${request.url}`;

    // caching preventing requests to reach the controller and return cached response
    // Enhance the logic to cache only specific responses based on desired criteria.
    const cachedResponse = this.cache.get(key);
    if (cachedResponse) {
      return of(cachedResponse);
    }

    return next.handle().pipe(
      tap((response) => {
        // tap make sure that run the code before the response is sent
        // but after the controller is executed
        this.cache.set(key, response);
        this.logger.log({ cache: this.cache });
      }),
    );
  }
}
