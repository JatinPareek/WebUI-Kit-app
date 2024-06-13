import ImageGallery from "./ImageGallery";
import PropTypes from "prop-types";

const HeroSection = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-white max-w-full overflow-hidden flex flex-col items-center justify-start pt-[100px] px-5 pb-20 box-border gap-[54px] leading-[normal] tracking-[normal] mq600:gap-[27px] ${className}`}
    >
      <header className="w-[1200px] flex flex-row items-start justify-center pt-0 px-0 pb-2.5 box-border max-w-full text-center text-33xl text-black font-be-vietnam-pro">
        <div className="w-[954px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <h1 className="m-0 h-36 w-[634px] relative text-inherit leading-[72px] font-semibold font-inherit inline-block shrink-0 max-w-full">
              We Help You To Grow Your Business
            </h1>
          </div>
          <p className="m-0 self-stretch h-[52px] relative text-base leading-[26px] font-light text-dimgray inline-block">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea `}</p>
        </div>
      </header>
      <div className="w-[1200px] flex flex-row items-start justify-center max-w-full">
        <button className="cursor-pointer py-3.5 px-[31px] bg-royalblue-200 flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-white hover:bg-royalblue-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
          <div className="relative text-base font-medium font-be-vietnam-pro text-white text-left">
            Get Started
          </div>
        </button>
      </div>
      <ImageGallery />
    </div>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,
};

export default HeroSection;
