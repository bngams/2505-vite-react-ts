import { z } from "zod"; 
 
const CredentialsSchema = z.object({ 
  email: z.string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  password: z.string()
});

export default CredentialsSchema;
// Corresponading type for the Credentials schema
export type CredentialsType = z.infer<typeof CredentialsSchema>;
// Zod to Model or Model to Zod...