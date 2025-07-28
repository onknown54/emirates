import { ComponentType, SVGProps } from "react";

export interface ChildElement {
  children: React.ReactNode;
}

export interface Facility {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}
