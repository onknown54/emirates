"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavlinkProps } from "src/app/lib/type-definations";

export function NavLink({
  icon,
  width,
  height,
  alt,
  navTitle,
  url,
}: NavlinkProps) {
  const currentUrl = usePathname();

  return (
    <li
      className={`hover:bg-gray inline-flex min-w-[5rem] cursor-pointer flex-col items-center justify-between gap-1.5 p-2 font-semibold transition-all hover:font-bold hover:text-blue-500 ${currentUrl === url ? "bg-gray text-blue-500" : ""}`}
    >
      <Image src={icon} width={width} height={height} alt={alt} />
      <span className="text-[.7rem]">{navTitle}</span>
    </li>
  );
}
