import { z } from 'zod';

export const createVacancyFormSchema = z
  .object({
    category: z.string().nonempty('vacancy.validation.category'),
    work_type: z.string().nonempty('vacancy.validation.work-type'),
    work_experience: z.string().nonempty('vacancy.validation.category'),
    salary_start: z.number().min(1, 'vacancy.validation.min-salary'),
    salary_end: z.number().min(1, 'vacancy.validation.max-salary'),
    title_en: z.string().nonempty('vacancy title (English) is required'),
    title_ka: z.string().nonempty('სამუშაოს დასახელება (Georgian) is required'),
    description_en: z
      .string()
      .nonempty('vacancy description (English) is required'),
    description_ka: z
      .string()
      .nonempty('სამუშაოს აღწერა (Georgian) is required'),
  })
  .refine((data) => data.salary_end >= data.salary_start, {
    path: ['salary_end'],
    message: 'vacancy.validation.refine',
  });
