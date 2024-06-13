import List from "./List";
import PropTypes from "prop-types";

const Advantages = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-white max-w-full flex flex-col items-center justify-start py-20 px-5 box-border gap-[64px] leading-[normal] tracking-[normal] mq450:gap-[16px] mq675:gap-[32px] ${className}`}
    >
      <section className="w-[1015px] flex flex-col items-center justify-start gap-[24px] max-w-full text-center text-19xl text-gray font-be-vietnam-pro">
        <h1 className="m-0 w-[760px] relative text-inherit leading-[55px] font-semibold font-inherit inline-block max-w-full mq450:text-4xl mq450:leading-[33px] mq750:text-11xl mq750:leading-[44px]">
          Our advantages
        </h1>
        <p className="m-0 self-stretch h-[52px] relative text-base leading-[26px] font-light text-dimgray inline-block">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea `}</p>
      </section>
      <section className="w-[1200px] shadow-[11px_11px_25px_rgba(0,_0,_0,_0.04)] flex flex-row flex-wrap items-start justify-start py-0 pr-px pl-0 box-border gap-[40px] max-w-full mq675:gap-[20px]">
        <List menu="/menu.svg" smartSegmentation="Smart Segmentation" />
        <List
          menu="/cone.svg"
          smartSegmentation="Time Optimization"
          propBackgroundColor="#135ce7"
          propColor="#fff"
          propColor1="#fff"
        />
        <List
          menu="/timer.svg"
          smartSegmentation="Real Time Report"
          propBackgroundColor="#fff"
          propColor="#0a1a36"
          propColor1="#626976"
        />
      </section>
    </div>
  );
};

Advantages.propTypes = {
  className: PropTypes.string,
};

export default Advantages;
