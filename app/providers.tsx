import { HeroUIProvider } from "@heroui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider className="h-screen w-screen">{children}</HeroUIProvider>
  );
}
