import Image from "next/image";
import React from "react";

function TopLeftImage() {
  return (
    <div className="absolute top-0 left-0 mix-blend-color-dodge opacity-50 w-[200px] xl:w-[400px] z-10">
      <Image
        src="/top-left-img.png"
        width={400}
        height={400}
        alt="background"
      />
    </div>
  );
}

export default TopLeftImage;
