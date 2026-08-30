import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen an."),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
  phone: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().min(10, "Bitte schreiben Sie ein paar Worte zu Ihrem Anliegen."),
  // Honeypot field: real visitors never fill this in, bots often do.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
