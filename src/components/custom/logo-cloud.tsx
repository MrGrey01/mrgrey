"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const logos = [
  "/partners/shopify.png",
  "/partners/synqmenu.png",
  "/partners/amazon.png",
  "/partners/microsoft.png",
  "/partners/masterplanna.png",
  "/partners/react.png",
  "/partners/framer.png",
];

export default function LogoCloud() {
  return (
    <div className="relative overflow-hidden w-[80vw] md:w-full">
      {/* <div className="py-4 max-w-6xl mx-auto px-6 relative overflow-hidden"> */}
      <Marquee
        speed={40}
        pauseOnHover
        gradient={false}
        className="relative flex items-center mask-l-from-80% mask-r-from-80% w-full overflow-hidden"
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            className="relative mx-4 md:mx-8 flex items-center justify-center opacity-60 hover:opacity-100 transition w-32 h-16"
          >
            <Image
              src={logo}
              alt="partner logo"
              width={120}
              height={40}
              className="object-contain grayscale hover:grayscale-1 transition"
            />
          </div>
        ))}
      </Marquee>
      {/* </div> */}
    </div>
  );
}
