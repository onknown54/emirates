import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full">
      <div className="mb-2.5 h-[15rem] w-full">
        <Image
          alt=""
          src="/images/hero-banner.jpg"
          width={1280}
          height={853}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mb-4">
        <div>
          <p className="text-xs">21 March 2024 - 21 April 2024</p>
          <h3 className="text-lg font-bold">Bahamas Family Trip</h3>
          <p className="text-sm font-bold text-black/40">
            New York, United State of America <span>|</span> Solo Trip
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
