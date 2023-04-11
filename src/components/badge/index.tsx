import { ReactNode } from "react";
import { BadgeContainer } from "./styles";

interface BadgeProps {
  children: ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return <BadgeContainer>{children}</BadgeContainer>;
}
