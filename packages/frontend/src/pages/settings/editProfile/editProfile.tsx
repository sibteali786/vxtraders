import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { BackButton } from "@twa-dev/sdk/react";

const signInSchema = z.object({
  displayName: z
    .string()
    .optional()
    .refine((value) => !value || value.length >= 3, {
      message: "Username must be at least 3 characters long",
    }),
  username: z
    .string()
    .optional()
    .refine((value) => !value || /^[a-zA-Z0-9]+$/.test(value), {
      message: "Username can only contain lowercase alphabets and numbers",
    })
    .refine((value) => !value || value.length >= 5, {
      message: "Username must be at least 5 characters long",
    })
    .transform((value) => value?.toLowerCase() ?? ""),
});

type SignInFormValues = z.infer<typeof signInSchema>;

export function EditProfile() {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    watch,
    setError,
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    mode: "onChange",
  });

  const [userName, setUserName] = useState("");
  const [isUsernameAvailable, setIsUsernameAvailable] = useState<boolean | null>(null);
  const usernameValue = watch("username");
  const checkUsername = trpc.userNameAvailablity.useQuery({ userName }, { enabled: false });

  useEffect(() => {
    if (usernameValue) {
      setUserName(usernameValue.toLowerCase());
    }
    setIsUsernameAvailable(false);
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

  const onSubmit = (data: SignInFormValues) => {
    alert(
      "Profile updated successfully" +
        Object.entries(data).map(([key, value]) => `\n${key}: ${value}`),
    );
  };

  return (
    <div className="flex flex-col items-center h-full bg-black px-default py-4">
      <BackButton />
      <div className="w-full flex flex-col h-full">
        <h1 className="text-3xl font-bold text-white mb-8 text-left">Edit Profile</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <Label htmlFor="displayName" className="text-white">
                Display Name
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
                Username
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
            Save
          </Button>
        </form>
      </div>
    </div>
  );
}
