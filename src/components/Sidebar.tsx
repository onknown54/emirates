import Image from "next/image";
import { SidenavLinkItems } from "../lib/placeholders";

export default function Sidebar() {
  return (
    <div className="scrollbar-hidden h-full basis-[23%] overflow-x-hidden overflow-y-scroll border-t-2 border-black/20 bg-white px-2">
      {SidenavLinkItems.map((itm, k) => (
        <div
          key={k}
          className="hover:bg-gray mb-2 flex cursor-pointer items-center gap-4 border-l-2 border-transparent bg-white p-3 font-semibold text-black/50 hover:border-l-2 hover:border-blue-500 hover:text-blue-400"
        >
          <Image src={itm.icon} alt="" width={20} height={20} />
          <span className="text-sm">{itm.nameTitle}</span>
        </div>
      ))}
    </div>
  );
}
