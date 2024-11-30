import { Vortex } from "@/components/ui/vortex";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="relative hidden bg-muted md:block  overflow-hidden">
        <Vortex backgroundColor="black" className="flex ">
          &nbsp;
        </Vortex>
      </div>

      <div className="flex items-center justify-center px-8 bg-card text-primary">
        <div className="mx-auto w-full max-w-md space-y-8">{children}</div>
      </div>
    </div>
  );
}
