import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(32, { message: "Name must be at most 32 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  topicId: z.number().int().min(0, { message: "Please select a topic." }),
  topic: z.string().nullable(),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters." })
    .max(400, { message: "Message must be at most 400 characters." }),
});

export type ContactFormFields = z.infer<typeof ContactFormSchema>;
