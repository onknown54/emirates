import Image from "next/image";
import { NavLink, Searchbar } from "../ui/navbar";
import { NavLeftLinks, NavRightLinks } from "../lib/placeholders";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-wrap justify-between bg-white px-7 py-1.5">
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
            <Link key={k} href={itm.url} className="last:mr-3">
              <NavLink
                alt={itm.alt}
                url={itm.url}
                icon={itm.icon}
                width={itm.width}
                height={itm.height}
                navTitle={itm.navTitle}
              />
            </Link>
          ))}
        </ul>
        <ul>
          {NavRightLinks.map((itm, k) => (
            <Link key={k} href={itm.url}>
              <NavLink
                alt={itm.alt}
                url={itm.url}
                icon={itm.icon}
                width={itm.width}
                height={itm.height}
                navTitle={itm.navTitle}
              />
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}
