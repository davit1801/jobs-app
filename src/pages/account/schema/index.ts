import { z } from 'zod';

export const profileFormSchema = z.object({
  avatar_url: z.string().url('profile.validation.avatar').optional(),
  website_url: z.string().url('profile.validation.website').optional(),
  full_name_en: z.string().min(3, 'profile.validation.fullname'),
  full_name_ka: z.string().min(3, 'profile.validation.fullname'),
  company_name_en: z.string().min(3, 'profile.validation.companyname'),
  company_name_ka: z.string().min(3, 'profile.validation.companyname'),
  address_en: z.string().min(5, 'profile.validation.address'),
  address_ka: z.string().min(5, 'profile.validation.address'),
  phone: z.string().regex(/^\+?[1-9]\d{6,14}$/, 'profile.validation.phone'),
});

export const changePasswordFormSchema = z
  .object({
    new_password: z
      .string()
      .min(8, 'auth.password-minlength')
      .regex(/[A-Z]/, 'auth.password-uppercase')
      .regex(/[a-z]/, 'auth.password-lowercase')
      .regex(/[0-9]/, 'auth.password-number')
      .regex(/[@$!%*?&#]/, 'auth.password-character'),
    confirm_password: z.string().min(6, { message: 'auth.pass-confirm' }),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    path: ['confirm_password'],
    message: 'auth.pass-match',
  });
