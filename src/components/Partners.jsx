import PropTypes from "prop-types";

const Root = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-white max-w-full flex flex-col items-center justify-start py-20 px-5 box-border gap-[32px] leading-[normal] tracking-[normal] mq675:gap-[16px] ${className}`}
    >
      <section className="w-[1200px] flex flex-row items-start justify-center max-w-full text-left text-[40px] text-gray font-be-vietnam-pro">
        <div className="w-[831px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <h1 className="m-0 h-[51px] relative text-inherit font-semibold font-inherit inline-block mq450:text-5xl mq750:text-[32px]">
              Meet our Partner
            </h1>
          </div>
          <p className="m-0 relative text-base leading-[26px] font-light text-dimgray text-center">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuim ad minim veniam `}</p>
        </div>
      </section>
      <section className="w-[1200px] flex flex-row flex-wrap items-start justify-center gap-[24px] max-w-full">
        <div className="flex-1 bg-silver flex flex-row items-start justify-start min-w-[176px] max-w-[180px]">
          <div className="self-stretch w-[180px] relative bg-silver hidden" />
          <img
            className="h-[120px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/replace-image@2x.png"
          />
        </div>
        <div className="flex-1 bg-silver flex flex-row items-start justify-start min-w-[176px] max-w-[180px]">
          <div className="self-stretch w-[180px] relative bg-silver hidden" />
          <img
            className="h-[120px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/replace-image@2x.png"
          />
        </div>
        <div className="flex-1 bg-silver flex flex-row items-start justify-start min-w-[176px] max-w-[180px]">
          <div className="self-stretch w-[180px] relative bg-silver hidden" />
          <img
            className="h-[120px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/replace-image@2x.png"
          />
        </div>
        <div className="flex-1 bg-silver flex flex-row items-start justify-start min-w-[176px] max-w-[180px]">
          <div className="self-stretch w-[180px] relative bg-silver hidden" />
          <img
            className="h-[120px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/replace-image@2x.png"
          />
        </div>
        <div className="flex-1 bg-silver flex flex-row items-start justify-start min-w-[176px] max-w-[180px]">
          <div className="self-stretch w-[180px] relative bg-silver hidden" />
          <img
            className="h-[120px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/replace-image@2x.png"
          />
        </div>
        <div className="flex-1 bg-silver flex flex-row items-start justify-start min-w-[176px] max-w-[180px]">
          <div className="self-stretch w-[180px] relative bg-silver hidden" />
          <img
            className="h-[120px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/replace-image@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

Root.propTypes = {
  className: PropTypes.string,
};

export default Root;
