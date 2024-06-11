import PropTypes from "prop-types";

const EmployeeStatistics1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[328px] relative text-right text-lg text-foundation-green-normal font-display-xs-semibold ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-3xl bg-white w-full h-full" />
      <div className="absolute top-[32px] left-[24px] w-[202px] flex flex-row items-center justify-between gap-[20px]">
        <div className="relative leading-[18px] font-semibold">
          Commission Received
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
        <div className="absolute top-[160px] left-[5px] leading-[18px] font-medium inline-block w-6">
          2k
        </div>
        <div className="absolute top-[120px] left-[5px] leading-[18px] font-medium inline-block w-6">
          4k
        </div>
        <div className="absolute top-[80px] left-[5px] leading-[18px] font-medium inline-block w-6">
          6k
        </div>
        <div className="absolute top-[40px] left-[5px] leading-[18px] font-medium inline-block w-6">
          8k
        </div>
        <div className="absolute top-[0px] left-[0px] leading-[18px] font-medium inline-block w-[29px]">
          10k
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
        />
        <img
          className="absolute h-[calc(100%_-_140px)] w-[calc(100%_-_985px)] top-[89px] right-[27px] bottom-[51px] left-[958px] max-w-full overflow-hidden max-h-full"
          alt=""
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
          className="absolute h-[calc(100%_-_91px)] w-[calc(100%_-_985px)] top-[40px] right-[343px] bottom-[51px] left-[642px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar9.svg"
        />
        <img
          className="absolute h-[calc(100%_-_83px)] w-[calc(100%_-_984px)] top-[32px] right-[248px] bottom-[51px] left-[736px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-chart-bar4.svg"
        />
        <div className="absolute top-[213px] left-[82px] leading-[18px] font-medium inline-block min-w-[21px]">
          Jan
        </div>
        <div className="absolute top-[213px] left-[176px] leading-[18px] font-medium inline-block min-w-[22px]">
          Feb
        </div>
        <div className="absolute top-[213px] left-[270px] leading-[18px] font-medium inline-block min-w-[23px]">
          Mar
        </div>
        <div className="absolute top-[213px] left-[366px] leading-[18px] font-medium inline-block min-w-[21px]">
          Jun
        </div>
        <div className="absolute top-[213px] left-[462px] leading-[18px] font-medium inline-block min-w-[17px]">
          Jul
        </div>
        <div className="absolute top-[213px] left-[554px] leading-[18px] font-medium inline-block min-w-[23px]">
          Aug
        </div>
        <div className="absolute top-[213px] left-[648px] leading-[18px] font-medium inline-block min-w-[23px]">
          Sep
        </div>
        <div className="absolute top-[213px] left-[744px] leading-[18px] font-medium inline-block min-w-[21px]">
          Oct
        </div>
        <div className="absolute top-[213px] left-[837px] leading-[18px] font-medium inline-block min-w-[23px]">
          Nov
        </div>
        <div className="absolute top-[213px] left-[932px] leading-[18px] font-medium inline-block min-w-[23px]">
          Dec
        </div>
        <div className="absolute top-[231px] left-[508px] leading-[18px] font-medium inline-block min-w-[37px]">
          Month
        </div>
      </div>
    </div>
  );
};

EmployeeStatistics1.propTypes = {
  className: PropTypes.string,
};

export default EmployeeStatistics1;
