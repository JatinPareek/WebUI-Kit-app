import PropTypes from "prop-types";

const Header1 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1438px] bg-white max-w-full flex flex-row items-start justify-between py-10 px-[120px] box-border top-[0] z-[99] sticky leading-[normal] tracking-[normal] gap-[20px] text-left text-lg text-gray font-be-vietnam-pro mq450:w-[1210px] mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[60px] mq900:pr-[60px] mq900:box-border ${className}`}
    >
      <div className="w-[230px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <div className="h-6 w-6 relative rounded-md bg-royalblue-200" />
          <a className="[text-decoration:none] relative font-semibold text-[inherit] whitespace-nowrap">
            YourLogo
          </a>
        </div>
      </div>
      <div className="w-[414px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-full text-base mq900:w-0">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq900:hidden">
          <a className="[text-decoration:none] relative font-medium text-[inherit]">
            Home
          </a>
          <div className="flex flex-row items-start justify-start gap-[4px]">
            <a className="[text-decoration:none] relative font-medium text-[inherit]">
              Service
            </a>
            <div className="flex flex-col items-start justify-start pt-[7.3px] px-0 pb-0">
              <img
                className="w-[9px] h-[5.4px] relative"
                alt=""
                src="/vector-1.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[4px]">
            <a className="[text-decoration:none] relative font-medium text-[inherit]">
              Product
            </a>
            <div className="flex flex-col items-start justify-start pt-[7.3px] px-0 pb-0">
              <img
                className="w-[9px] h-[5.4px] relative"
                alt=""
                src="/vector-1.svg"
              />
            </div>
          </div>
          <a className="[text-decoration:none] w-[71px] relative font-medium text-[inherit] inline-block whitespace-nowrap">
            About us
          </a>
        </div>
      </div>
      <div className="w-[228px] flex flex-row items-start justify-start gap-[20px] mq450:hidden">
        <button className="cursor-pointer py-2.5 px-[23px] bg-[transparent] flex flex-row items-start justify-start border-[1px] border-solid border-dimgray hover:bg-slategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-slategray-100">
          <a className="[text-decoration:none] relative text-base font-be-vietnam-pro text-dimgray text-left whitespace-nowrap">
            Sign Up
          </a>
        </button>
        <button className="cursor-pointer py-2.5 px-[23px] bg-royalblue-200 flex-1 flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-royalblue-200 hover:bg-royalblue-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue-100">
          <a className="[text-decoration:none] relative text-base font-medium font-be-vietnam-pro text-white text-left">
            Sign In
          </a>
        </button>
      </div>
    </div>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
