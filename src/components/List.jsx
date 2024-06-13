import { useMemo } from "react";
import PropTypes from "prop-types";

const List = ({
  className = "",
  menu,
  smartSegmentation,
  propBackgroundColor,
  propColor,
  propColor1,
}) => {
  const listStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const smartSegmentationStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const loremIpsumDolorStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      className={`flex-1 bg-white flex flex-col items-center justify-start p-6 box-border gap-[24px] min-w-[280px] max-w-full text-center text-5xl text-gray font-be-vietnam-pro ${className}`}
      style={listStyle}
    >
      <div className="flex flex-col items-center justify-start gap-[24px]">
        <img
          className="w-[52px] h-[52px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={menu}
        />
        <h3
          className="m-0 relative text-inherit leading-[26px] font-medium font-inherit mq450:text-lgi mq450:leading-[21px]"
          style={smartSegmentationStyle}
        >
          {smartSegmentation}
        </h3>
      </div>
      <p
        className="m-0 self-stretch h-[78px] relative text-base leading-[26px] font-light text-dimgray inline-block"
        style={loremIpsumDolorStyle}
      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna `}</p>
    </div>
  );
};

List.propTypes = {
  className: PropTypes.string,
  menu: PropTypes.string,
  smartSegmentation: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propColor: PropTypes.any,
  propColor1: PropTypes.any,
};

export default List;
