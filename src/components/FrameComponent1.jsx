import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent1 = ({
  className = "",
  baseFormPlan,
  separator,
  imageSrc,
  lock,
  lock1,
  lock2,
  lock3,
  lock4,
  lock5,
  lock6,
  lock7,
  lock8,
  featurePairWidth,
  featurePairFlexDirection,
  featurePairBackgroundColor,
  lockIconAlignSelf,
  lockIconFlex,
  featuredFeatures1Color,
  featurePairColor,
  lockIconBorderTop,
  featurePairColor1,
  featurePairColor2,
  featurePairColor3,
  divColor,
  selectPlanColor,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propBackgroundColor,
  propColor4,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: featurePairWidth,
      flexDirection: featurePairFlexDirection,
      backgroundColor: featurePairBackgroundColor,
    };
  }, [featurePairWidth, featurePairFlexDirection, featurePairBackgroundColor]);

  const planDetailsStyle = useMemo(() => {
    return {
      alignSelf: lockIconAlignSelf,
      flex: lockIconFlex,
    };
  }, [lockIconAlignSelf, lockIconFlex]);

  const baseFormPlanStyle = useMemo(() => {
    return {
      color: featuredFeatures1Color,
    };
  }, [featuredFeatures1Color]);

  const separatorStyle = useMemo(() => {
    return {
      color: featurePairColor,
    };
  }, [featurePairColor]);

  const lineDivStyle = useMemo(() => {
    return {
      borderTop: lockIconBorderTop,
    };
  }, [lockIconBorderTop]);

  const featuredFeatures1Style = useMemo(() => {
    return {
      color: featurePairColor1,
    };
  }, [featurePairColor1]);

  const featuredFeatures11Style = useMemo(() => {
    return {
      color: featurePairColor2,
    };
  }, [featurePairColor2]);

  const featuredFeatures12Style = useMemo(() => {
    return {
      color: featurePairColor3,
    };
  }, [featurePairColor3]);

  const featuredFeatures13Style = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  const featuredFeatures14Style = useMemo(() => {
    return {
      color: selectPlanColor,
    };
  }, [selectPlanColor]);

  const featuredFeatures15Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const featuredFeatures16Style = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const featuredFeatures17Style = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const featuredFeatures18Style = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const cTAStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const selectPlanStyle = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  return (
    <div
      className={`w-[325px] flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border max-w-full text-center text-5xl text-darkgray font-be-vietnam-pro ${className}`}
      style={frameDivStyle}
    >
      <div
        className="self-stretch flex flex-col items-start justify-start gap-[67px] max-w-full mq450:gap-[33px]"
        style={planDetailsStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[23.8px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <img
              className="h-16 w-16 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={imageSrc}
            />
          </div>
          <h3
            className="m-0 self-stretch relative text-inherit leading-[26px] font-medium font-inherit mq450:text-lgi mq450:leading-[21px]"
            style={baseFormPlanStyle}
          >
            {baseFormPlan}
          </h3>
          <div
            className="self-stretch h-[66px] relative text-33xl font-semibold text-gray inline-block whitespace-nowrap mq450:text-12xl mq1050:text-23xl"
            style={separatorStyle}
          >
            {separator}
          </div>
          <div
            className="self-stretch h-px relative box-border border-t-[1px] border-solid border-whitesmoke"
            style={lineDivStyle}
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full text-left text-base text-dimgray">
            <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-gray">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src={lock}
                />
                <div
                  className="w-[289px] relative leading-[24px] inline-block shrink-0"
                  style={featuredFeatures1Style}
                >
                  Featured Features 1
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-gray">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src={lock1}
                />
                <p
                  className="m-0 w-[289px] relative leading-[24px] inline-block shrink-0"
                  style={featuredFeatures11Style}
                >
                  Featured Features 1
                </p>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-gray">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src={lock2}
                />
                <p
                  className="m-0 w-[289px] relative leading-[24px] inline-block shrink-0"
                  style={featuredFeatures12Style}
                >
                  Featured Features 1
                </p>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src={lock3}
                />
                <p
                  className="m-0 w-[289px] relative leading-[24px] inline-block shrink-0"
                  style={featuredFeatures13Style}
                >
                  Featured Features 1
                </p>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src={lock4}
                />
                <p
                  className="m-0 w-[289px] relative leading-[24px] inline-block shrink-0"
                  style={featuredFeatures14Style}
                >
                  Featured Features 1
                </p>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src={lock5}
                />
                <div
                  className="w-[289px] relative leading-[24px] inline-block shrink-0"
                  style={featuredFeatures15Style}
                >
                  Featured Features 1
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src={lock6}
                />
                <div
                  className="w-[289px] relative leading-[24px] inline-block shrink-0"
                  style={featuredFeatures16Style}
                >
                  Featured Features 1
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src={lock7}
                />
                <div
                  className="w-[289px] relative leading-[24px] inline-block shrink-0"
                  style={featuredFeatures17Style}
                >
                  Featured Features 1
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src={lock8}
                />
                <div
                  className="w-[289px] relative leading-[24px] inline-block shrink-0"
                  style={featuredFeatures18Style}
                >
                  Featured Features 1
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-5 hidden" />
        <div className="self-stretch flex flex-row items-start justify-start pb-8 py-0 px-3">
          <button
            className="cursor-pointer [border:none] py-3 px-5 bg-royalblue-200 flex-1 flex flex-row items-start justify-center whitespace-nowrap hover:bg-royalblue-100"
            style={cTAStyle}
          >
            <div
              className="relative text-base leading-[24px] font-medium font-be-vietnam-pro text-white text-center"
              style={selectPlanStyle}
            >
              Select Plan
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  baseFormPlan: PropTypes.string,
  separator: PropTypes.string,
  imageSrc: PropTypes.string,
  lock: PropTypes.string,
  lock1: PropTypes.string,
  lock2: PropTypes.string,
  lock3: PropTypes.string,
  lock4: PropTypes.string,
  lock5: PropTypes.string,
  lock6: PropTypes.string,
  lock7: PropTypes.string,
  lock8: PropTypes.string,

  /** Style props */
  featurePairWidth: PropTypes.any,
  featurePairFlexDirection: PropTypes.any,
  featurePairBackgroundColor: PropTypes.any,
  lockIconAlignSelf: PropTypes.any,
  lockIconFlex: PropTypes.any,
  featuredFeatures1Color: PropTypes.any,
  featurePairColor: PropTypes.any,
  lockIconBorderTop: PropTypes.any,
  featurePairColor1: PropTypes.any,
  featurePairColor2: PropTypes.any,
  featurePairColor3: PropTypes.any,
  divColor: PropTypes.any,
  selectPlanColor: PropTypes.any,
  propColor: PropTypes.any,
  propColor1: PropTypes.any,
  propColor2: PropTypes.any,
  propColor3: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propColor4: PropTypes.any,
};

export default FrameComponent1;
