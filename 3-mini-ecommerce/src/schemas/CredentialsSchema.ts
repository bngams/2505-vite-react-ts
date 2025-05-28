import { z } from "zod/v4"; 
 
const CredentialsSchema = z.object({ 
  email: z.email(),
  password: z.string()
});

export default CredentialsSchema;
// Corresponading type for the Credentials schema
export type CredentialsType = z.infer<typeof CredentialsSchema>;
// Zod to Model or Model to Zod...