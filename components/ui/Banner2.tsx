"use client";

import Image from "next/image";

const Banner2 = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(33, 65, 161, 0.20) 0%, rgba(215, 37, 203, 0.20) 100%)",
      }}
      className="w-full h-[126px] py-2 flex items-center justify-center gap-10"
    >
      <Image
        src="/expedia-grayscale.png"
        height={300}
        width={300}
        alt="mouse-pointer"
        className="h-[50px] w-[150px] object-contain"
      />
      <Image
        src="/mouse-pointer.png"
        height={300}
        width={300}
        alt="mouse-pointer"
        className="h-[100px] w-[100px] object-contain"
      />
      <Image
        src="/shopify-grayscale.png"
        height={300}
        width={300}
        alt="mouse-pointer"
        className="h-[50px] w-[140px] object-contain"
      />
    </div>
  );
};

export default Banner2;
