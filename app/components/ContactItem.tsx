//components
import { RotateElement } from "@/app/components/Motion";

import { ReactNode } from "react";

export const ContactItem = ({
  icon,
  value,
}: {
  icon: ReactNode;
  value: string;
}) => (
  <div className="flex flex-row justify-center items-center gap-3">
    <RotateElement element={icon} />
    <span>{value}</span>
  </div>
);
