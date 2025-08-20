
import type { ReactNode } from "react";

export type NavLinkProps = {
  href: string;
  children: ReactNode;
  isActive?: boolean;
};


export type Category = {
  displayName: string;
  slug: string;
};