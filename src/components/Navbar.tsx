import Image from "next/image";
import { Searchbar } from "../ui/navbar";
import { NavLeftLinks, NavRightLinks } from "../lib/placeholders/navbar";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-white px-7 py-2.5 text-black/50">
      <div className="flex items-center justify-evenly gap-2">
        <Image
          width={40}
          height={44}
          alt="logo image"
          src="images/logo.svg"
          className="max-h-[75%] w-auto flex-1/5 shrink-0 object-contain"
        />
        <Searchbar />
      </div>

      {/* navbar section */}
      <nav className="bo flex items-center self-stretch">
        <ul className="flex list-none items-center justify-evenly gap-1 border-r-2 border-black/40">
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
        <ul>
          {NavRightLinks.map((itm, k) => (
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
      </nav>
    </div>
  );
}
