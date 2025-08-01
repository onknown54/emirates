import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full">
      <div className="mb-2.5 h-[15rem] w-full">
        <Image
          alt=""
          src="/images/hero-banner.svg"
          width={1412}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mb-5">
        <div>
          <p className="text-xs">21 March 2024 - 21 April 2024</p>
          <h3 className="text-2xl font-bold">Bahamas Family Trip</h3>
          <p className="text-md text-[#676E7E]">
            New York, United State of America <span>|</span> Solo Trip
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
