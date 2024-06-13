import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";

const Pricing = ({ className = "" }) => {
  return (
    <div
      className={`w-[1439px] bg-white max-w-full flex flex-col items-center justify-start py-20 px-0 box-border gap-[40px] leading-[normal] tracking-[normal] text-center text-lg text-darkgray font-be-vietnam-pro mq750:gap-[20px] ${className}`}
    >
      <section className="w-[1199px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-19xl text-gray font-be-vietnam-pro">
        <div className="w-[760px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[55px] font-semibold font-inherit mq450:text-4xl mq450:leading-[33px] mq1050:text-11xl mq1050:leading-[44px]">
            Select best Plan for you
          </h1>
          <div className="flex flex-row items-start justify-start py-0 px-10 text-base text-darkgray">
            <div className="relative leading-[26px] font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididu
            </div>
          </div>
        </div>
      </section>
      <div className="w-[1199px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[233px] flex flex-row items-start justify-start gap-[12px]">
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <div className="relative leading-[26px] font-medium">Monthly</div>
          </div>
          <div className="h-8 flex-1 relative rounded-2xl bg-cornflowerblue">
            <div className="absolute top-[0px] left-[0px] rounded-2xl bg-cornflowerblue w-full h-full hidden" />
            <div className="absolute top-[2px] left-[33px] rounded-[14px] bg-royalblue-200 w-7 h-7 z-[1]" />
          </div>
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-gray">
            <div className="relative leading-[26px] font-medium">Annualy</div>
          </div>
        </div>
      </div>
      <section className="shadow-[11px_11px_25px_rgba(0,_0,_0,_0.04)] flex flex-row items-start justify-center py-0 px-6 box-border gap-[64px] max-w-full lg:flex-wrap lg:gap-[32px] mq750:gap-[16px]">
        <FrameComponent1
          baseFormPlan="Base Form Plan"
          separator="$4.99"
          imageSrc="/front-car.svg"
          lock="/lock.svg"
          lock1="/lock.svg"
          lock2="/lock.svg"
          lock3="/lock-3.svg"
          lock4="/lock-3.svg"
          lock5="/lock-3.svg"
          lock6="/lock-3.svg"
          lock7="/lock-3.svg"
          lock8="/lock-3.svg"
        />
        <FrameComponent1
          baseFormPlan="2nd Form Plan"
          separator="$9.99"
          imageSrc="/Ship.png"
          lock="/lock-9.svg"
          lock1="/lock-9.svg"
          lock2="/lock-9.svg"
          lock3="/lock-9.svg"
          lock4="/lock-9.svg"
          lock5="/lock-14.svg"
          lock6="/lock-14.svg"
          lock7="/lock-14.svg"
          lock8="/lock-14.svg"
          featurePairWidth="373px"
          featurePairFlexDirection="row"
          featurePairBackgroundColor="#135ce7"
          lockIconAlignSelf="unset"
          lockIconFlex="1"
          featuredFeatures1Color="#fff"
          featurePairColor="#fff"
          lockIconBorderTop="1px solid #fff"
          featurePairColor1="#fff"
          featurePairColor2="#fff"
          featurePairColor3="#fff"
          divColor="#fff"
          selectPlanColor="#fff"
          propColor="#6799f9"
          propColor1="#6799f9"
          propColor2="#6799f9"
          propColor3="#6799f9"
          propBackgroundColor="#fff"
          propColor4="#135ce7"
        />
        <FrameComponent1
          baseFormPlan="Final Form Plan"
          separator="$14.99"
          imageSrc="/Plane.png"
          lock="/lock.svg"
          lock1="/lock.svg"
          lock2="/lock.svg"
          lock3="/lock.svg"
          lock4="/lock.svg"
          lock5="/lock.svg"
          lock6="/lock.svg"
          lock7="/lock.svg"
          lock8="/lock.svg"
          featurePairWidth="325px"
          featurePairFlexDirection="column"
          featurePairBackgroundColor="unset"
          lockIconAlignSelf="stretch"
          lockIconFlex="unset"
          featuredFeatures1Color="#a8a8a8"
          featurePairColor="#0a1a36"
          lockIconBorderTop="1px solid #eaeaea"
          featurePairColor1="#0a1a36"
          featurePairColor2="#0a1a36"
          featurePairColor3="#0a1a36"
          divColor="#0a1a36"
          selectPlanColor="#0a1a36"
          propColor="#0a1a36"
          propColor1="#0a1a36"
          propColor2="#0a1a36"
          propColor3="#0a1a36"
          propBackgroundColor="#135ce7"
          propColor4="#fff"
        />
      </section>
    </div>
  );
};

Pricing.propTypes = {
  className: PropTypes.string,
};

export default Pricing;
