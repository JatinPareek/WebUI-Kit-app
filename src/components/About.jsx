import PropTypes from "prop-types";

const About = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-white max-w-full flex flex-row items-start justify-start py-20 px-[120px] box-border gap-[80px] leading-[normal] tracking-[normal] text-left text-19xl text-gray font-be-vietnam-pro lg:flex-wrap lg:gap-[40px] lg:pl-[60px] lg:pr-[60px] lg:box-border mq750:gap-[20px] mq750:pl-[30px] mq750:pr-[30px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[112.5px] px-0 pb-0 box-border min-w-[374px] max-w-full mq750:min-w-full mq450:pt-[73px] mq450:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[64px] max-w-full mq750:gap-[32px] mq450:gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
            <h1 className="m-0 w-[529px] relative text-inherit leading-[55px] font-semibold font-inherit inline-block max-w-full mq1050:text-11xl mq1050:leading-[44px] mq450:text-4xl mq450:leading-[33px]">
              Let's get to know us better
            </h1>
            <p className="m-0 self-stretch h-[156px] relative text-base leading-[26px] font-light text-dimgray inline-block">
              <span className="block">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea `}</span>
              <span className="block">&nbsp;</span>
              <span className="block">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</span>
            </p>
          </div>
          <button className="cursor-pointer [border:none] py-3.5 px-6 bg-royalblue-200 flex flex-row items-start justify-start whitespace-nowrap hover:bg-royalblue-100">
            <a className="[text-decoration:none] relative text-base leading-[26px] font-medium font-be-vietnam-pro text-white text-left">
              Learn More
            </a>
          </button>
        </div>
      </div>
      <div className="w-[544px] flex flex-row items-start justify-start min-w-[544px] max-w-full lg:flex-1 mq1050:min-w-full">
        <div className="h-[578px] flex-1 relative max-w-full">
          <div className="absolute top-[17.4px] left-[17.4px] [background:linear-gradient(#135ce7,_#135ce7),_#c4c4c4] w-[526.6px] h-[560.6px]" />
          <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.5)),_#c4c4c4] w-[526.6px] h-[560.6px] z-[1]">
            <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.5)),_#c4c4c4] w-full h-full hidden" />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/replace-image2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  className: PropTypes.string,
};

export default About;
