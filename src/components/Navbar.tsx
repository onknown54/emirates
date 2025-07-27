import Image from "next/image";
import { Searchbar } from "../ui/navbar";
import { NavLeftLinks, NavRightLinks } from "../lib/placeholders/navbar";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-white px-7 py-5 text-black/50">
      <div className="flex items-center gap-3">
        <Image
          width={67}
          height={74}
          alt="logo image"
          src="images/logo.svg"
          className="-mb-2 -ml-1 max-h-3/2 flex-1/5 shrink-0"
        />
        <Searchbar />
      </div>

      {/* navbar section */}
      <nav className="flex items-center self-center">
        <ul className="flex list-none items-center justify-evenly gap-1">
          {NavLeftLinks.map((itm, k) => (
            <li
              key={k}
              className="hover:bg-gray inline-flex min-w-[5rem] cursor-pointer flex-col items-center justify-between gap-1.5 p-2.5 font-semibold transition-all hover:font-bold hover:text-blue-500"
            >
              <Image
                src={itm.icon}
                width={itm.width}
                height={itm.height}
                alt={itm.alt}
              />
              <span className="text-xs">{itm.navTitle}</span>
            </li>
          ))}
        </ul>
        <ul></ul>
      </nav>
    </div>
  );
}
