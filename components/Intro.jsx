import Image from "next/image";
import { myLoader } from "../helpers/nextHelpers";

function Intro() {
  return (
    <div
      className="flex-grow flex flex-row bg-[#211E27] bg-contain bg-no-repeat bg-center sm:px-12"
      // style={{ backgroundImage: `url(${developer})` }}
    >
      <div className="flex-1 flex flex-col justify-center">
        <div className="h-fit pl-10 sm:pl-4 text-custom-green font-semibold text-3xl sm:text-4xl uppercase max-w-4xl pr-2">
          <span className="text-6xl text-custom-gray">HI!!</span>
          <br />
          I&apos;m SHIV DUBEY
          <br />
          Passionate
          <span className="hover:text-custom-gray"> Full Stack developer,</span>
          keen on developing
          <span className="hover:text-custom-gray"> scalable</span> and
          <div className="hover:text-custom-gray">maintainable</div> systems.
        </div>
      </div>
      <div className="w-1/2 h-full hidden md:block relative">
        <Image
          src="https://i.ibb.co/1r6LQjd/developer.png"
          layout="fill"
          alt="developer working beside a lamp"
          objectFit="contain"
          priority
          loader={myLoader}
        />
      </div>
    </div>
  );
}

export default Intro;
