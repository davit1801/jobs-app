import { z } from 'zod';

export const contactFormSchema = z.object({
  first_name: z.string().min(2, 'contact.validation.first-name'),
  last_name: z.string().min(3, 'contact.validation.last-name'),
  email: z.string().email('contact.validation.email'),
  message: z.string().min(5, 'contact.validation.message'),
});
