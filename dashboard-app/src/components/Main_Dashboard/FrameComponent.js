import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[433px] relative max-w-full text-left text-5xl text-foundation-green-normal font-display-xs-semibold mq725:h-auto mq725:min-h-[433] ${className}`}
    >
      <div className="absolute top-[-0.4px] left-[0px] shadow-[0px_12px_16px_-4px_rgba(0,_0,_0,_0.08)] rounded-3xl bg-white w-full overflow-hidden flex flex-col items-start justify-start p-6 box-border gap-[26px] max-w-full h-full">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq725:flex-wrap">
          <div className="relative font-semibold mq450:text-lgi">
            Team Ranking : SPIFF’S
          </div>
          <div className="w-56 rounded-3xl flex flex-row items-start justify-start text-center text-base text-darkgray-100">
            <div className="flex-1 rounded-tl-3xl rounded-tr-none rounded-br-none rounded-bl-3xl flex flex-row items-center justify-center py-[9px] px-2.5 border-t-[0.5px] border-solid border-gainsboro-100 border-b-[0.5px] border-l-[0.5px]">
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
        <div className="self-stretch [filter:drop-shadow(0px_12px_16px_rgba(0,_0,_0,_0.08))] rounded-3xl flex flex-row flex-wrap items-center justify-center gap-[18px] max-w-full text-center text-lg">
          <div className="flex flex-col items-center justify-center gap-[28px]">
            <div className="relative font-medium inline-block min-w-[43px]">
              Rank
            </div>
            <div className="w-[45px] flex flex-col items-center justify-center gap-[28px] font-poppins">
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
          <div className="flex-1 flex flex-col items-end justify-start gap-[16px] min-w-[640px] max-w-full mq975:min-w-full">
            <div className="w-[757px] flex flex-row items-center justify-start max-w-full">
              <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[20px] mq450:flex-wrap">
                <div className="relative font-medium inline-block min-w-[12px] mq450:w-full mq450:h-3">
                  0
                </div>
                <div className="relative font-medium inline-block min-w-[35px]">
                  500
                </div>
                <div className="relative font-medium inline-block min-w-[44px]">
                  1000
                </div>
                <div className="relative font-medium inline-block min-w-[43px]">
                  1500
                </div>
                <div className="relative font-medium inline-block min-w-[46px]">
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

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
