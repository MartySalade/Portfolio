import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: Readonly<Props>) {
  return (
    <div
      className={cn(
        "flex items-center bg-card-gradient p-6 rounded-lg border border-solid border-gray-600",
        className
      )}
    >
      {children}
    </div>
  );
}
