import { ChildElement } from "../lib/type-definations";

export default function Container({ children }: ChildElement) {
  return <div className="px-10">{children}</div>;
}
