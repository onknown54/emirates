import Image from "next/image";

interface NavlinkProps {
  icon: string;
  alt: string;
  width: number;
  height: number;
  navTitle: string;
}

export function NavLink({ icon, width, height, alt, navTitle }: NavlinkProps) {
  return (
    <li className="hover:bg-gray inline-flex min-w-[5rem] cursor-pointer flex-col items-center justify-between gap-1.5 p-2 font-semibold transition-all last:mr-3 hover:font-bold hover:text-blue-500">
      <Image src={icon} width={width} height={height} alt={alt} />
      <span className="text-[.7rem]">{navTitle}</span>
    </li>
  );
}
