import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        className="
    object-contain
    transform-gpu
    brightness-90
    contrast-125
    drop-shadow-[0_0_40px_rgba(241,48,36,0.35)]
    
  "
        src={"/bassam2.png"}
        width={750}
        height={750}
        alt="bassam"
      />
    </div>
  );
};

export default Avatar;
