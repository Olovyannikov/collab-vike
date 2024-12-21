import { z } from 'zod';

export const SendReportSchema = z.object({
    email: z.string().email('Обязательное поле'),
});
