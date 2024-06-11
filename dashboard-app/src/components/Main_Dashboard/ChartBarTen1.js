import PropTypes from "prop-types";

const ChartBarTen1 = ({ className = "", number }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-center justify-start min-w-[250px] max-w-full text-center text-lg text-black font-display-xs-semibold ${className}`}
    >
      <div className="self-stretch shadow-[0px_12px_16px_-4px_rgba(0,_0,_0,_0.08)] rounded-3xl [background:linear-gradient(180deg,_rgba(210,_255,_240,_0),_#fff)] overflow-hidden flex flex-col items-start justify-start py-6 pr-2 pl-6 z-[1]">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-start gap-[24px]">
            <div className="relative uppercase font-semibold">
              Points awarded
            </div>
            <div className="relative text-5xl leading-[32px] font-semibold inline-block min-w-[48px] mq450:text-lgi mq450:leading-[26px]">
              {number}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90px] h-[90px] relative z-[2] mt-[-20px]">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_12px_16px_-4px_rgba(0,_0,_0,_0.08)] rounded-[50%] bg-white w-full h-full" />
        <img
          className="absolute top-[calc(50%_-_20px)] left-[calc(50%_-_22px)] w-[43px] h-10 object-contain"
          alt=""
          src="/asset-1-1@2x.png"
        />
      </div>
    </div>
  );
};

ChartBarTen1.propTypes = {
  className: PropTypes.string,
  number: PropTypes.string,
};

export default ChartBarTen1;
