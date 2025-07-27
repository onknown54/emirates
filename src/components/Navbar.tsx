import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-white px-7 py-5">
      <div className="flex items-center gap-3">
        <Image
          width={67}
          height={74}
          alt="logo image"
          src="images/logo.svg"
          className="-mb-2 -ml-1 max-h-3/2 flex-1/5 shrink-0"
        />
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
      </div>

      {/* navbar section */}
    </div>
  );
}
