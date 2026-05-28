import Image from "next/image";

const Circles = () => {
  return (
    <div className="pointer-events-none fixed bottom-0 right-0 z-10 w-[200px] mix-blend-color-dodge animate-pulse duration-75 xl:w-[300px]">
      <Image
        src="/circles.png"
        width={260}
        height={200}
        alt=""
        className="h-full w-full"
      />
    </div>
  );
};

export default Circles;
