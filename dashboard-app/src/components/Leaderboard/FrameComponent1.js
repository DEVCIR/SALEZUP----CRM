import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`w-[346px] flex flex-col items-start justify-start gap-[52px] max-w-full text-left text-13xl text-aquamarine font-nunito mq450:gap-[26px] ${className}`}
    >
      <div className="flex flex-row items-start justify-start pt-0 px-[27px] pb-[18px]">
        <img
          className="h-[57px] w-[243px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/whatsapp-image-20240405-at-2112-4@2x.png"
        />
      </div>
      <div className="w-[313px] flex flex-row items-start justify-start py-0 px-[77px] box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[7px]">
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
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[7px]">
            <b className="flex-1 relative font-bold [text-shadow:0px_0px_42.76px_#2d8085] z-[1] mq1050:text-7xl mq450:text-lgi">
              Manager
            </b>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full text-xl text-white">
        <div className="w-[288.4px] flex flex-row items-start justify-start py-0 px-[19px] box-border">
          <div className="flex-1 flex flex-row items-start justify-start gap-[17px]">
            <img
              className="h-[29px] w-[29px] relative object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/dashboard-layout@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <b className="self-stretch relative z-[1] mq450:text-base">
                Dashboard
              </b>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-gray flex flex-col items-start justify-start pt-[17.2px] px-[19px] pb-[18.2px] box-border gap-[20.6px] max-w-full z-[1] text-center font-inter">
          <div className="w-[346px] h-[104px] relative bg-gray hidden max-w-full" />
          <div className="relative font-medium inline-block min-w-[91px] z-[2] mq450:text-base">
            Summary
          </div>
          <div className="relative font-medium inline-block min-w-[123px] z-[2] mq450:text-base">
            Today’s Spiff
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
