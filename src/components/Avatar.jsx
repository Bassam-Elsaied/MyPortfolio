import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        className="w-full h-full translate-z-0 "
        src={"/bassam.png"}
        width={400}
        height={400}
        alt="bassam"
      />
    </div>
  );
};

export default Avatar;
