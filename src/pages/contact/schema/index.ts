import { z } from 'zod';

export const contactFormSchema = z.object({
  first_name: z.string().min(3, 'First name is required'),
  last_name: z.string().min(3, 'Last name is required'),
  email: z.string().email('Email not valid'),
  message: z.string().min(5, 'message is required'),
});
