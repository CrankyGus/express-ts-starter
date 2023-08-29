import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().default("3000")
});

export const env = envSchema.parse(process.env);

export interface IEnv extends z.infer<typeof envSchema> {}
