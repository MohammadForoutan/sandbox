import { EnvService } from './common/env';
import { Logger } from 'nestjs-pino';
import { createApp } from './app';

async function bootstrap() {
  const app = await createApp();

  const logger = app.get(Logger);

  const configService = app.get<EnvService>(EnvService);
  const PORT = configService.get('PORT');

  await app.listen(PORT, () => {
    logger.log('[main.ts]  -  App is running on port ', PORT);
  });
}
bootstrap();
