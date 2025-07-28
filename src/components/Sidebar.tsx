"use client";
import Image from "next/image";
import { SidenavLinkItems } from "../lib/placeholders";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const currentUrl = usePathname();

  return (
    <div className="scrollbar-hidden h-full basis-[23%] overflow-x-hidden overflow-y-scroll border-t-2 border-black/20 bg-white px-2">
      {SidenavLinkItems.map((itm, k) => (
        <Link key={k} href={itm.url}>
          <div
            className={`hover:bg-gray mb-2 flex cursor-pointer items-center gap-4 border-l-2 border-transparent p-3 font-semibold text-black/50 hover:border-l-2 hover:border-blue-500 hover:text-blue-400 ${currentUrl === itm.url ? "bg-gray border-l-2 border-blue-500 text-blue-400" : ""}`}
          >
            <Image src={itm.icon} alt="" width={20} height={20} />
            <span className="text-sm">{itm.nameTitle}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
