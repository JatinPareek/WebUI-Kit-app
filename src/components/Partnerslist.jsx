import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";

const WebsiteDesign = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-white max-w-full flex flex-row flex-wrap items-end justify-start py-[60px] px-[200px] box-border gap-[64px] leading-[normal] tracking-[normal] text-center text-lg text-dimgray font-be-vietnam-pro mq450:gap-[16px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[32px] mq750:pl-[100px] mq750:pr-[100px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[176px] max-w-[212px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <img
            className="h-10 w-10 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/people.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-7">
          <a className="[text-decoration:none] flex-1 relative text-[inherit]">
            Employee
          </a>
        </div>
        <div className="self-stretch h-[61px] relative text-29xl font-semibold text-gray inline-block mq450:text-10xl mq750:text-19xl">
          1.000+
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[13.7px] min-w-[159px] max-w-[212px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="h-[33.3px] w-[23.3px] relative">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full hidden"
              alt=""
              src="/rectangle-1.svg"
            />
            <div className="absolute top-[6.7px] left-[13.4px] box-border w-[7.5px] h-[7.5px] z-[1] border-[2.5px] border-solid border-royalblue-200" />
            <div className="absolute top-[6.7px] left-[5px] box-border w-[7.5px] h-[7.5px] z-[1] border-[2.5px] border-solid border-royalblue-200" />
            <div className="absolute top-[16.7px] left-[13.4px] box-border w-[7.5px] h-[7.5px] z-[1] border-[2.5px] border-solid border-royalblue-200" />
            <div className="absolute top-[26.7px] left-[8.4px] box-border w-[9.2px] h-[9.2px] z-[1] border-[2.5px] border-solid border-royalblue-200" />
            <div className="absolute top-[16.7px] left-[5px] box-border w-[7.5px] h-[7.5px] z-[1] border-[2.5px] border-solid border-royalblue-200" />
          </div>
        </div>
        <a className="[text-decoration:none] self-stretch relative text-[inherit]">
          Office Branch
        </a>
        <div className="self-stretch h-[61px] relative text-29xl font-semibold text-gray inline-block mq450:text-10xl mq750:text-19xl">
          50+
        </div>
      </div>
      <FrameComponent
        smileFace="/smile-face.svg"
        officialPartner="Official Partner"
        prop="250+"
      />
      <FrameComponent
        smileFace="/crown.svg"
        officialPartner="Years Experience"
        prop="10+"
      />
    </div>
  );
};

WebsiteDesign.propTypes = {
  className: PropTypes.string,
};

export default WebsiteDesign;
