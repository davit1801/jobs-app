import { z } from 'zod';

export const SignUpFormSchema = z.object({
  email: z.string().email('auth.invalid-email'),
  password: z
    .string()
    .min(8, 'auth.password-minlength')
    .regex(/[A-Z]/, 'auth.password-uppercase')
    .regex(/[a-z]/, 'auth.password-lowercase')
    .regex(/[0-9]/, 'auth.password-number')
    .regex(/[@$!%*?&#]/, 'auth.password-character'),
  username: z.string().min(4),
});
