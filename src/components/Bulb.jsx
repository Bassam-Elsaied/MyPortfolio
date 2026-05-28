import Image from "next/image";

const Bulb = () => {
  return (
    <div className="pointer-events-none fixed -bottom-12 -left-36 z-10 hidden w-[200px] rotate-12 mix-blend-color-dodge animate-pulse duration-75 md:block xl:w-[260px]">
      <Image
        src="/bulb.png"
        width={260}
        height={200}
        alt="bulb"
        className="h-full w-full"
      />
    </div>
  );
};

export default Bulb;
