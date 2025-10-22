import z from "zod";

export const urlSchema = z.object({
  url: z
    .string()
    .nonempty("The URL is required")
    .url({ message: "Please enter a valid URL" }),
});

export type FormData = z.infer<typeof urlSchema>;
