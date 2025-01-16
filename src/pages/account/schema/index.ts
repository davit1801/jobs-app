import { z } from 'zod';

export const profileFormSchema = z.object({
  avatar_url: z.string().url('Invalid URL').optional(),
  website_url: z.string().url('Invalid URL').optional(),
  full_name_en: z.string().min(3, 'Full Name is required'),
  full_name_ka: z.string().min(3, 'სახელი გვარი არის სავალდებულო'),
  company_name_en: z.string().min(3, 'Company Name is required'),
  company_name_ka: z.string().min(3, 'კომპანიის სახელი არის სავალდებულო'),
  address_en: z.string().min(5, 'Address is required'),
  address_ka: z.string().min(5, 'მისამართი არის სავალდებულო'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format'),
});
