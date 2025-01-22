import { z } from 'zod';

export const envSchema = z.object({
  // application
  PORT: z.coerce.number().optional().default(3030),

  // database

  // auth

  // email
});
export type Env = z.infer<typeof envSchema>;
