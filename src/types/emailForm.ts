import { z } from "zod";

export const emailFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  message: z.string().min(80).max(600),
});
