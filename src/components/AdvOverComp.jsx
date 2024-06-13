import PropTypes from "prop-types";

const AdvOverComp = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-white max-w-full flex flex-row items-center justify-start py-20 px-[120px] box-border gap-[80px] leading-[normal] tracking-[normal] text-left text-19xl text-gray font-be-vietnam-pro lg:flex-wrap lg:gap-[40px] lg:pl-[60px] lg:pr-[60px] lg:box-border mq750:gap-[20px] mq750:pl-[30px] mq750:pr-[30px] mq750:box-border ${className}`}
    >
      <img
        className="w-[544px] relative max-h-full object-contain max-w-full lg:flex-1"
        loading="lazy"
        alt=""
        src="/image@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[64px] min-w-[374px] max-w-full mq750:gap-[32px] mq750:min-w-full mq450:gap-[16px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq750:gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h2 className="m-0 self-stretch h-[110px] relative text-inherit leading-[55px] font-semibold font-inherit inline-block mq450:text-4xl mq450:leading-[33px] mq1050:text-11xl mq1050:leading-[44px]">
              Our advantages over competitors
            </h2>
            <p className="m-0 self-stretch h-[52px] relative text-base leading-[26px] font-light text-dimgray inline-block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-[18px] text-xl">
            <div className="flex flex-row items-center justify-start gap-[16px] mq450:flex-wrap">
              <div className="h-[34px] w-[34px] relative overflow-hidden shrink-0">
                <input
                  className="m-0 absolute top-[3.2px] left-[3.2px] rounded-[4.25px] box-border w-[27.6px] h-[27.6px] border-[2.1px] border-solid border-royalblue-200"
                  type="checkbox"
                />
                <img
                  className="absolute top-[11.3px] left-[9.9px] w-[14.2px] h-[11.3px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/vector-37.svg"
                />
              </div>
              <div className="relative mq450:text-base">
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px] mq450:flex-wrap">
              <div className="h-[34px] w-[34px] relative overflow-hidden shrink-0">
                <input
                  className="m-0 absolute top-[3.2px] left-[3.2px] rounded-[4.25px] box-border w-[27.6px] h-[27.6px] border-[2.1px] border-solid border-royalblue-200"
                  type="checkbox"
                />
                <img
                  className="absolute top-[11.3px] left-[9.9px] w-[14.2px] h-[11.3px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/vector-37.svg"
                />
              </div>
              <div className="relative mq450:text-base">
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px] mq450:flex-wrap">
              <div className="h-[34px] w-[34px] relative overflow-hidden shrink-0">
                <input
                  className="m-0 absolute top-[3.2px] left-[3.2px] rounded-[4.25px] box-border w-[27.6px] h-[27.6px] border-[2.1px] border-solid border-royalblue-200"
                  type="checkbox"
                />
                <img
                  className="absolute top-[11.3px] left-[9.9px] w-[14.2px] h-[11.3px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/vector-37.svg"
                />
              </div>
              <div className="relative mq450:text-base">
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px] mq450:flex-wrap">
              <div className="h-[34px] w-[34px] relative overflow-hidden shrink-0">
                <input
                  className="m-0 absolute top-[3.2px] left-[3.2px] rounded-[4.25px] box-border w-[27.6px] h-[27.6px] border-[2.1px] border-solid border-royalblue-200"
                  type="checkbox"
                />
                <img
                  className="absolute top-[11.3px] left-[9.9px] w-[14.2px] h-[11.3px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/vector-37.svg"
                />
              </div>
              <div className="relative mq450:text-base">
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-3.5 px-6 bg-royalblue-200 flex flex-row items-start justify-start whitespace-nowrap hover:bg-royalblue-100">
          <a className="[text-decoration:none] relative text-base leading-[26px] font-medium font-be-vietnam-pro text-white text-left">
            Learn More
          </a>
        </button>
      </div>
    </div>
  );
};

AdvOverComp.propTypes = {
  className: PropTypes.string,
};

export default AdvOverComp;
