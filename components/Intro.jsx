import Image from "next/image";
import developer from "./../public/developer.png";

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
          I'm SHIV DUBEY
          <br />
          Passionate
          <span className="hover:text-custom-gray">full stack developer,</span>
          keen on developing
          <span className="hover:text-custom-gray"> scalable</span> and
          <div className="hover:text-custom-gray">maintainable</div> systems.
        </div>
      </div>
      <div className="w-1/2 h-full hidden md:block">
        <Image
          src={developer}
          layout=""
          alt="developer working beside a lamp"
          priority
        />
      </div>
    </div>
  );
}

export default Intro;