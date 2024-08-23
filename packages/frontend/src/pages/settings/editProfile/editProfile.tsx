import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { trpc } from "@/trpc";
import { debounce } from "@/utils/utils";
import { LoaderCircle } from "lucide-react";

const formSchema = z.object({
  displayName: z
    .string()
    .min(3, { message: "Display name is required" })
    .max(50, { message: "Display name must be less than 50 characters" }),
  username: z
    .string()
    .min(4, { message: "Username must be at least 4 characters long" })
    .max(20, { message: "Username must be less than 20 characters long" })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d_]{4,20}$/, {
      message:
        "Username must contain at least one letter, one number, and can optionally include underscores.",
    }),
});

type EditProfileFormValues = z.infer<typeof formSchema>;

export const EditProfile = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<EditProfileFormValues>({
    resolver: zodResolver(formSchema),
  });
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [isUsernameAvailable, setIsUsernameAvailable] = useState<boolean | null>(null);
  // Example tRPC hook to check username availability
  const checkUsername = trpc.userNameAvailablity.useQuery(
    { userName: userName }, // This will be overridden by onChange
    {
      enabled: false,
    },
  );
  const onSubmit = (data: EditProfileFormValues) => {
    console.log(data);
    // Handle profile update logic here
    localStorage.setItem("user", data.username);
    navigate(`/`);
  };
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
  return (
    <div className="flex flex-col items-center h-full bg-black px-default py-4">
      <div className="w-full flex flex-col h-full">
        <h1 className="text-3xl font-bold text-white mb-8 text-left">Edit Profile</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full gap-4">
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
                placeholder="Username"
                {...register("username")}
                className="mt-1 block w-full"
                onChange={(e) => {
                  if (!e.target.value) {
                    clearErrors("username");
                    setIsUsernameAvailable(false);
                  }
                  return handleUsernameChange(e.target.value);
                }}
              />
              <div>
                <p className="text-sm text-white">Example: john_doe12, ali786@#</p>
                {errors.username ? (
                  <div>
                    <p className="text-sm text-destructive mt-1">{errors.username.message}</p>
                  </div>
                ) : null}
              </div>
              {checkUsername.isLoading ? (
                <div className="flex items-center gap-2">
                  <p className="text-sm text-gray-500">Checking username availability </p>
                  <LoaderCircle size={14} className="animate-spin" />
                </div>
              ) : null}
              {isUsernameAvailable ? (
                <p className="text-sm text-green-500">Username `{userName}` is available</p>
              ) : null}
            </div>
          </div>

          <div className="h-full"></div>
          <Button type="submit" className="w-full bg-purple-600 text-white">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
