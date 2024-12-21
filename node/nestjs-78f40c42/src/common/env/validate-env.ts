import { z } from 'zod';

export const envSchema = z.object({
  // app
  PORT: z.coerce.number().optional().default(3030),
  LOG_LEVEL: z.enum([
    'debug',
    'info',
    'warn',
    'error',
    'fatal',
    'trace',
    'silent',
  ]),
});
export type Env = z.infer<typeof envSchema>;
