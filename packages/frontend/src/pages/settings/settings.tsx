export function Settings() {
  return (
    <div className="py-4 space-y-10">
      <h1 className="text-3xl font-bold">Settings</h1>
      <div className="space-y-8">
        <h2 className="text-muted-foreground text-xl">Account Settings</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <p className="font-semibold text-lg">Edit profile</p>
            <p className="font-semibold">&gt;</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold text-lg">Channel integration</p>
            <p className="font-semibold">&gt;</p>
          </div>
        </div>
      </div>

      <div className="w-full p-6"></div>
    </div>
  );
}
