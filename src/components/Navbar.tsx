import Image from "next/image";
import { NavLink, Searchbar } from "../ui/navbar";
import { NavLeftLinks, NavRightLinks } from "../lib/placeholders";

export default function Navbar() {
  return (
    <div className="flex flex-wrap justify-between bg-white px-7 py-1.5 text-black/50">
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
      <nav className="bo flex items-center self-stretch">
        <ul className="mr-3 flex list-none items-center justify-evenly gap-1 border-r-2 border-black/40">
          {NavLeftLinks.map((itm, k) => (
            <NavLink
              key={k}
              alt={itm.alt}
              height={itm.height}
              icon={itm.icon}
              navTitle={itm.navTitle}
              width={itm.width}
            />
          ))}
        </ul>
        <ul>
          {NavRightLinks.map((itm, k) => (
            <NavLink
              key={k}
              alt={itm.alt}
              height={itm.height}
              icon={itm.icon}
              navTitle={itm.navTitle}
              width={itm.width}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}
