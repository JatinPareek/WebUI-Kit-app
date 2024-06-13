import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  smileFace,
  officialPartner,
  prop,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[176px] max-w-[212px] text-center text-lg text-dimgray font-be-vietnam-pro ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <img
          className="h-10 w-10 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={smileFace}
        />
      </div>
      <a className="[text-decoration:none] self-stretch relative text-[inherit]">
        {officialPartner}
      </a>
      <b className="self-stretch h-[61px] relative text-29xl font-semibold text-gray inline-block mq450:text-10xl mq750:text-19xl">
        {prop}
      </b>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  smileFace: PropTypes.string,
  officialPartner: PropTypes.string,
  prop: PropTypes.string,
};

export default FrameComponent;
