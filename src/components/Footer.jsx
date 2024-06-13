import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-gray max-w-full flex flex-col items-start justify-start py-20 px-[120px] box-border gap-[24px] leading-[normal] tracking-[normal] text-left text-lg text-white font-be-vietnam-pro mq800:pl-[60px] mq800:pr-[60px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px]">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <div className="h-6 w-6 relative rounded-md bg-white" />
          <a className="[text-decoration:none] relative font-semibold text-[inherit]">
            YourLogo
          </a>
        </div>
        <div className="flex flex-row items-start justify-start gap-[143px] max-w-full font-poppins mq800:gap-[71px] mq1150:hidden mq450:gap-[36px]">
          <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit]">
            About
          </a>
          <div className="w-24 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
            <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit]">
              Help
            </a>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-3.5 pl-0">
            <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit]">
              Legal
            </a>
          </div>
          <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] whitespace-nowrap">
            Social Media
          </a>
        </div>
      </div>
      <section className="w-[1168px] flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-base text-slategray-200 font-be-vietnam-pro mq1350:flex-wrap">
        <div className="w-[360px] flex flex-col items-start justify-start gap-[24px] min-w-[360px] max-w-full mq1350:flex-1 mq800:min-w-full">
          <p className="m-0 self-stretch h-[78px] relative leading-[26px] font-light inline-block">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore `}</p>
          <div className="relative text-lg leading-[28px] font-medium font-poppins text-white">
            ©2022 YourLogo. All right reserved
          </div>
        </div>
        <div className="w-[727px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[727px] max-w-full font-poppins mq1350:flex-1 mq1150:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq800:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[32px]">
              <a className="[text-decoration:none] relative leading-[20px] text-[inherit]">
                Company
              </a>
              <div className="relative leading-[20px]">Our Service</div>
              <div className="relative leading-[20px]">Testimonials</div>
              <div className="relative leading-[20px]">Featured</div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[32px]">
              <a className="[text-decoration:none] relative leading-[20px] text-[inherit]">
                Contact Us
              </a>
              <a className="[text-decoration:none] relative leading-[20px] text-[inherit]">
                FAQ
              </a>
              <div className="relative leading-[20px]">Term of service</div>
              <div className="relative leading-[20px]">Customer Service</div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[32px]">
              <a className="[text-decoration:none] relative leading-[20px] text-[inherit]">
                Privacy Policy
              </a>
              <div className="relative leading-[20px]">Copyright</div>
              <div className="relative leading-[20px]">Disclaimer</div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[32px]">
              <a className="[text-decoration:none] relative leading-[20px] text-[inherit]">
                Facebook
              </a>
              <a className="[text-decoration:none] relative leading-[20px] text-[inherit]">
                Twitter
              </a>
              <a className="[text-decoration:none] relative leading-[20px] text-[inherit]">
                Instagram
              </a>
              <div className="relative leading-[20px]">TikTok</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
