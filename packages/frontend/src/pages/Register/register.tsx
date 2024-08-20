import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const signInSchema = z.object({
  displayName: z.string().min(3, { message: "Display name is required" }),
  username: z
    .string()
    .min(5, { message: "Username is required" })
    .regex(/^[a-zA-Z0-9_]+$/, { message: "Invalid username format" }),
});

type SignInFormValues = z.infer<typeof signInSchema>;

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInFormValues) => {
    console.log(data);
    // Handle sign-in logic here
  };

  return (
    <div className="flex flex-col items-center h-full bg-black px-default py-4">
      <div className="w-full flex flex-col h-full">
        <h1 className="text-3xl font-bold text-white mb-8 text-left">Create An Account</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <Label htmlFor="displayName" className="text-white">
                Display Name*
              </Label>
              <Input
                id="displayName"
                placeholder="Display Name"
                {...register("displayName")}
                className="mt-1 block w-full"
              />
              {errors.displayName && (
                <p className="mt-1 text-sm text-red-500">{errors.displayName.message}</p>
              )}
              <p className="mt-1 text-sm text-gray-500">Enter your display name</p>
            </div>

            <div>
              <Label htmlFor="username" className="text-white">
                Username*
              </Label>
              <Input
                id="username"
                placeholder="Username"
                {...register("username")}
                className="mt-1 block w-full"
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-500">{errors.username.message}</p>
              )}
              <p className="mt-1 text-sm text-gray-500">Enter your username</p>
            </div>
          </div>
          <div className="h-full"></div>
          <Button type="submit" className="w-full bg-purple-600 text-white">
            Create Account
          </Button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          By creating an account with us, you agree to accept our{" "}
          <a href="#" className="text-purple-400 underline">
            terms of use
          </a>{" "}
          and{" "}
          <a href="#" className="text-purple-400 underline">
            privacy policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
