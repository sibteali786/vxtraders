import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc";
import { useCallback, useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@twa-dev/sdk/react";
import { useUserSignInStore } from "@/stores/useState";

const signInSchema = z.object({
  displayName: z.string().min(3, { message: "Display name is required" }),
  username: z
    .string()
    .min(4, { message: "Username is required" })
    .regex(/^[a-zA-Z0-9_]+$/, { message: "Invalid username format" }),
});

type SignInFormValues = z.infer<typeof signInSchema>;

// Debounce function
const debounce = (fn: (...args: any[]) => void, delay: number) => {
  let timerId: ReturnType<typeof setTimeout>;
  return function (...args: any[]) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export function Register() {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    setError,
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  });
  const [userName, setUserName] = useState("");
  const [setUserSigned] = useUserSignInStore((state) => [state.setUserSigned]);
  const [isUsernameAvailable, setIsUsernameAvailable] = useState<boolean | null>(null);
  // Example tRPC hook to check username availability
  const checkUsername = trpc.userNameAvailablity.useQuery(
    { userName: userName }, // This will be overridden by onChange
    {
      enabled: false,
    },
  );
  useEffect(() => {
    if (userName) {
      checkUsername.refetch().then((result) => {
        if (!result.data) {
          setIsUsernameAvailable(false);
          setError("username", {
            type: "manual",
            message: "Username is already taken, please try another one",
          });
        } else {
          setIsUsernameAvailable(true);
          clearErrors("username");
        }
      });
    }
  }, [userName]);
  const handleUsernameChange = useCallback(
    debounce((username: string) => {
      setUserName(username);
    }, 500),
    [],
  );
  const move = useNavigate();
  const onSubmit = (data: SignInFormValues) => {
    console.log(data);
    // Handle sign-in logic here
    localStorage.setItem("user", data.username);
    setUserSigned(true);
    // Navigate to the user's dashboard or a different route if needed
    move(`/`);
  };

  return (
    <div className="flex flex-col items-center h-full bg-black px-default py-4">
      <BackButton />
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
            </div>

            <div className="flex flex-col gap-4">
              <Label htmlFor="username" className="text-white">
                Username*
              </Label>
              <>
                <Input
                  id="username"
                  placeholder="Username"
                  {...register("username")}
                  className="mt-1 block w-full"
                  onChange={(e) => {
                    if (!e.target.value) {
                      setError("username", {
                        type: "manual",
                        message: "",
                      });
                    }
                    return handleUsernameChange(e.target.value);
                  }}
                />
                {errors.username ? (
                  <p className="text-sm text-red-500">{errors.username.message}</p>
                ) : null}
                {checkUsername.isLoading ? (
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-500">Checking username availability </p>
                    <LoaderCircle size={14} className="animate-spin" />
                  </div>
                ) : null}
                {isUsernameAvailable ? (
                  <p className="text-sm text-green-500">Username `{userName}` is available</p>
                ) : null}
              </>
            </div>
          </div>

          <div className="h-full"></div>
          <Button type="submit" className="w-full bg-purple-600 text-white">
            Create Account
          </Button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          By creating an account with us, you agree to accept our{" "}
          <a href="#" className="text-purple-400 hover:text-purple-500">
            terms of use
          </a>{" "}
          and{" "}
          <a href="#" className="text-purple-400 hover:text-purple-500">
            privacy policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
