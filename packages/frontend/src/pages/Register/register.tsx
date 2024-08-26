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
import { debounce } from "@/utils/utils";

const signInSchema = z.object({
  displayName: z.string().min(3, { message: "Display name is required" }),
  username: z
    .string()
    .min(1, { message: "Username is required" }) // Prioritize showing "Username is required" when empty
    .refine((value) => /^[a-zA-Z0-9]+$/.test(value), {
      message: "Username can only contain lowercase alphabets and numbers",
    })
    .refine((value) => value.length >= 5, {
      message: "Username must be at least 5 characters long",
    })
    .transform((value) => value.toLowerCase()),
});

type SignInFormValues = z.infer<typeof signInSchema>;

export function Register() {
  const {
    register,
    handleSubmit,
    clearErrors,
    getValues,
    formState: { errors },
    watch,
    setError,
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    mode: "onChange",
  });

  const [userName, setUserName] = useState("");
  const [setUserSigned] = useUserSignInStore((state) => [state.setUserSigned]);
  const [isUsernameAvailable, setIsUsernameAvailable] = useState<boolean | null>(null);
  const usernameValue = watch("username");
  const checkUsername = trpc.userNameAvailablity.useQuery({ userName }, { enabled: false });
  useEffect(() => {
    setUserName(getValues("username").toLowerCase());
    console.log(userName, usernameValue);
    if (!errors.username && usernameValue) {
      checkUsername.refetch().then((result) => {
        if (!result.data) {
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
  }, [errors.username, userName, usernameValue]);

  const handleUsernameChange = useCallback(
    debounce((username: string) => {
      setUserName(username.toLowerCase());
    }, 500),
    [],
  );

  const move = useNavigate();
  const onSubmit = (data: SignInFormValues) => {
    if (isUsernameAvailable) {
      localStorage.setItem("user", data.username);
      setUserSigned(true);
      move(`/`);
    }
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
                <p className="mt-1 text-sm text-destructive">{errors.displayName.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <Label htmlFor="username" className="text-white">
                Username*
              </Label>
              <Input
                id="username"
                placeholder="e.g., johndoe, ali786"
                {...register("username")}
                className="mt-1 block w-full"
              />
              {errors.username && (
                <div>
                  <p className="text-sm text-destructive mt-1">{errors.username.message}</p>
                </div>
              )}
              {checkUsername.isLoading ? (
                <div className="flex items-center gap-2">
                  <p className="text-sm text-gray-500">Checking username availability </p>
                  <LoaderCircle size={14} className="animate-spin" />
                </div>
              ) : null}
              {isUsernameAvailable && !errors.username ? (
                <p className="text-sm text-green-500">Username `{userName}` is available</p>
              ) : null}
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
