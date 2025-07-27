import Image from "next/image";

export function Searchbar() {
  return (
    <div className="bg-gray flex items-center justify-between overflow-hidden rounded-lg">
      <div className="flex items-center justify-center p-3">
        <Image
          width={20}
          height={20}
          alt="logo image"
          src="icons/search.svg"
          className="object-contain"
        />
      </div>
      <input
        type="text"
        name="travels"
        id="travels"
        placeholder="search"
        className="bg-gray h-full w-full p-3 pl-0 text-black/50 outline-0"
      />
    </div>
  );
}
