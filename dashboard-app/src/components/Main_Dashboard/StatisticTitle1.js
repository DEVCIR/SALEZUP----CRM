import PropTypes from "prop-types";

const StatisticTitle1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[487px] relative max-w-full text-center text-lg text-foundation-green-normal font-display-xs-semibold mq975:h-auto mq975:min-h-[487] ${className}`}
    >
      <div className="absolute top-[-0.4px] left-[0px] shadow-[0px_12px_16px_-4px_rgba(0,_0,_0,_0.08)] rounded-3xl bg-white w-full overflow-hidden flex flex-col items-start justify-start p-6 box-border gap-[26px] max-w-full">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full text-left text-5xl mq975:flex-wrap">
          <div className="relative font-semibold inline-block max-w-full mq450:text-lgi">
            Agent Ranking : Performance Vs Actual
          </div>
          <div className="w-56 rounded-3xl flex flex-row items-start justify-start text-center text-base text-darkgray-100">
            <div className="flex-1 [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] rounded-tl-3xl rounded-tr-none rounded-br-none rounded-bl-3xl flex flex-row items-center justify-center py-[9px] px-2.5 border-t-[0.5px] border-solid border-gainsboro-100 border-b-[0.5px] border-l-[0.5px]">
              <div className="relative font-medium inline-block min-w-[30px]">
                Day
              </div>
            </div>
            <div className="shadow-[0px_4px_10px_2px_rgba(0,_164,_108,_0.15)] bg-darkgray-300 overflow-hidden flex flex-row items-center justify-center py-[9px] px-1.5 text-darkgray-200 border-t-[0.5px] border-solid border-gainsboro-200 border-r-[0.3px] border-b-[0.5px] border-l-[0.5px]">
              <div className="relative font-medium inline-block min-w-[43px]">
                Week
              </div>
            </div>
            <div className="shadow-[0px_4px_10px_2px_rgba(0,_164,_108,_0.15)] bg-white overflow-hidden flex flex-row items-center justify-center py-2.5 px-[3px] text-foundation-green-normal">
              <div className="relative font-medium inline-block min-w-[50px]">
                Month
              </div>
            </div>
            <div className="rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none flex flex-row items-center justify-center py-[9px] px-2.5 border-t-[0.5px] border-solid border-gainsboro-100 border-r-[0.5px] border-b-[0.5px]">
              <div className="relative font-medium inline-block min-w-[35px]">
                Year
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[22px] relative">
          <div className="absolute top-[0.4px] left-[992px] font-medium inline-block min-w-[56px]">
            Target
          </div>
          <div className="absolute top-[0px] left-[0px] font-medium inline-block min-w-[43px]">
            Rank
          </div>
        </div>
        <div className="self-stretch [filter:drop-shadow(0px_12px_16px_rgba(0,_0,_0,_0.08))] rounded-3xl flex flex-row flex-wrap items-center justify-center gap-[18px] max-w-full font-poppins">
          <div className="h-[350px] w-[45px] flex flex-col items-center justify-center">
            <div className="self-stretch flex-1 flex flex-col items-center justify-center gap-[28px]">
              <img
                className="w-11 h-[46px] relative object-contain"
                alt=""
                src="/asset-3@2x.png"
              />
              <img
                className="w-[45px] h-[34px] relative object-cover"
                alt=""
                src="/asset-2@2x.png"
              />
              <img
                className="w-11 h-[34px] relative object-contain"
                alt=""
                src="/asset-1@2x.png"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <i className="relative inline-block font-bold min-w-[13px]">
                  4
                </i>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center">
                <i className="relative inline-block font-bold min-w-[12px]">
                  5
                </i>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-[16px] min-w-[640px] max-w-full font-display-xs-semibold mq975:min-w-full">
            <div className="h-[38px] flex flex-row items-center justify-start max-w-full mq1025:h-auto">
              <div className="w-[757px] flex flex-row items-center justify-start gap-[140px] min-h-[55px] max-w-full shrink-0 mq1025:flex-wrap">
                <div className="relative font-medium inline-block min-w-[12px] shrink-0">
                  0
                </div>
                <div className="relative font-medium inline-block min-w-[35px] shrink-0">
                  500
                </div>
                <div className="relative font-medium inline-block min-w-[44px] shrink-0">
                  1000
                </div>
                <img
                  className="h-[45px] w-[46px] relative object-contain shrink-0"
                  alt=""
                  src="/image-43@2x.png"
                />
                <div className="relative font-medium inline-block min-w-[46px] shrink-0">
                  2000
                </div>
                <div className="h-[22px] relative font-medium inline-block shrink-0">
                  2000
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-4 pl-0 box-border gap-[16px] max-w-full text-base">
              <div className="self-stretch flex flex-row items-center justify-start max-w-full text-lg">
                <div className="flex-1 rounded-81xl [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.4)_16.5%,_rgba(5,_72,_49,_0.2))] flex flex-row items-center justify-start py-0 pr-6 pl-0 box-border gap-[16px] max-w-full mq975:flex-wrap mq975:p-5 mq975:box-border">
                  <img
                    className="h-12 w-12 relative rounded-[50%] object-cover"
                    alt=""
                    src="/ellipse-2@2x.png"
                  />
                  <div className="flex-1 flex flex-row items-center justify-between min-w-[165px] max-w-full gap-[20px] mq450:flex-wrap">
                    <div className="relative font-medium inline-block min-w-[117px]">
                      Jack Williams
                    </div>
                    <div className="relative text-xl font-medium inline-block min-w-[48px] mq450:text-base">
                      1800
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[930px] flex flex-row items-center justify-start max-w-full">
                <div className="flex-1 rounded-81xl [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.4)_16.5%,_rgba(5,_72,_49,_0.2))] flex flex-row items-center justify-start py-0 pr-6 pl-0 box-border gap-[16px] max-w-full mq975:flex-wrap mq975:p-5 mq975:box-border">
                  <img
                    className="h-12 w-12 relative rounded-[50%] object-cover"
                    alt=""
                    src="/ellipse-3@2x.png"
                  />
                  <div className="flex-1 flex flex-row items-center justify-between min-w-[154px] max-w-full gap-[20px] mq450:flex-wrap">
                    <div className="relative font-medium inline-block min-w-[107px]">
                      Elina Sanchez
                    </div>
                    <div className="relative text-xl font-medium inline-block min-w-[47px] mq450:text-base">
                      1750
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[895px] flex flex-row items-center justify-start max-w-full">
                <div className="flex-1 rounded-81xl [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.4)_16.5%,_rgba(5,_72,_49,_0.2))] flex flex-row items-center justify-start py-0 pr-6 pl-0 box-border gap-[16px] max-w-full mq975:flex-wrap mq975:p-5 mq975:box-border">
                  <img
                    className="h-12 w-12 relative rounded-[50%] object-cover"
                    alt=""
                    src="/ellipse-4@2x.png"
                  />
                  <div className="flex-1 flex flex-row items-center justify-between min-w-[190px] max-w-full gap-[20px] mq450:flex-wrap">
                    <div className="relative font-medium">Monica Fernandez</div>
                    <div className="relative text-xl font-medium inline-block min-w-[49px] mq450:text-base">
                      1600
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[622px] flex flex-row items-center justify-start max-w-full">
                <div className="flex-1 rounded-81xl [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.4)_16.5%,_rgba(5,_72,_49,_0.2))] flex flex-row items-center justify-start py-0 pr-6 pl-0 box-border gap-[16px] max-w-full mq725:flex-wrap mq725:p-5 mq725:box-border">
                  <img
                    className="h-10 w-10 relative rounded-[50%] object-cover"
                    alt=""
                    src="/ellipse-4@2x.png"
                  />
                  <div className="flex-1 flex flex-row items-center justify-between min-w-[132px] max-w-full gap-[20px] mq450:flex-wrap">
                    <div className="relative inline-block min-w-[93px]">{`Eddie Jones `}</div>
                    <div className="relative text-xl font-medium inline-block min-w-[39px] mq450:text-base">
                      900
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[598px] flex flex-row items-center justify-start max-w-full">
                <div className="flex-1 rounded-81xl [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.4)_16.5%,_rgba(5,_72,_49,_0.2))] flex flex-row items-center justify-start py-0 pr-6 pl-0 box-border gap-[16px] max-w-full mq725:flex-wrap mq725:p-5 mq725:box-border">
                  <img
                    className="h-10 w-10 relative rounded-[50%] object-cover"
                    alt=""
                    src="/ellipse-4@2x.png"
                  />
                  <div className="flex-1 flex flex-row items-center justify-between min-w-[184px] max-w-full gap-[20px] mq450:flex-wrap">
                    <div className="relative">Marcus J. Schnider</div>
                    <div className="relative text-xl font-medium inline-block min-w-[39px] mq450:text-base">
                      800
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[119.5px] left-[667.5px] box-border w-px h-[314px] border-r-[1px] border-dashed border-foundation-green-light-active" />
      <div className="absolute top-[119.5px] left-[847.5px] box-border w-px h-[314px] border-r-[1px] border-dashed border-foundation-green-light-active" />
      <div className="absolute top-[119.5px] left-[485.5px] box-border w-px h-[314px] border-r-[1px] border-dashed border-foundation-green-light-active" />
      <div className="absolute top-[119.5px] left-[327.5px] box-border w-px h-[314px] border-r-[1px] border-dashed border-foundation-green-light-active" />
    </div>
  );
};

StatisticTitle1.propTypes = {
  className: PropTypes.string,
};

export default StatisticTitle1;
