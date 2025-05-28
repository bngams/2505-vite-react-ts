import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CredentialsType } from "@/schemas/CredentialsSchema"
import { useForm } from "react-hook-form"
import CredentialsSchema from "@/schemas/CredentialsSchema"
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from "../providers/AuthProvider"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  // useAuth() => shortcut for useContext(AuthContext)
  const { login } = useAuth(); // Assuming you have a useAuth hook to manage authentication  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CredentialsType>({
    resolver: zodResolver(CredentialsSchema) // /!\ auto valid still in zod v3
  });

  function onSubmit(credentials: CredentialsType) {
    // Handle form submission logic here
    console.log("Form submitted", credentials);

    // if zodResolvers => already validated
    // try catch  or if /else
    // try {
    //   Credentials.parse(credentials)
    //   console.log("Valid credentials:", credentials);
    // } catch(error) {
    //   console.error("Validation error:", error);
    //   return;
    // } 

    // TODO: implement better logic: Call service -> then services updates the state
    login(credentials); // Call the login function from the AuthProvider
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                {/* register options managed with zodresolver */}
                <Input
                 {...register("email")} 
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message || "Email is required" /* zod v3 error message */}  
                  </span>
                )}
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                {/*  register options not needed with zodResolver */}
                <Input id="password" type="password" {...register("password")} />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {"Password is required"}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
