import PropTypes from "prop-types";

const ImageGallery = ({ className = "" }) => {
  return (
    <section
      className={`w-[1200px] flex flex-row flex-wrap items-start justify-center gap-[22px] max-w-full ${className}`}
    >
      <div className="w-[250px] flex flex-row items-start justify-start [transform:_rotate(180deg)]">
        <div className="h-80 w-60 relative bg-white hidden" />
        <div className="h-[330px] flex-1 relative">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] bg-royalblue-200 w-60" />
          <img
            className="absolute top-[0px] left-[10px] w-60 h-80 object-cover [transform:_rotate(-180deg)] z-[2]"
            loading="lazy"
            alt=""
            src="/replace-image1@2x.png"
          />
        </div>
      </div>
      <div className="flex-1 bg-silver flex flex-row items-start justify-start min-w-[426px] max-w-full mq600:min-w-full">
        <div className="self-stretch w-[656px] relative bg-silver hidden max-w-full" />
        <img
          className="h-[330px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/3@2x.png"
        />
      </div>
      <div className="w-[250px] flex flex-row items-start justify-start">
        <div className="h-[330px] flex-1 relative">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[10px] bg-royalblue-200 w-60" />
          <div className="absolute top-[0px] left-[0px] w-60 h-80 bg-[url('/public/replace-image1@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
              alt=""
              src="/replace-image1@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[2]"
              alt=""
              src="/replace-image1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

ImageGallery.propTypes = {
  className: PropTypes.string,
};

export default ImageGallery;
