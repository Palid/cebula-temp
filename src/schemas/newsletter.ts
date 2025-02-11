import { z } from "zod";

export const newsletterFormSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  uodo: z.boolean().default(false),
});

export type NewsletterFormSchema = z.infer<typeof newsletterFormSchema>;
