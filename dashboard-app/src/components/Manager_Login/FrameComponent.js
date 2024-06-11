import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`w-[251px] flex flex-col items-end justify-start gap-[43px] text-left text-13xl text-aquamarine font-nunito mq450:gap-[21px] ${className}`}
    >
      <div className="flex flex-row items-start justify-start pt-0 pb-[27px] pr-0 pl-2">
        <img
          className="h-[57px] w-[243px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/whatsapp-image-20240405-at-2112-4@2x.png"
        />
      </div>
      <div className="w-[226px] flex flex-row items-start justify-end py-0 px-[33px] box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
          <div className="w-[138px] flex flex-row items-start justify-start">
            <div className="h-[123px] flex-1 relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-snow box-border w-full h-full z-[1] border-[0px] border-solid border-teal" />
              <img
                className="absolute top-[3px] left-[24px] w-[92px] h-[111px] object-contain z-[2]"
                loading="lazy"
                alt=""
                src="/manager@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2">
            <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit [text-shadow:0px_0px_42.76px_#2d8085] z-[1] mq450:text-lgi mq1050:text-7xl">
              Manager
            </h1>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px gap-[17px] text-xl text-white">
        <img
          className="h-[29px] w-[29px] relative object-contain shrink-0 [debug_commit:69da668] z-[1]"
          loading="lazy"
          alt=""
          src="/dashboard-layout@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <b className="self-stretch relative shrink-0 [debug_commit:69da668] z-[1] mq450:text-base">
            Dashboard
          </b>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
