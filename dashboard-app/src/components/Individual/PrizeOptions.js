import PropTypes from "prop-types";

const PrizeOptions = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border flex flex-row items-end justify-between pt-[9px] pb-9 pr-[77px] pl-[52px] max-w-full gap-[20px] z-[2] text-center text-xl text-black font-inter border-t-[3.5px] border-solid border-silver-100 mq975:flex-wrap ${className}`}
    >
      <div className="h-[298.5px] w-[1011px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border hidden max-w-full border-t-[3.5px] border-solid border-silver-100" />
      <div className="w-[360px] flex flex-col items-start justify-start gap-[10px] max-w-full text-left">
        <div className="flex flex-row items-start justify-start py-0 px-2.5">
          <b className="relative font-semibold inline-block min-w-[94px] z-[3] mq450:text-base">
            Add Prize
          </b>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start gap-[46px] text-center mq700:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-[15px] px-[22px] pb-2 box-border relative gap-[19px] min-w-[112px]">
            <img
              className="self-stretch h-[146px] relative max-w-full overflow-hidden shrink-0 object-cover z-[3]"
              loading="lazy"
              alt=""
              src="/image-33@2x.png"
            />
            <div className="flex flex-row items-start justify-start py-0 pr-9 pl-[35px]">
              <b className="relative font-semibold inline-block min-w-[57px] z-[3] mq450:text-base">
                CASH
              </b>
            </div>
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-7xl bg-gray-500 z-[4]" />
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border min-w-[142px] mq700:flex-1">
            <div className="flex flex-col items-end justify-start gap-[21px]">
              <img
                className="w-[142px] h-[142px] relative object-cover z-[3]"
                loading="lazy"
                alt=""
                src="/image-32@2x.png"
              />
              <div className="flex flex-row items-start justify-end py-0 pr-[19px] pl-6">
                <b className="relative font-semibold inline-block min-w-[99px] z-[3] mq450:text-base">
                  VOUCHER
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2">
        <div className="flex flex-col items-end justify-start gap-[9px]">
          <img
            className="w-[166px] h-[166px] relative object-cover z-[3]"
            loading="lazy"
            alt=""
            src="/image-34@2x.png"
          />
          <div className="flex flex-row items-start justify-end py-0 pr-[51px] pl-[57px]">
            <b className="relative font-semibold inline-block min-w-[58px] z-[3] mq450:text-base">
              FOOD
            </b>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2">
        <div className="flex flex-col items-end justify-start gap-[9px]">
          <img
            className="w-[182px] h-[181px] relative object-cover z-[3]"
            loading="lazy"
            alt=""
            src="/image-35@2x.png"
          />
          <div className="flex flex-row items-start justify-end py-0 px-[15px]">
            <b className="relative font-semibold inline-block min-w-[124px] z-[3] mq450:text-base">
              EXPERIENCE
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

PrizeOptions.propTypes = {
  className: PropTypes.string,
};

export default PrizeOptions;
