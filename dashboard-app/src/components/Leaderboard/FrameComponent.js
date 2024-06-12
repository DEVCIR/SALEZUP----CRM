import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row  ml-20  pt-0 px-[55px] pb-[63px] box-border max-w-full lg:pl-[27px] lg:pr-[27px] lg:box-border mq750:pb-[41px] mq750:box-border ${className}`}
    >
      <div className="h-[580px] w-[1011px] relative max-w-full">
        <img
          className="absolute top-[409px] left-[177.1px] w-[17.7px] h-[21px] object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/eye@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] w-full h-full bg-[url('/public/714-2@2x.png')] bg-cover bg-no-repeat bg-[top] z-[3]">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
            alt=""
            src="/714-2@2x.png"
          />
          <img
            className="absolute top-[21px] left-[27px] w-[957px] h-[549px] object-cover z-[4]"
            alt=""
            src="/image-22@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
