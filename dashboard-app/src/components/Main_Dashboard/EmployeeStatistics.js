import { useMemo } from "react";
import PropTypes from "prop-types";

const EmployeeStatistics = ({
  className = "",
  performanceVsTarget,
  propDisplay,
}) => {
  const performanceVsTargetStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div
      className={`self-stretch h-[328px] relative max-w-full text-right text-lg text-foundation-green-normal font-display-xs-semibold mq450:h-auto mq450:min-h-[328] ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-3xl bg-white w-full h-full" />
      <div className="absolute top-[32px] left-[24px] w-[1048px] flex flex-row items-center justify-between gap-[20px] max-w-full mq450:flex-wrap">
        <div
          className="relative leading-[18px] font-semibold"
          style={performanceVsTargetStyle}
        >
          {performanceVsTarget}
        </div>
        <div className="flex flex-row items-start justify-start gap-[24px] text-xs text-foundation-m-green-m-green-200">
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <div className="h-2 w-2 relative rounded-[50%] bg-foundation-m-green-m-green-200" />
            <div className="relative leading-[18px] inline-block min-w-[36px]">
              Actual
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <div className="h-2.5 w-2.5 relative rounded-[50%] [background:linear-gradient(180deg,_#072d20,_#179369)]" />
            <div className="relative leading-[18px] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#072d20,_#179369)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[37px]">
              Target
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[68px] left-[24px] w-[1017px] h-[260px] text-xs text-gray1-100">
        <div className="absolute top-[128.5px] left-[37.5px] box-border w-[980px] h-px opacity-[0.25] border-t-[1px] border-solid border-gray1-100" />
        <div className="absolute top-[88.5px] left-[37.5px] box-border w-[980px] h-px opacity-[0.25] border-t-[1px] border-solid border-gray1-100" />
        <div className="absolute top-[208.5px] left-[37.5px] box-border w-[980px] h-px opacity-[0.25] border-t-[1px] border-solid border-gray1-100" />
        <div className="absolute top-[168.5px] left-[37.5px] box-border w-[980px] h-px opacity-[0.25] border-t-[1px] border-solid border-gray1-100" />
        <div className="absolute top-[48.5px] left-[37.5px] box-border w-[980px] h-px opacity-[0.25] border-t-[1px] border-solid border-gray1-100" />
        <div className="absolute top-[8.5px] left-[37.5px] box-border w-[980px] h-px opacity-[0.25] border-t-[1px] border-solid border-gray1-100" />
        <div className="absolute top-[200px] left-[21px] leading-[18px] font-medium inline-block w-2 min-w-[8px]">
          0
        </div>
        <div className="absolute top-[160px] left-[5px] leading-[18px] font-medium inline-block w-6 min-w-[24px]">
          20k
        </div>
        <div className="absolute top-[120px] left-[5px] leading-[18px] font-medium inline-block w-6 min-w-[24px]">
          40k
        </div>
        <div className="absolute top-[80px] left-[5px] leading-[18px] font-medium inline-block w-6 min-w-[24px]">
          60k
        </div>
        <div className="absolute top-[40px] left-[5px] leading-[18px] font-medium inline-block w-6 min-w-[24px]">
          80k
        </div>
        <div className="absolute top-[0px] left-[0px] leading-[18px] font-medium inline-block w-[29px] min-w-[29px]">
          100k
        </div>
        <img
          className="absolute h-[calc(100%_-_100px)] w-[calc(100%_-_985px)] top-[49px] right-[910px] bottom-[51px] left-[75px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar.svg"
        />
        <img
          className="absolute h-[calc(100%_-_69px)] w-[calc(100%_-_984px)] top-[18px] right-[815px] bottom-[51px] left-[169px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar1.svg"
        />
        <img
          className="absolute h-[calc(100%_-_150px)] w-[calc(100%_-_986px)] top-[99px] right-[879px] bottom-[51px] left-[107px] rounded-t-8xs rounded-b-none max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar10.svg"
        />
        <img
          className="absolute h-[calc(100%_-_140px)] w-[calc(100%_-_986px)] top-[89px] right-[784px] bottom-[51px] left-[202px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar11.svg"
        />
        <img
          className="absolute h-[calc(100%_-_125px)] w-[calc(100%_-_985px)] top-[74px] right-[721px] bottom-[51px] left-[264px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar3.svg"
        />
        <img
          className="absolute h-[calc(100%_-_83px)] w-[calc(100%_-_984px)] top-[32px] right-[626px] bottom-[51px] left-[358px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar4.svg"
        />
        <img
          className="absolute h-[calc(100%_-_140px)] w-[calc(100%_-_986px)] top-[89px] right-[690px] bottom-[51px] left-[296px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar11.svg"
        />
        <img
          className="absolute h-[calc(100%_-_140px)] w-[calc(100%_-_986px)] top-[89px] right-[595px] bottom-[51px] left-[391px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar11.svg"
        />
        <img
          className="absolute h-[calc(100%_-_89px)] w-[calc(100%_-_986px)] top-[38px] right-[154px] bottom-[51px] left-[832px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar5.svg"
        />
        <img
          className="absolute h-[calc(100%_-_104px)] w-[calc(100%_-_986px)] top-[53px] right-[59px] bottom-[51px] left-[927px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar6.svg"
        />
        <img
          className="absolute h-[calc(100%_-_140px)] w-[calc(100%_-_984px)] top-[89px] right-[121px] bottom-[51px] left-[863px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar12.svg"
        />
        <img
          className="absolute h-[calc(100%_-_140px)] w-[calc(100%_-_985px)] top-[89px] right-[27px] bottom-[51px] left-[958px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar13.svg"
        />
        <img
          className="absolute h-[calc(100%_-_125px)] w-[calc(100%_-_985px)] top-[74px] right-[532px] bottom-[51px] left-[453px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar3.svg"
        />
        <img
          className="absolute h-[calc(100%_-_69px)] w-[calc(100%_-_984px)] top-[18px] right-[437px] bottom-[51px] left-[547px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar1.svg"
        />
        <img
          className="absolute h-[calc(100%_-_140px)] w-[calc(100%_-_984px)] top-[89px] right-[499px] bottom-[51px] left-[485px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar12.svg"
        />
        <img
          className="absolute h-[calc(100%_-_140px)] w-[calc(100%_-_985px)] top-[89px] right-[405px] bottom-[51px] left-[580px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar13.svg"
        />
        <img
          className="absolute h-[calc(100%_-_91px)] w-[calc(100%_-_985px)] top-[40px] right-[343px] bottom-[51px] left-[642px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar9.svg"
        />
        <img
          className="absolute h-[calc(100%_-_83px)] w-[calc(100%_-_984px)] top-[32px] right-[248px] bottom-[51px] left-[736px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar4.svg"
        />
        <img
          className="absolute h-[calc(100%_-_140px)] w-[calc(100%_-_984px)] top-[89px] right-[310px] bottom-[51px] left-[674px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar12.svg"
        />
        <img
          className="absolute h-[calc(100%_-_140px)] w-[calc(100%_-_985px)] top-[89px] right-[216px] bottom-[51px] left-[769px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar13.svg"
        />
        <div className="absolute top-[213px] left-[97px] leading-[18px] font-medium inline-block min-w-[21px]">
          Jan
        </div>
        <div className="absolute top-[213px] left-[191px] leading-[18px] font-medium inline-block min-w-[22px]">
          Feb
        </div>
        <div className="absolute top-[213px] left-[285px] leading-[18px] font-medium inline-block min-w-[23px]">
          Mar
        </div>
        <div className="absolute top-[213px] left-[381px] leading-[18px] font-medium inline-block min-w-[21px]">
          Jun
        </div>
        <div className="absolute top-[213px] left-[477px] leading-[18px] font-medium inline-block min-w-[17px]">
          Jul
        </div>
        <div className="absolute top-[213px] left-[569px] leading-[18px] font-medium inline-block min-w-[23px]">
          Aug
        </div>
        <div className="absolute top-[213px] left-[663px] leading-[18px] font-medium inline-block min-w-[23px]">
          Sep
        </div>
        <div className="absolute top-[213px] left-[759px] leading-[18px] font-medium inline-block min-w-[21px]">
          Oct
        </div>
        <div className="absolute top-[213px] left-[852px] leading-[18px] font-medium inline-block min-w-[23px]">
          Nov
        </div>
        <div className="absolute top-[213px] left-[947px] leading-[18px] font-medium inline-block min-w-[23px]">
          Dec
        </div>
        <div className="absolute top-[231px] left-[508px] leading-[18px] font-medium inline-block min-w-[37px]">
          Month
        </div>
      </div>
    </div>
  );
};

EmployeeStatistics.propTypes = {
  className: PropTypes.string,
  performanceVsTarget: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
};

export default EmployeeStatistics;
