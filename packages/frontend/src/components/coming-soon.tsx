import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ComingSoon() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Coming Soon</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We're working hard to bring you an amazing new product or service. Sign up to be the first to know when
            it's available.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex gap-2">
            <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
            <Button type="submit">Notify Me</Button>
          </form>
          <p className="text-xs text-muted-foreground">
            We'll never share your email. Check our{" "}
            <a href="#" className="underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
