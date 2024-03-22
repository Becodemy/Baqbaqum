import { Button } from "@nextui-org/button";
import Banner from "@/assets/banner.svg";
import Image from "next/image";

const Root = () => {
  return (
    <div className="w-[90%] m-auto h-screen md:flex items-center justify-end flex-row-reverse">
      <div className="md:w-[50%] w-full">
        <Image src={Banner} width={650} height={650} alt="" className="mr-8" />
      </div>
      <div className="md:w-[50%] w-full">
        <h1 className="title font-Poppins !text-[25px] md:!text-5xl !text-left md:!leading-[60px]">
          Start your <span className="text-gradient">programming</span> <br />
          <span className="text-gradient">Journey</span> with our <br />
          Dedicated community!
        </h1>
        <p className="block font-Poppins md:text-[22px] md:leading-[32px] text-[16px] leading-[25px] font-normal text-[#A3B3BC] mb-5 text-center md:text-left">
          Begin your coding adventure in our community, where learning is always
          appreciated and valued.
        </p>
        <br />
        <Button className="button w-[200px] text-white">
          Expore Resources
        </Button>
      </div>
    </div>
  );
};

export default Root;
