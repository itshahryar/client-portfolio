import { z } from "zod";

export const onboardingSchema = z.object({
  age: z
    .string()
    .transform((val) => parseInt(val, 10))
    .pipe(
      z
        .number()
        .min(1, "Age must be at least 1")
        .max(120, "Please enter a valid age")
    ),

  gender: z.enum(["Male", "Female", "Other", "Prefer not to say"], {
    required_error: "Please select your gender",
  }),

  location: z.string().min(2, "Location must be at least 2 characters"),

  diagnosisDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Please enter a valid date",
  }),

  affectedAreas: z
    .string({
      required_error: "Please describe affected areas",
    })
    .min(3, "Please describe affected areas"),

  symptoms: z
    .array(z.string())
    .min(1, "Please select at least one symptom"),

  treatmentTaken: z.enum(["Yes", "No"], {
    required_error: "Please select an option",
  }),

  previousTreatmentDetails: z.string().max(500).optional(),

  skincareRoutine: z.string().max(500).optional(),

  stressLevel: z.enum(["Low", "Moderate", "High"], {
    required_error: "Please select your stress level",
  }),

  notes: z.string().max(500).optional(),
});
