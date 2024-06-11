import User from "../components/Main_Dashboard/User";
import CommissionContainer from "../components/Main_Dashboard/CommissionContainer";
import EmployeeStatistics1 from "../components/Main_Dashboard/EmployeeStatistics1";
import EmployeeStatistics from "../components/Main_Dashboard/EmployeeStatistics";
import StatisticTitle1 from "../components/Main_Dashboard/StatisticTitle1";
import ChartBarTen2 from "../components/Main_Dashboard/ChartBarTen2";
import ChartBarTen1 from "../components/Main_Dashboard/ChartBarTen1";
import ChartBarTen from "../components/Main_Dashboard/ChartBarTen";
import StatisticTitle from "../components/Main_Dashboard/StatisticTitle";
import FrameComponent1 from "../components/Main_Dashboard/FrameComponent1";
import FrameComponent from "../components/Main_Dashboard/FrameComponent";

const DashboardManager = () => {
  return (
    <>   
    
      <div className=" rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl bg-whitesmoke overflow-hidden flex flex-col items-start justify-start p-12 box-border gap-[65px] max-w-full text-left text-foundation-green-normal">
       
        <div className="w-[298px] flex flex-row items-center justify-between gap-[20px] text-center">
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <b className="relative inline-block min-w-[129px] text-black text-4xl">
              Dashboard
            </b>
            <div className="relative text-lg">{`Manager > Dashboard > Summary`}</div>
          </div>
        </div>

        <div className="self-stretch shadow-[0px_12px_16px_-4px_rgba(0,_0,_0,_0.08)] rounded-3xl bg-white flex flex-col items-center justify-start p-6 box-border max-w-full">
          <User />
        </div>

        <CommissionContainer />

        <EmployeeStatistics1 />

        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full text-sm text-foundation-m-green-m-green-400">
          <div className="flex-1 shadow-[0px_12px_16px_-4px_rgba(0,_0,_0,_0.08)] rounded-3xl bg-white box-border flex flex-row items-start justify-start pt-[21px] pb-6 pr-6 pl-[27px] relative gap-[24px] min-w-[348px] min-h-[390px] max-w-full border-[0.5px] border-solid border-gainsboro-100 mq725:min-w-full">
           
            <div className="h-[27px] w-[141px] relative z-[0] text-5xl text-foundation-green-normal font-nunito">
              <div className="absolute top-[0px] left-[0px] w-[97px] h-[33px]">
                <b className="absolute top-[0px] left-[0px] inline-block min-w-[97px] w-full h-full text-2xl">
                  3 Mobile
                </b>
              </div>
              <img
                className="absolute top-[-2px] left-[108px] w-[36px] h-[31px] object-cover"
                alt=""
                src="/image-42@2x.png"
              />
            </div>

            <div className="h-64 w-52 absolute !m-[0] top-[93px] left-[30px] rounded-3xl bg-white box-border z-[1] border-[0.5px] border-solid border-gainsboro-100">
              <div className="absolute top-[8px] left-[13px] w-full flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative self-stretch">
                    Target Achievement
                  </div>
                  <div className="flex flex-row items-center justify-start p-1 text-center rounded-7xs bg-seagreen-300 text-seagreen-200">
                    <img
                      className="relative object-contain w-5 h-5"
                      alt=""
                      src="/arrow-right-alt@2x.png"
                    />
                    <div className="relative font-medium inline-block min-w-[33px]">
                      2.5%
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-center text-lg text-foundation-green-normal">
                  <div className="relative font-semibold inline-block min-w-[87px] whitespace-nowrap">
                    $230,000
                  </div>
                  <div className="relative text-sm font-medium text-foundation-white-dark-active text-left inline-block min-w-[110px]">
                    out of $400,000
                  </div>
                </div>
              </div>
              <div className="absolute top-[153px] left-[21px] w-40 h-[88px] text-center text-5xl text-gray-900">
                <div className="absolute h-[calc(100%_+_56px)] w-[calc(100%_-_16px)] top-[8px] right-[8px] bottom-[-64px] left-[8px] max-w-full max-h-full flex items-center justify-center">
                  <img
                    className="h-full w-full overflow-hidden object-contain absolute left-[0px] top-[-4px] [transform:scale(1.111)]"
                    alt=""
                    src="/ring3.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_+_6px)] left-[calc(50%_-_24.5px)] leading-[32px] font-semibold inline-block min-w-[50px] text-xl">
                  70%
                </div>
              </div>
            </div>
            <div className="w-[232px] !m-[0] absolute top-[93px] left-[274px] rounded-3xl bg-white box-border flex flex-col items-center justify-start p-[11px] gap-[24px] z-[2] border-[0.5px] border-solid border-gainsboro-100">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="flex flex-row items-center self-stretch justify-start">
                    <div className="relative flex-1">Forecast Finish</div>
                  </div>
                  <div className="flex flex-row items-center justify-start p-1 text-center rounded-7xs bg-seagreen-300 text-seagreen-200">
                    <img
                      className="relative object-contain w-5 h-5"
                      alt=""
                      src="/arrow-right-alt@2x.png"
                    />
                    <div className="relative font-medium inline-block min-w-[28px]">
                      18%
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-center text-lg text-foundation-green-normal">
                  <div className="relative font-semibold inline-block min-w-[88px] whitespace-nowrap">
                    $460,000
                  </div>
                  <div className="relative self-stretch text-sm font-medium text-left text-seagreen-200">
                    <span>+18%</span>
                    <span className="text-foundation-white-dark-active">
                      {" "}
                      increase vs last month
                    </span>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[88px] relative text-center text-5xl text-gray-900">
                <div className="absolute h-[calc(100%_+_56px)] w-[calc(100%_-_65px)] top-[8px] right-[32.5px] bottom-[-64px] left-[32.5px] max-w-full max-h-full flex items-center justify-center">
                  <img
                    className="h-full w-full overflow-hidden object-contain absolute left-[0px] top-[-4px] [transform:scale(1.111)]"
                    alt=""
                    src="/ring4.svg"
                  />
                </div>
                <div className="absolute top-[calc(30%_+_6px)] left-[calc(50%_-_30.5px)] leading-[32px] font-semibold inline-block min-w-[62px] text-xl">
                  125%
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 shadow-[0px_12px_16px_-4px_rgba(0,_0,_0,_0.08)] rounded-3xl bg-white flex flex-col items-start justify-start pt-[60px] px-6 pb-6 box-border gap-[24px] min-w-[348px] max-w-full text-29xl text-white mq725:min-w-full">
            <div className="self-stretch h-[152px] relative rounded-xl bg-[#072D20] overflow-hidden shrink-0 max-w-full">
              <div className="absolute top-[148.4px] left-[63.2px] rounded-[20.48px] bg-green-200/20 w-[162.1px] h-[142.1px] overflow-hidden [transform:_rotate(56.6deg)] [transform-origin:0_0]" />
              <div className="absolute top-[-114.3px] left-[145.1px] rounded-[20.48px] bg-green-200/20 w-[142.1px] h-[142.1px] overflow-hidden [transform:_rotate(56.6deg)] [transform-origin:0_0]" />
              <div className="absolute top-[-123.7px] left-[476.2px] rounded-[20.48px] bg-green-200/20 w-[142.1px] h-[142.1px] overflow-hidden [transform:_rotate(56.6deg)] [transform-origin:0_0]" />
              <div className="absolute top-[145.9px] left-[477px] rounded-[20.48px] bg-green-200/20 w-[142.1px] h-[142.1px] overflow-hidden [transform:_rotate(56.6deg)] [transform-origin:0_0]" />
              <div className="absolute top-[55.8px] left-[284.4px] rounded-[20.48px] bg-green-200/20 w-[83.7px] h-[83.7px] overflow-hidden [transform:_rotate(56.6deg)] [transform-origin:0_0]" />
              <div className="absolute top-[calc(50%_-_52px)] left-[calc(50%_-_232px)] w-[464px] h-[104px] flex flex-row items-center justify-between gap-[0px] [row-gap:20px] max-w-full">
                <div className="h-[126px] w-[249px] relative rounded-21xl overflow-hidden shrink-0">
                  <div className="absolute top-[124px] left-[116px] bg-skyblue-300 w-[8.6px] h-[2.5px] [transform:_rotate(110deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[88px] left-[172px] bg-skyblue-300 w-[5.6px] h-[2.5px] [transform:_rotate(30deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[18px] left-[95px] bg-paleturquoise-200 w-[8.6px] h-[1.5px] [transform:_rotate(135deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[105px] left-[134px] bg-paleturquoise-100 w-[6.6px] h-[1.5px] [transform:_rotate(-63deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[11px] left-[124px] bg-palegoldenrod-500 w-[8.6px] h-[2.5px] [transform:_rotate(34deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[77px] left-[81.8px] bg-plum-300 w-[7.6px] h-[1.5px] [transform:_rotate(32deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[34px] left-[176px] bg-fuchsia-200 w-[5.6px] h-[1.5px] [transform:_rotate(61deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[77px] left-[52px] bg-darkblue-100 w-[2.6px] h-[2.5px] [transform:_rotate(69deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[30px] left-[12px] bg-plum-200 w-[6.6px] h-[2.5px] [transform:_rotate(141deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[129px] left-[97px] bg-palegoldenrod-100 w-[2.6px] h-[1.5px] [transform:_rotate(-13deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[57px] left-[157px] bg-gold-100 w-[2.6px] h-[2.5px] [transform:_rotate(-83deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[67px] left-[47px] bg-cornflowerblue-100 w-[1.6px] h-[1.5px] [transform:_rotate(-102deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[9px] left-[104px] bg-skyblue-100 w-[2.6px] h-[2.5px] [transform:_rotate(-56deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[93px] left-[201px] bg-greenyellow-200 w-[7.6px] h-[1.5px] [transform:_rotate(5deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[121px] left-[44px] bg-paleturquoise-200 w-[9.6px] h-[2.5px] [transform:_rotate(12deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[111px] left-[83px] bg-mediumslateblue-400 w-[5.6px] h-[1.5px] [transform:_rotate(-20deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[62.7px] left-[122.7px] bg-deeppink-400 w-[7.6px] h-[1.5px] [transform:_rotate(117deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[84px] left-[181px] bg-palegoldenrod-200 w-[3.6px] h-[2.5px] [transform:_rotate(-149deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[9px] left-[31px] bg-deeppink-100 w-[7.6px] h-[2.5px] [transform:_rotate(100deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[118px] left-[159px] bg-paleturquoise-100 w-[1.6px] h-[3.5px] [transform:_rotate(-6deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[12px] left-[44px] bg-deeppink-400 w-[4.6px] h-[2.5px] [transform:_rotate(10deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[144px] left-[67px] bg-chocolate-100 w-[6.6px] h-[1.5px] [transform:_rotate(-164deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[23px] left-[83px] bg-cornflowerblue-500 w-[1.6px] h-[2.5px] [transform:_rotate(-107deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[121px] left-[91px] rounded-[50%] bg-palegoldenrod-500 w-[4.1px] h-[4.1px]" />
                  <div className="absolute top-[111px] left-[9px] rounded-[50%] bg-darkblue-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[142px] left-[115px] rounded-[50%] bg-orange-200 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[97px] left-[178px] rounded-[50%] bg-orangered-200 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[58px] left-[21px] rounded-[50%] bg-plum-300 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[137px] left-[93px] rounded-[50%] bg-gold-200 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[116px] left-[175px] rounded-[50%] bg-plum-100 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[89px] left-[104px] rounded-[50%] bg-fuchsia-200 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[90px] left-[6px] rounded-[50%] bg-darkblue-200 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[42px] left-[34px] rounded-[50%] bg-plum-400 w-[4.1px] h-[4.1px]" />
                  <div className="absolute top-[83px] left-[34px] rounded-[50%] bg-gold-300 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[77px] left-[34px] rounded-[50%] bg-paleturquoise-500 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[4px] left-[134px] rounded-[50%] bg-orange-400 w-[4.1px] h-[4.1px]" />
                  <div className="absolute top-[12px] left-[158px] rounded-[50%] bg-mediumslateblue-200 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[9px] left-[154px] rounded-[50%] bg-deeppink-200 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[102px] left-[60px] rounded-[50%] bg-skyblue-400 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[126px] left-[196px] rounded-[50%] bg-mediumslateblue-100 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[30px] left-[138px] rounded-[50%] bg-orange-100 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[125px] left-[77px] rounded-[50%] bg-cornflowerblue-200 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[124px] left-[68px] rounded-[50%] bg-plum-700 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[64px] left-[202px] rounded-[50%] bg-chocolate-100 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[86px] left-[56px] rounded-[50%] bg-plum-400 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[115px] left-[107px] rounded-[50%] bg-mediumslateblue-500 w-[4.1px] h-[4.1px]" />
                  <img
                    className="absolute top-[135.7px] left-[205px] w-[3.5px] h-[3.5px] object-contain"
                    alt=""
                    src="/bars.svg"
                  />
                  <img
                    className="absolute top-[58.8px] left-[20.7px] w-[7.3px] h-[7.3px] object-contain"
                    alt=""
                    src="/bars2.svg"
                  />
                  <img
                    className="absolute top-[62.1px] left-[196.3px] w-[4.9px] h-[4.9px] object-contain"
                    alt=""
                    src="/bars3.svg"
                  />
                  <img
                    className="absolute top-[57.8px] left-[29.1px] w-[4.9px] h-[4.9px] object-contain"
                    alt=""
                    src="/bars4.svg"
                  />
                  <img
                    className="absolute top-[45px] left-[220.7px] w-[4.3px] h-[4.3px] object-contain"
                    alt=""
                    src="/bars5.svg"
                  />
                  <img
                    className="absolute top-[104px] left-[184px] w-[3px] h-[3px] object-contain"
                    alt=""
                    src="/bars8.svg"
                  />
                  <img
                    className="absolute top-[123.4px] left-[66px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/chart-shape.svg"
                  />
                  <img
                    className="absolute top-[88.8px] left-[68px] w-[2.6px] h-[2.6px] object-contain"
                    alt=""
                    src="/chart-shape1.svg"
                  />
                  <img
                    className="absolute top-[87.1px] left-[33.5px] w-[5.5px] h-[5.5px] object-contain"
                    alt=""
                    src="/chart-shape2.svg"
                  />
                  <img
                    className="absolute top-[129.3px] left-[191px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars16.svg"
                  />
                  <img
                    className="absolute top-[-5.4px] left-[45.6px] w-[5.4px] h-[5.4px] object-contain"
                    alt=""
                    src="/polygon.svg"
                  />
                  <img
                    className="absolute top-[5.3px] left-[76px] w-[4.5px] h-[4.5px] object-contain"
                    alt=""
                    src="/bars18.svg"
                  />
                  <img
                    className="absolute top-[40.3px] left-[0px] w-[7px] h-[7px] object-contain"
                    alt=""
                    src="/polygon1.svg"
                  />
                  <img
                    className="absolute top-[141px] left-[28.8px] w-[2.5px] h-[2.5px] object-contain"
                    alt=""
                    src="/chart-shape3.svg"
                  />
                  <img
                    className="absolute top-[106.7px] left-[214.9px] w-[7.3px] h-[7.3px] object-contain"
                    alt=""
                    src="/chart-shape4.svg"
                  />
                  <img
                    className="absolute top-[66px] left-[148.2px] w-[2.9px] h-[2.9px] object-contain"
                    alt=""
                    src="/bars21.svg"
                  />
                  <img
                    className="absolute top-[113.6px] left-[26.1px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/chart-shape5.svg"
                  />
                  <img
                    className="absolute top-[102.9px] left-[203.2px] w-[2.8px] h-[2.8px] object-contain"
                    alt=""
                    src="/bars24.svg"
                  />
                  <img
                    className="absolute top-[27px] left-[41.6px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/bars28.svg"
                  />
                  <img
                    className="absolute top-[38px] left-[180.8px] w-[2.7px] h-[2.7px] object-contain"
                    alt=""
                    src="/bars29.svg"
                  />
                  <img
                    className="absolute top-[7.8px] left-[147px] w-[3.2px] h-[3.2px] object-contain"
                    alt=""
                    src="/polygon2.svg"
                  />
                  <img
                    className="absolute top-[24px] left-[11.5px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/bars31.svg"
                  />
                  <img
                    className="absolute top-[72.8px] left-[22.5px] w-[2.5px] h-[2.5px] object-contain"
                    alt=""
                    src="/bars32.svg"
                  />
                  <img
                    className="absolute top-[39.3px] left-[200.8px] w-[2.7px] h-[2.7px] object-contain"
                    alt=""
                    src="/bars33.svg"
                  />
                  <img
                    className="absolute top-[125px] left-[89.9px] w-[2.8px] h-[2.8px] object-contain"
                    alt=""
                    src="/bars36.svg"
                  />
                  <img
                    className="absolute top-[44px] left-[8.5px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars38.svg"
                  />
                  <img
                    className="absolute top-[74px] left-[139.7px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars39.svg"
                  />
                  <img
                    className="absolute top-[108.6px] left-[58.8px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/chart-indicator.svg"
                  />
                  <img
                    className="absolute top-[39px] left-[63.3px] w-[5.7px] h-[5.7px] object-contain"
                    alt=""
                    src="/bars42.svg"
                  />
                  <img
                    className="absolute top-[135px] left-[181.9px] w-[6.1px] h-[6.1px] object-contain"
                    alt=""
                    src="/chart-indicator1.svg"
                  />
                  <img
                    className="absolute top-[100.8px] left-[87px] w-[2.6px] h-[2.6px] object-contain"
                    alt=""
                    src="/bars44.svg"
                  />
                  <img
                    className="absolute top-[144.7px] left-[168.5px] w-[3.5px] h-[3.5px] object-contain"
                    alt=""
                    src="/bars46.svg"
                  />
                  <img
                    className="absolute top-[52.3px] left-[79.6px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars48.svg"
                  />
                  <img
                    className="absolute top-[91.2px] left-[183px] w-[5.6px] h-[5.6px] object-contain"
                    alt=""
                    src="/bars49.svg"
                  />
                  <img
                    className="absolute top-[16px] left-[198.2px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars52.svg"
                  />
                  <img
                    className="absolute top-[104.6px] left-[71.1px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/month-filter.svg"
                  />
                  <img
                    className="absolute top-[9.3px] left-[42.8px] w-[2.7px] h-[2.7px] object-contain"
                    alt=""
                    src="/bars55.svg"
                  />
                  <img
                    className="absolute top-[123.8px] left-[65.6px] w-[2.4px] h-[2.4px] object-contain"
                    alt=""
                    src="/star.svg"
                  />
                  <img
                    className="absolute top-[113px] left-[197.9px] w-[6.1px] h-[6.1px] object-contain"
                    alt=""
                    src="/target-container.svg"
                  />
                  <img
                    className="absolute top-[130.3px] left-[36.4px] w-[2.7px] h-[2.7px] object-contain"
                    alt=""
                    src="/week-target-container.svg"
                  />
                  <img
                    className="absolute top-[124.6px] left-[167.8px] w-[2.4px] h-[2.4px] object-contain"
                    alt=""
                    src="/bars62.svg"
                  />
                  <img
                    className="absolute top-[41.8px] left-[54px] w-[2.4px] h-[2.4px] object-contain"
                    alt=""
                    src="/bars64.svg"
                  />
                  <img
                    className="absolute top-[11px] left-[53.2px] w-[6.9px] h-[6.9px] object-contain"
                    alt=""
                    src="/star-one.svg"
                  />
                  <img
                    className="absolute top-[135.5px] left-[29px] w-[4.5px] h-[4.5px] object-contain"
                    alt=""
                    src="/star1.svg"
                  />
                  <img
                    className="absolute top-[52px] left-[119.9px] w-1 h-1 object-contain"
                    alt=""
                    src="/bars67.svg"
                  />
                  <img
                    className="absolute top-[130px] left-[178.3px] w-[5.7px] h-[5.7px] object-contain"
                    alt=""
                    src="/bars68.svg"
                  />
                  <div className="absolute top-[69px] left-[32px] bg-fuchsia-100 w-[1.6px] h-[3.5px] [transform:_rotate(37deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[78px] left-[168px] bg-gold-400 w-[9.6px] h-[2.5px] [transform:_rotate(-136deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[43px] left-[30px] bg-chocolate-600 w-[5.6px] h-[2.5px] [transform:_rotate(-144deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[23px] left-[2px] bg-plum-100 w-[7.6px] h-[3.5px] [transform:_rotate(162deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[85px] left-[173px] bg-mediumslateblue-300 w-[4.6px] h-[1.5px] [transform:_rotate(2deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[14px] left-[186px] bg-skyblue-100 w-[5.6px] h-[1.5px] [transform:_rotate(148deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[2px] left-[34px] bg-skyblue-200 w-[7.6px] h-[1.5px] [transform:_rotate(130deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[56px] left-[13px] bg-cornflowerblue-300 w-[7.6px] h-[2.5px] [transform:_rotate(-140deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[80px] left-[209px] bg-skyblue-300 w-[1.6px] h-[1.5px] [transform:_rotate(174deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[2px] left-[137px] bg-orange-200 w-[3.6px] h-[2.5px] [transform:_rotate(-172deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[138px] left-[161px] bg-paleturquoise-400 w-[7.6px] h-[2.5px] [transform:_rotate(-23deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[78.5px] left-[68.5px] bg-chocolate-500 w-[8.6px] h-[1.5px] [transform:_rotate(-173deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[117px] left-[183px] bg-greenyellow-200 w-[5.6px] h-[3.5px] [transform:_rotate(-154deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[74px] left-[13px] bg-skyblue-400 w-[7.6px] h-[1.5px] [transform:_rotate(-4deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[79px] left-[33px] bg-chocolate-200 w-[7.6px] h-[1.5px] [transform:_rotate(134deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[22px] left-[214px] bg-chocolate-300 w-[1.6px] h-[1.5px] [transform:_rotate(154deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[82px] left-[156px] bg-fuchsia-200 w-[3.6px] h-[3.5px] [transform:_rotate(132deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[6px] left-[15px] bg-chocolate-400 w-[3.6px] h-[2.5px] [transform:_rotate(53deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[128px] left-[213px] bg-greenyellow-300 w-[4.6px] h-[1.5px] [transform:_rotate(166deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[116px] left-[199px] bg-orangered-300 w-[7.6px] h-[1.5px] [transform:_rotate(-175deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[122px] left-[145px] bg-orange-200 w-[2.6px] h-[1.5px] [transform:_rotate(64deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[78px] left-[208px] bg-darkblue-300 w-[4.6px] h-[2.5px] [transform:_rotate(-60deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[86px] left-[123px] bg-orange-300 w-[3.6px] h-[2.5px] [transform:_rotate(-53deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[11px] left-[7px] bg-plum-500 w-[3.6px] h-[2.5px] [transform:_rotate(-136deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[55px] left-[195px] bg-orangered-100 w-[7.6px] h-[2.5px] [transform:_rotate(-21deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[39px] left-[222px] bg-gold-500 w-[8.6px] h-[1.5px] [transform:_rotate(-63deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[33px] left-[130px] bg-deeppink-300 w-[6.6px] h-[2.5px] [transform:_rotate(173deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[128px] left-[84px] bg-plum-600 w-[5.6px] h-[1.5px] [transform:_rotate(2deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[65px] left-[180px] bg-greenyellow-100 w-[3.6px] h-[2.5px] [transform:_rotate(-18deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[86px] left-[7px] bg-fuchsia-300 w-[2.6px] h-[2.5px] [transform:_rotate(-97deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[68px] left-[155px] bg-gold-100 w-[4.6px] h-[3.5px] [transform:_rotate(75deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[48px] left-[143px] bg-orangered-300 w-[7.6px] h-[1.5px] [transform:_rotate(143deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[122px] left-[118px] bg-cornflowerblue-400 w-[7.6px] h-[1.5px] [transform:_rotate(133deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[4px] left-[177px] bg-palegoldenrod-500 w-[8.6px] h-[1.5px] [transform:_rotate(-66deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[38px] left-[152px] bg-plum-700 w-[1.6px] h-[1.5px] [transform:_rotate(132deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[76px] left-[176px] rounded-[50%] bg-cornflowerblue-500 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[99px] left-[201px] rounded-[50%] bg-orangered-200 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[35px] left-[129px] rounded-[50%] bg-paleturquoise-300 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[10px] left-[36px] rounded-[50%] bg-paleturquoise-200 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[45px] left-[29px] rounded-[50%] bg-greenyellow-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[15px] left-[202px] rounded-[50%] bg-mediumslateblue-400 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[0px] left-[131px] rounded-[50%] bg-greenyellow-100 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[81px] left-[218px] rounded-[50%] bg-chocolate-500 w-[4.1px] h-[4.1px]" />
                  <div className="absolute top-[24px] left-[113px] rounded-[50%] bg-darkblue-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[48px] left-[44px] rounded-[50%] bg-chocolate-500 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[100px] left-[27px] rounded-[50%] bg-greenyellow-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[84px] left-[128px] rounded-[50%] bg-deeppink-400 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[88px] left-[56px] rounded-[50%] bg-gold-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[57px] left-[125px] rounded-[50%] bg-gold-400 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[60px] left-[11px] rounded-[50%] bg-mediumslateblue-500 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[57px] left-[124px] rounded-[50%] bg-palegoldenrod-500 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[82px] left-[62px] rounded-[50%] bg-palegoldenrod-300 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[36px] left-[106px] rounded-[50%] bg-palegoldenrod-400 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[66px] left-[101px] rounded-[50%] bg-paleturquoise-300 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[37px] left-[97px] rounded-[50%] bg-skyblue-300 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[85px] left-[165px] rounded-[50%] bg-paleturquoise-400 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[101px] left-[40px] rounded-[50%] bg-plum-100 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[48px] left-[154px] rounded-[50%] bg-chocolate-600 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[117px] left-[131px] rounded-[50%] bg-palegoldenrod-500 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[61px] left-[178px] rounded-[50%] bg-greenyellow-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[5px] left-[77px] rounded-[50%] bg-fuchsia-400 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[0px] left-[26px] rounded-[50%] bg-paleturquoise-500 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[53px] left-[1px] rounded-[50%] bg-skyblue-400 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[59px] left-[181px] rounded-[50%] bg-gold-500 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[100px] left-[93px] rounded-[50%] bg-orangered-300 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[33px] left-[14px] rounded-[50%] bg-darkblue-500 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[83px] left-[136px] rounded-[50%] bg-fuchsia-400 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[97px] left-[222px] rounded-[50%] bg-orange-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[92px] left-[100px] rounded-[50%] bg-fuchsia-500 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[92px] left-[198px] rounded-[50%] bg-darkblue-500 w-[3.1px] h-[3.1px]" />
                  <img
                    className="absolute top-[14.5px] left-[182.1px] w-[4.5px] h-[4.5px] object-contain"
                    alt=""
                    src="/bars69.svg"
                  />
                  <img
                    className="absolute top-[21.8px] left-[28.7px] w-[5.3px] h-[5.3px] object-contain"
                    alt=""
                    src="/polygon3.svg"
                  />
                  <img
                    className="absolute top-[6.5px] left-[210.5px] w-[4.5px] h-[4.5px] object-contain"
                    alt=""
                    src="/bars70.svg"
                  />
                  <img
                    className="absolute top-[89.2px] left-[141px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars71.svg"
                  />
                  <img
                    className="absolute top-[49.4px] left-[20.8px] w-[2.6px] h-[2.6px] object-contain"
                    alt=""
                    src="/bars72.svg"
                  />
                  <img
                    className="absolute top-[40px] left-[-0.2px] w-[4.2px] h-[4.2px] object-contain"
                    alt=""
                    src="/bars73.svg"
                  />
                  <img
                    className="absolute top-[97.7px] left-[-1.1px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/chart-bar.svg"
                  />
                  <img
                    className="absolute top-[109px] left-[98.8px] w-[2.5px] h-[2.5px] object-contain"
                    alt=""
                    src="/bars75.svg"
                  />
                  <img
                    className="absolute top-[8px] left-[84.1px] w-[2.9px] h-[2.9px] object-contain"
                    alt=""
                    src="/bars77.svg"
                  />
                  <img
                    className="absolute top-[55.6px] left-[137.1px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/bars78.svg"
                  />
                  <img
                    className="absolute top-[85.9px] left-[198px] w-[5.3px] h-[5.3px] object-contain"
                    alt=""
                    src="/chart-bar1.svg"
                  />
                  <img
                    className="absolute top-[41px] left-[183.3px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars79.svg"
                  />
                  <img
                    className="absolute top-[80.9px] left-[151.8px] w-[5.2px] h-[5.2px] object-contain"
                    alt=""
                    src="/bars81.svg"
                  />
                  <img
                    className="absolute top-[110.3px] left-[163.6px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars82.svg"
                  />
                  <img
                    className="absolute top-[110px] left-[23px] w-[3px] h-[3px] object-contain"
                    alt=""
                    src="/chart-bar2.svg"
                  />
                  <img
                    className="absolute top-[24px] left-[2.9px] w-1.5 h-1.5 object-contain"
                    alt=""
                    src="/polygon4.svg"
                  />
                  <img
                    className="absolute top-[120.4px] left-[101.9px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars86.svg"
                  />
                  <img
                    className="absolute top-[89.8px] left-[194px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/chart-bar3.svg"
                  />
                  <img
                    className="absolute top-[141px] left-[21px] w-[5.1px] h-[5.1px] object-contain"
                    alt=""
                    src="/polygon6.svg"
                  />
                  <img
                    className="absolute top-[38px] left-[212.5px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/bars90.svg"
                  />
                  <img
                    className="absolute top-[26px] left-[61.1px] w-[5.5px] h-[5.5px] object-contain"
                    alt=""
                    src="/bars93.svg"
                  />
                  <img
                    className="absolute top-[68px] left-[-0.1px] w-[5.2px] h-[5.2px] object-contain"
                    alt=""
                    src="/bars94.svg"
                  />
                  <img
                    className="absolute top-[125.8px] left-[215.6px] w-[2.4px] h-[2.4px] object-contain"
                    alt=""
                    src="/bars95.svg"
                  />
                  <img
                    className="absolute top-[43px] left-[76.3px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars97.svg"
                  />
                  <img
                    className="absolute top-[125.6px] left-[209px] w-[3.6px] h-[3.6px] object-contain"
                    alt=""
                    src="/bars98.svg"
                  />
                  <img
                    className="absolute top-[72.1px] left-[183px] w-[5.5px] h-[5.5px] object-contain"
                    alt=""
                    src="/bars100.svg"
                  />
                  <img
                    className="absolute top-[103.8px] left-[28.6px] w-[2.4px] h-[2.4px] object-contain"
                    alt=""
                    src="/polygon7.svg"
                  />
                  <img
                    className="absolute top-[126.5px] left-[137.4px] w-[5.5px] h-[5.5px] object-contain"
                    alt=""
                    src="/bars103.svg"
                  />
                  <img
                    className="absolute top-[90.8px] left-[111.8px] w-[2.2px] h-[2.2px] object-contain"
                    alt=""
                    src="/polygon5.svg"
                  />
                  <img
                    className="absolute top-[44.9px] left-[99.5px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars105.svg"
                  />
                  <img
                    className="absolute top-[35.2px] left-[30.6px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars106.svg"
                  />
                  <img
                    className="absolute top-[91.1px] left-[87px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars107.svg"
                  />
                  <img
                    className="absolute top-[89.3px] left-[22px] w-[4.8px] h-[4.8px] object-contain"
                    alt=""
                    src="/polygon8.svg"
                  />
                  <img
                    className="absolute top-[45px] left-[151.1px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars110.svg"
                  />
                  <img
                    className="absolute top-[101.9px] left-[9.3px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/polygon9.svg"
                  />
                  <img
                    className="absolute top-[72.9px] left-[131px] w-[3px] h-[3px] object-contain"
                    alt=""
                    src="/bars112.svg"
                  />
                  <img
                    className="absolute top-[43px] left-[95.3px] w-[2.8px] h-[2.8px] object-contain"
                    alt=""
                    src="/bars113.svg"
                  />
                  <img
                    className="absolute top-[120px] left-[51.9px] w-[6.1px] h-[6.1px] object-contain"
                    alt=""
                    src="/star-team-target.svg"
                  />
                  <img
                    className="absolute top-[135.1px] left-[58px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/star-team-target1.svg"
                  />
                  <img
                    className="absolute top-[123.8px] left-[4.3px] w-[2.7px] h-[2.7px] object-contain"
                    alt=""
                    src="/star-team-target2.svg"
                  />
                  <img
                    className="absolute top-[37.9px] left-[147px] w-[5.2px] h-[5.2px] object-contain"
                    alt=""
                    src="/bars119.svg"
                  />
                  <img
                    className="absolute top-[29.7px] left-[142.2px] w-[5.8px] h-[5.8px] object-contain"
                    alt=""
                    src="/star-two.svg"
                  />
                  <img
                    className="absolute top-[43.9px] left-[93px] w-[3.3px] h-[3.3px] object-contain"
                    alt=""
                    src="/star-three.svg"
                  />
                  <img
                    className="absolute top-[59px] left-[35.1px] w-[5.6px] h-[5.6px] object-contain"
                    alt=""
                    src="/bars120.svg"
                  />
                  <img
                    className="absolute top-[120.9px] left-[127px] w-1 h-1 object-contain"
                    alt=""
                    src="/bars121.svg"
                  />
                  <img
                    className="absolute top-[110.8px] left-[33px] w-[4.9px] h-[4.9px] object-contain"
                    alt=""
                    src="/star-team-target3.svg"
                  />
                  <img
                    className="absolute top-[129.4px] left-[22.5px] w-[5.5px] h-[5.5px] object-contain"
                    alt=""
                    src="/star-team-target4.svg"
                  />
                  <img
                    className="absolute top-[125px] left-[122.4px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars127.svg"
                  />
                  <img
                    className="absolute top-[62px] left-[207.1px] w-[5.6px] h-[5.6px] object-contain"
                    alt=""
                    src="/bars129.svg"
                  />
                  <img
                    className="absolute top-[115.8px] left-[133px] w-[2.4px] h-[2.4px] object-contain"
                    alt=""
                    src="/bars131.svg"
                  />
                  <img
                    className="absolute top-[105.6px] left-[112.1px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/bars133.svg"
                  />
                  <img
                    className="absolute top-[102.9px] left-[203px] w-[3px] h-[3px] object-contain"
                    alt=""
                    src="/bars135.svg"
                  />
                  <img
                    className="absolute top-[8.6px] left-[24px] w-[4.5px] h-[4.5px] object-contain"
                    alt=""
                    src="/bars139.svg"
                  />
                  <img
                    className="absolute top-[104.9px] left-[126px] w-[3.8px] h-[3.8px] object-contain"
                    alt=""
                    src="/bars140.svg"
                  />
                  <img
                    className="absolute top-[91.5px] left-[71.3px] w-[4.5px] h-[4.5px] object-contain"
                    alt=""
                    src="/star-team-target5.svg"
                  />
                  <img
                    className="absolute top-[115.9px] left-[182.2px] w-[3.8px] h-[3.8px] object-contain"
                    alt=""
                    src="/bars144.svg"
                  />
                  <img
                    className="absolute top-[15.2px] left-[71px] w-[6.8px] h-[6.8px] object-contain"
                    alt=""
                    src="/star-team-target6.svg"
                  />
                  <img
                    className="absolute top-[44px] left-[162.7px] w-[2.5px] h-[2.5px] object-contain"
                    alt=""
                    src="/bars147.svg"
                  />
                  <img
                    className="absolute top-[76px] left-[105px] w-[4.2px] h-[4.2px]"
                    alt=""
                    src="/bars148.svg"
                  />
                  <img
                    className="absolute top-[121px] left-[75.6px] w-[3.6px] h-[3.6px] object-contain"
                    alt=""
                    src="/bars149.svg"
                  />
                  <img
                    className="absolute top-[76.2px] left-[173px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars151.svg"
                  />
                  <img
                    className="absolute top-[26.7px] left-[160.8px] w-[6.3px] h-[6.3px] object-contain"
                    alt=""
                    src="/star-four.svg"
                  />
                  <img
                    className="absolute top-[113.7px] left-[48.7px] w-[7.3px] h-[7.3px] object-contain"
                    alt=""
                    src="/star-team-target7.svg"
                  />
                  <img
                    className="absolute top-[89.1px] left-[13px] w-[2.9px] h-[2.9px] object-contain"
                    alt=""
                    src="/star-team-target8.svg"
                  />
                  <img
                    className="absolute top-[131.8px] left-[103.6px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars155.svg"
                  />
                  <img
                    className="absolute top-[-1.7px] left-[114.8px] w-[2.7px] h-[2.7px] object-contain"
                    alt=""
                    src="/bars157.svg"
                  />
                  <img
                    className="absolute top-[101px] left-[185px] w-[6.4px] h-[6.4px] object-contain"
                    alt=""
                    src="/bars158.svg"
                  />
                  <img
                    className="absolute top-[125px] left-[116.9px] w-[3px] h-[3px] object-contain"
                    alt=""
                    src="/bars160.svg"
                  />
                  <img
                    className="absolute top-[29px] left-[42px] w-[2.3px] h-[2.3px] object-contain"
                    alt=""
                    src="/star-five.svg"
                  />
                  <img
                    className="absolute top-[44.8px] left-[32.2px] w-[4.8px] h-[4.8px] object-contain"
                    alt=""
                    src="/bars162.svg"
                  />
                  <div className="absolute top-[calc(50%_-_39.5px)] left-[24px] flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative font-semibold whitespace-nowrap text-white text-4xl">
                      $3000
                    </div>
                    <div className="relative tracking-[0.04em] text-white text-xl">
                      Forecast Commission
                    </div>
                  </div>
                  <div className="absolute top-[50.4px] left-[122.9px] bg-gold-100 w-[9.6px] h-[2.5px] [transform:_rotate(-136deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[44px] left-[74px] bg-greenyellow-100 w-[3.6px] h-[2.5px] [transform:_rotate(-18deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[38px] left-[75px] rounded-[50%] bg-gold-500 w-[1.1px] h-[1.1px]" />
                  <img
                    className="absolute top-[61.4px] left-[58.2px] w-[2.9px] h-[2.9px] object-contain"
                    alt=""
                    src="/bars163.svg"
                  />
                  <img
                    className="absolute top-[70.4px] left-[48.6px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars164.svg"
                  />
                  <img
                    className="absolute top-[52px] left-[46px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/bars165.svg"
                  />
                  <div className="absolute top-[61.1px] left-[101.5px] bg-gold-100 w-[9.6px] h-[2.5px] [transform:_rotate(150deg)] [transform-origin:0_0]" />
                </div>
                <div className="w-[215px] relative text-sm font-medium text-right inline-block">
                  <p className="m-0">
                    <span className="text-lime">+2.5%</span>
                    <span>{` increase `}</span>
                  </p>
                  <p className="m-0">vs last month</p>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-lg text-foundation-green-normal mq725:flex-wrap">
              
              <div className="flex-1 rounded-xl [background:linear-gradient(180deg,_rgba(210,_255,_240,_0),_#fff)] box-border flex flex-col items-start justify-between p-[11px] min-w-[174px] border-[0.5px] border-solid border-gainsboro-100">
                <div className="self-stretch h-[106px] flex flex-col items-start justify-between">
                  <div className="w-[122.7px] relative font-semibold inline-block text-black">
                    Current Run Rate Per Day
                  </div>
                  <div className="relative self-stretch font-semibold  whitespace-nowrap text-black">
                    $15,000
                  </div>
                </div>
              </div>

              <div className="flex-1 rounded-xl [background:linear-gradient(180deg,_rgba(210,_255,_240,_0),_#fff)] box-border flex flex-col items-start justify-between p-[11px] min-w-[174px] border-[0.5px] border-solid border-gainsboro-100">
                <div className="self-stretch h-[106px] flex flex-col items-start justify-between">
                  <div className="w-[122.7px] relative font-semibold inline-block text-black">
                    Required Run Rate Per Day
                  </div>
                  <div className="relative self-stretch font-semibold  whitespace-nowrap text-black">
                    $18,000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <EmployeeStatistics performanceVsTarget="Performance Vs Target" />
        <StatisticTitle1 />
        <div className="self-stretch rounded-3xl bg-white flex flex-col items-center justify-center p-6 box-border gap-[24px] max-w-full text-right">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq725:flex-wrap">
            <div className="relative leading-[18px] font-semibold">
              SPIFF Summary
            </div>
            <div className="flex flex-row items-start justify-start w-56 text-base text-center rounded-3xl text-darkgray-100">
              <div className="flex-1 rounded-tl-3xl rounded-tr-none rounded-br-none rounded-bl-3xl flex flex-row items-center justify-center py-[9px] px-2.5 border-t-[0.5px] border-solid border-gainsboro-100 border-b-[0.5px] border-l-[0.5px]">
                <div className="relative font-medium inline-block min-w-[43px]">
                  Week
                </div>
              </div>
              <div className="flex-1 shadow-[0px_4px_10px_2px_rgba(0,_164,_108,_0.15)] bg-white overflow-hidden flex flex-row items-center justify-center p-2.5 text-foundation-green-normal">
                <div className="relative font-medium inline-block min-w-[50px]">
                  Month
                </div>
              </div>
              <div className="flex-1 rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none flex flex-row items-center justify-center py-[9px] px-2.5 border-t-[0.5px] border-solid border-gainsboro-100 border-r-[0.5px] border-b-[0.5px]">
                <div className="relative font-medium inline-block min-w-[35px]">
                  Year
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
            <ChartBarTen2 number="5" />
            <ChartBarTen1 number="600" />
            <ChartBarTen number="$750" />
          </div>
        </div>
        <StatisticTitle />
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full text-sm text-foundation-m-green-m-green-400">
          <div className="flex-1 shadow-[0px_12px_16px_-4px_rgba(0,_0,_0,_0.08)] rounded-3xl bg-white box-border flex flex-row items-start justify-start pt-[21px] pb-6 pr-6 pl-[27px] relative gap-[24px] min-w-[348px] min-h-[390px] max-w-full border-[0.5px] border-solid border-gainsboro-100 mq725:min-w-full">
           
          <div className="h-[27px] w-[141px] relative z-[0] text-5xl text-foundation-green-normal font-nunito">
              <div className="absolute top-[0px] left-[0px] w-[97px] h-[33px]">
                <b className="absolute top-[0px] left-[0px] inline-block min-w-[97px] w-full h-full text-2xl">
                  Coca Cola
                </b>
              </div>
              <img
                className="absolute top-[-2px] left-[108px] w-[36px] h-[31px] object-cover"
                alt=""
                src="/image-42@2x.png"
              />
            </div>

            <div className="h-64 w-52 absolute !m-[0] top-[93px] left-[30px] rounded-3xl bg-white box-border z-[1] border-[0.5px] border-solid border-gainsboro-100">
              <div className="absolute top-[8px] left-[13px] w-full flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative self-stretch">
                    Target Achievement
                  </div>
                  <div className="flex flex-row items-center justify-start p-1 text-center rounded-7xs bg-seagreen-300 text-seagreen-200">
                    <img
                      className="relative object-contain w-5 h-5"
                      alt=""
                      src="/arrow-right-alt@2x.png"
                    />
                    <div className="relative font-medium inline-block min-w-[33px]">
                      2.5%
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-center text-lg text-foundation-green-normal">
                  <div className="relative font-semibold inline-block min-w-[76px] whitespace-nowrap">
                    $23,000
                  </div>
                  <div className="relative text-sm font-medium text-foundation-white-dark-active text-left inline-block min-w-[101px]">
                    out of $50,000
                  </div>
                </div>
              </div>
              <div className="absolute top-[153px] left-[21px] w-40 h-[88px] text-center text-5xl text-gray-900">
                <div className="absolute h-[calc(100%_+_56px)] w-[calc(100%_-_16px)] top-[8px] right-[8px] bottom-[-64px] left-[8px] max-w-full max-h-full flex items-center justify-center">
                  <img
                    className="h-full w-full overflow-hidden object-contain absolute left-[0px] top-[-4px] [transform:scale(1.111)]"
                    alt=""
                    src="/ring3.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_+_6px)] left-[calc(50%_-_24.5px)] leading-[32px] font-semibold inline-block min-w-[50px] text-xl">
                  70%
                </div>
              </div>
            </div>
            <div className="w-[232px] !m-[0] absolute top-[93px] left-[274px] rounded-3xl bg-white box-border flex flex-col items-center justify-start p-[11px] gap-[24px] z-[2] border-[0.5px] border-solid border-gainsboro-100">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="flex flex-row items-center self-stretch justify-start">
                    <div className="relative flex-1">Forecast Finish</div>
                  </div>
                  <div className="flex flex-row items-center justify-start p-1 text-center rounded-7xs bg-seagreen-300 text-seagreen-200">
                    <img
                      className="relative object-contain w-5 h-5"
                      alt=""
                      src="/arrow-right-alt@2x.png"
                    />
                    <div className="relative font-medium inline-block min-w-[28px]">
                      18%
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-center text-lg text-foundation-green-normal">
                  <div className="relative font-semibold inline-block min-w-[76px] whitespace-nowrap">
                    $45,000
                  </div>
                  <div className="relative self-stretch text-sm font-medium text-left text-seagreen-200">
                    <span>+18%</span>
                    <span className="text-foundation-white-dark-active">
                      {" "}
                      increase vs last month
                    </span>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[88px] relative text-center text-5xl text-gray-900">
                <div className="absolute h-[calc(100%_+_56px)] w-[calc(100%_-_65px)] top-[8px] right-[32.5px] bottom-[-64px] left-[32.5px] max-w-full max-h-full flex items-center justify-center">
                  <img
                    className="h-full w-full overflow-hidden object-contain absolute left-[0px] top-[-4px] [transform:scale(1.111)]"
                    alt=""
                    src="/ring4.svg"
                  />
                </div>
                <div className="absolute top-[calc(30%_+_6px)] left-[calc(50%_-_30.5px)] leading-[32px] font-semibold inline-block min-w-[62px] text-xl">
                  125%
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 shadow-[0px_12px_16px_-4px_rgba(0,_0,_0,_0.08)] rounded-3xl bg-white flex flex-col items-start justify-start pt-[60px] px-6 pb-6 box-border gap-[24px] min-w-[348px] max-w-full text-29xl text-white mq725:min-w-full">
            <div className="self-stretch h-[152px] relative rounded-xl bg-[#072D20] overflow-hidden shrink-0 max-w-full">
              <div className="absolute top-[148.4px] left-[63.2px] rounded-[20.48px] bg-green-200/20 w-[142.1px] h-[142.1px] overflow-hidden [transform:_rotate(56.6deg)] [transform-origin:0_0]" />
              <div className="absolute top-[-114.3px] left-[145.1px] rounded-[20.48px] bg-green-200/20 w-[142.1px] h-[142.1px] overflow-hidden [transform:_rotate(56.6deg)] [transform-origin:0_0]" />
              <div className="absolute top-[-123.7px] left-[476.2px] rounded-[20.48px] bg-green-200/20 w-[142.1px] h-[142.1px] overflow-hidden [transform:_rotate(56.6deg)] [transform-origin:0_0]" />
              <div className="absolute top-[145.9px] left-[477px] rounded-[20.48px] bg-green-200/20 w-[142.1px] h-[142.1px] overflow-hidden [transform:_rotate(56.6deg)] [transform-origin:0_0]" />
              <div className="absolute top-[55.8px] left-[284.4px] rounded-[20.48px] bg-green-200/20 w-[83.7px] h-[83.7px] overflow-hidden [transform:_rotate(56.6deg)] [transform-origin:0_0]" />
              <div className="absolute top-[calc(50%_-_52px)] left-[calc(50%_-_232px)] w-[464px] h-[104px] flex flex-row items-center justify-between gap-[0px] [row-gap:20px] max-w-full">
                <div className="h-[126px] w-[249px] relative rounded-21xl overflow-hidden shrink-0">
                  <div className="absolute top-[124px] left-[116px] bg-skyblue-300 w-[8.6px] h-[2.5px] [transform:_rotate(110deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[88px] left-[172px] bg-skyblue-300 w-[5.6px] h-[2.5px] [transform:_rotate(30deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[18px] left-[95px] bg-paleturquoise-200 w-[8.6px] h-[1.5px] [transform:_rotate(135deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[105px] left-[134px] bg-paleturquoise-100 w-[6.6px] h-[1.5px] [transform:_rotate(-63deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[11px] left-[124px] bg-palegoldenrod-500 w-[8.6px] h-[2.5px] [transform:_rotate(34deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[77px] left-[81.8px] bg-plum-300 w-[7.6px] h-[1.5px] [transform:_rotate(32deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[34px] left-[176px] bg-fuchsia-200 w-[5.6px] h-[1.5px] [transform:_rotate(61deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[77px] left-[52px] bg-darkblue-100 w-[2.6px] h-[2.5px] [transform:_rotate(69deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[30px] left-[12px] bg-plum-200 w-[6.6px] h-[2.5px] [transform:_rotate(141deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[129px] left-[97px] bg-palegoldenrod-100 w-[2.6px] h-[1.5px] [transform:_rotate(-13deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[57px] left-[157px] bg-gold-100 w-[2.6px] h-[2.5px] [transform:_rotate(-83deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[67px] left-[47px] bg-cornflowerblue-100 w-[1.6px] h-[1.5px] [transform:_rotate(-102deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[9px] left-[104px] bg-skyblue-100 w-[2.6px] h-[2.5px] [transform:_rotate(-56deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[93px] left-[201px] bg-greenyellow-200 w-[7.6px] h-[1.5px] [transform:_rotate(5deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[121px] left-[44px] bg-paleturquoise-200 w-[9.6px] h-[2.5px] [transform:_rotate(12deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[111px] left-[83px] bg-mediumslateblue-400 w-[5.6px] h-[1.5px] [transform:_rotate(-20deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[62.7px] left-[122.7px] bg-deeppink-400 w-[7.6px] h-[1.5px] [transform:_rotate(117deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[84px] left-[181px] bg-palegoldenrod-200 w-[3.6px] h-[2.5px] [transform:_rotate(-149deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[9px] left-[31px] bg-deeppink-100 w-[7.6px] h-[2.5px] [transform:_rotate(100deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[118px] left-[159px] bg-paleturquoise-100 w-[1.6px] h-[3.5px] [transform:_rotate(-6deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[12px] left-[44px] bg-deeppink-400 w-[4.6px] h-[2.5px] [transform:_rotate(10deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[144px] left-[67px] bg-chocolate-100 w-[6.6px] h-[1.5px] [transform:_rotate(-164deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[23px] left-[83px] bg-cornflowerblue-500 w-[1.6px] h-[2.5px] [transform:_rotate(-107deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[121px] left-[91px] rounded-[50%] bg-palegoldenrod-500 w-[4.1px] h-[4.1px]" />
                  <div className="absolute top-[111px] left-[9px] rounded-[50%] bg-darkblue-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[142px] left-[115px] rounded-[50%] bg-orange-200 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[97px] left-[178px] rounded-[50%] bg-orangered-200 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[58px] left-[21px] rounded-[50%] bg-plum-300 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[137px] left-[93px] rounded-[50%] bg-gold-200 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[116px] left-[175px] rounded-[50%] bg-plum-100 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[89px] left-[104px] rounded-[50%] bg-fuchsia-200 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[90px] left-[6px] rounded-[50%] bg-darkblue-200 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[42px] left-[34px] rounded-[50%] bg-plum-400 w-[4.1px] h-[4.1px]" />
                  <div className="absolute top-[83px] left-[34px] rounded-[50%] bg-gold-300 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[77px] left-[34px] rounded-[50%] bg-paleturquoise-500 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[4px] left-[134px] rounded-[50%] bg-orange-400 w-[4.1px] h-[4.1px]" />
                  <div className="absolute top-[12px] left-[158px] rounded-[50%] bg-mediumslateblue-200 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[9px] left-[154px] rounded-[50%] bg-deeppink-200 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[102px] left-[60px] rounded-[50%] bg-skyblue-400 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[126px] left-[196px] rounded-[50%] bg-mediumslateblue-100 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[30px] left-[138px] rounded-[50%] bg-orange-100 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[125px] left-[77px] rounded-[50%] bg-cornflowerblue-200 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[124px] left-[68px] rounded-[50%] bg-plum-700 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[64px] left-[202px] rounded-[50%] bg-chocolate-100 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[86px] left-[56px] rounded-[50%] bg-plum-400 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[115px] left-[107px] rounded-[50%] bg-mediumslateblue-500 w-[4.1px] h-[4.1px]" />
                  <img
                    className="absolute top-[135.7px] left-[205px] w-[3.5px] h-[3.5px] object-contain"
                    alt=""
                    src="/bars.svg"
                  />
                  <img
                    className="absolute top-[58.8px] left-[20.7px] w-[7.3px] h-[7.3px] object-contain"
                    alt=""
                    src="/bars2.svg"
                  />
                  <img
                    className="absolute top-[62.1px] left-[196.3px] w-[4.9px] h-[4.9px] object-contain"
                    alt=""
                    src="/bars3.svg"
                  />
                  <img
                    className="absolute top-[57.8px] left-[29.1px] w-[4.9px] h-[4.9px] object-contain"
                    alt=""
                    src="/bars4.svg"
                  />
                  <img
                    className="absolute top-[45px] left-[220.7px] w-[4.3px] h-[4.3px] object-contain"
                    alt=""
                    src="/bars5.svg"
                  />
                  <img
                    className="absolute top-[104px] left-[184px] w-[3px] h-[3px] object-contain"
                    alt=""
                    src="/bars8.svg"
                  />
                  <img
                    className="absolute top-[123.4px] left-[66px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/chart-shape.svg"
                  />
                  <img
                    className="absolute top-[88.8px] left-[68px] w-[2.6px] h-[2.6px] object-contain"
                    alt=""
                    src="/chart-shape1.svg"
                  />
                  <img
                    className="absolute top-[87.1px] left-[33.5px] w-[5.5px] h-[5.5px] object-contain"
                    alt=""
                    src="/chart-shape2.svg"
                  />
                  <img
                    className="absolute top-[129.3px] left-[191px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars16.svg"
                  />
                  <img
                    className="absolute top-[-5.4px] left-[45.6px] w-[5.4px] h-[5.4px] object-contain"
                    alt=""
                    src="/polygon.svg"
                  />
                  <img
                    className="absolute top-[5.3px] left-[76px] w-[4.5px] h-[4.5px] object-contain"
                    alt=""
                    src="/bars18.svg"
                  />
                  <img
                    className="absolute top-[40.3px] left-[0px] w-[7px] h-[7px] object-contain"
                    alt=""
                    src="/polygon1.svg"
                  />
                  <img
                    className="absolute top-[141px] left-[28.8px] w-[2.5px] h-[2.5px] object-contain"
                    alt=""
                    src="/chart-shape3.svg"
                  />
                  <img
                    className="absolute top-[106.7px] left-[214.9px] w-[7.3px] h-[7.3px] object-contain"
                    alt=""
                    src="/chart-shape4.svg"
                  />
                  <img
                    className="absolute top-[66px] left-[148.2px] w-[2.9px] h-[2.9px] object-contain"
                    alt=""
                    src="/bars21.svg"
                  />
                  <img
                    className="absolute top-[113.6px] left-[26.1px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/chart-shape5.svg"
                  />
                  <img
                    className="absolute top-[102.9px] left-[203.2px] w-[2.8px] h-[2.8px] object-contain"
                    alt=""
                    src="/bars24.svg"
                  />
                  <img
                    className="absolute top-[27px] left-[41.6px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/bars28.svg"
                  />
                  <img
                    className="absolute top-[38px] left-[180.8px] w-[2.7px] h-[2.7px] object-contain"
                    alt=""
                    src="/bars29.svg"
                  />
                  <img
                    className="absolute top-[7.8px] left-[147px] w-[3.2px] h-[3.2px] object-contain"
                    alt=""
                    src="/polygon2.svg"
                  />
                  <img
                    className="absolute top-[24px] left-[11.5px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/bars31.svg"
                  />
                  <img
                    className="absolute top-[72.8px] left-[22.5px] w-[2.5px] h-[2.5px] object-contain"
                    alt=""
                    src="/bars32.svg"
                  />
                  <img
                    className="absolute top-[39.3px] left-[200.8px] w-[2.7px] h-[2.7px] object-contain"
                    alt=""
                    src="/bars33.svg"
                  />
                  <img
                    className="absolute top-[125px] left-[89.9px] w-[2.8px] h-[2.8px] object-contain"
                    alt=""
                    src="/bars36.svg"
                  />
                  <img
                    className="absolute top-[44px] left-[8.5px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars38.svg"
                  />
                  <img
                    className="absolute top-[74px] left-[139.7px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars39.svg"
                  />
                  <img
                    className="absolute top-[108.6px] left-[58.8px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/chart-indicator.svg"
                  />
                  <img
                    className="absolute top-[39px] left-[63.3px] w-[5.7px] h-[5.7px] object-contain"
                    alt=""
                    src="/bars42.svg"
                  />
                  <img
                    className="absolute top-[135px] left-[181.9px] w-[6.1px] h-[6.1px] object-contain"
                    alt=""
                    src="/chart-indicator1.svg"
                  />
                  <img
                    className="absolute top-[100.8px] left-[87px] w-[2.6px] h-[2.6px] object-contain"
                    alt=""
                    src="/bars44.svg"
                  />
                  <img
                    className="absolute top-[144.7px] left-[168.5px] w-[3.5px] h-[3.5px] object-contain"
                    alt=""
                    src="/bars46.svg"
                  />
                  <img
                    className="absolute top-[52.3px] left-[79.6px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars48.svg"
                  />
                  <img
                    className="absolute top-[91.2px] left-[183px] w-[5.6px] h-[5.6px] object-contain"
                    alt=""
                    src="/bars49.svg"
                  />
                  <img
                    className="absolute top-[16px] left-[198.2px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars52.svg"
                  />
                  <img
                    className="absolute top-[104.6px] left-[71.1px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/month-filter.svg"
                  />
                  <img
                    className="absolute top-[9.3px] left-[42.8px] w-[2.7px] h-[2.7px] object-contain"
                    alt=""
                    src="/bars55.svg"
                  />
                  <img
                    className="absolute top-[123.8px] left-[65.6px] w-[2.4px] h-[2.4px] object-contain"
                    alt=""
                    src="/star.svg"
                  />
                  <img
                    className="absolute top-[113px] left-[197.9px] w-[6.1px] h-[6.1px] object-contain"
                    alt=""
                    src="/target-container.svg"
                  />
                  <img
                    className="absolute top-[130.3px] left-[36.4px] w-[2.7px] h-[2.7px] object-contain"
                    alt=""
                    src="/week-target-container.svg"
                  />
                  <img
                    className="absolute top-[124.6px] left-[167.8px] w-[2.4px] h-[2.4px] object-contain"
                    alt=""
                    src="/bars62.svg"
                  />
                  <img
                    className="absolute top-[41.8px] left-[54px] w-[2.4px] h-[2.4px] object-contain"
                    alt=""
                    src="/bars64.svg"
                  />
                  <img
                    className="absolute top-[11px] left-[53.2px] w-[6.9px] h-[6.9px] object-contain"
                    alt=""
                    src="/star-one.svg"
                  />
                  <img
                    className="absolute top-[135.5px] left-[29px] w-[4.5px] h-[4.5px] object-contain"
                    alt=""
                    src="/star1.svg"
                  />
                  <img
                    className="absolute top-[52px] left-[119.9px] w-1 h-1 object-contain"
                    alt=""
                    src="/bars67.svg"
                  />
                  <img
                    className="absolute top-[130px] left-[178.3px] w-[5.7px] h-[5.7px] object-contain"
                    alt=""
                    src="/bars68.svg"
                  />
                  <div className="absolute top-[69px] left-[32px] bg-fuchsia-100 w-[1.6px] h-[3.5px] [transform:_rotate(37deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[78px] left-[168px] bg-gold-400 w-[9.6px] h-[2.5px] [transform:_rotate(-136deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[43px] left-[30px] bg-chocolate-600 w-[5.6px] h-[2.5px] [transform:_rotate(-144deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[23px] left-[2px] bg-plum-100 w-[7.6px] h-[3.5px] [transform:_rotate(162deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[85px] left-[173px] bg-mediumslateblue-300 w-[4.6px] h-[1.5px] [transform:_rotate(2deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[14px] left-[186px] bg-skyblue-100 w-[5.6px] h-[1.5px] [transform:_rotate(148deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[2px] left-[34px] bg-skyblue-200 w-[7.6px] h-[1.5px] [transform:_rotate(130deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[56px] left-[13px] bg-cornflowerblue-300 w-[7.6px] h-[2.5px] [transform:_rotate(-140deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[80px] left-[209px] bg-skyblue-300 w-[1.6px] h-[1.5px] [transform:_rotate(174deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[2px] left-[137px] bg-orange-200 w-[3.6px] h-[2.5px] [transform:_rotate(-172deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[138px] left-[161px] bg-paleturquoise-400 w-[7.6px] h-[2.5px] [transform:_rotate(-23deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[78.5px] left-[68.5px] bg-chocolate-500 w-[8.6px] h-[1.5px] [transform:_rotate(-173deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[117px] left-[183px] bg-greenyellow-200 w-[5.6px] h-[3.5px] [transform:_rotate(-154deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[74px] left-[13px] bg-skyblue-400 w-[7.6px] h-[1.5px] [transform:_rotate(-4deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[79px] left-[33px] bg-chocolate-200 w-[7.6px] h-[1.5px] [transform:_rotate(134deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[22px] left-[214px] bg-chocolate-300 w-[1.6px] h-[1.5px] [transform:_rotate(154deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[82px] left-[156px] bg-fuchsia-200 w-[3.6px] h-[3.5px] [transform:_rotate(132deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[6px] left-[15px] bg-chocolate-400 w-[3.6px] h-[2.5px] [transform:_rotate(53deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[128px] left-[213px] bg-greenyellow-300 w-[4.6px] h-[1.5px] [transform:_rotate(166deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[116px] left-[199px] bg-orangered-300 w-[7.6px] h-[1.5px] [transform:_rotate(-175deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[122px] left-[145px] bg-orange-200 w-[2.6px] h-[1.5px] [transform:_rotate(64deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[78px] left-[208px] bg-darkblue-300 w-[4.6px] h-[2.5px] [transform:_rotate(-60deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[86px] left-[123px] bg-orange-300 w-[3.6px] h-[2.5px] [transform:_rotate(-53deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[11px] left-[7px] bg-plum-500 w-[3.6px] h-[2.5px] [transform:_rotate(-136deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[55px] left-[195px] bg-orangered-100 w-[7.6px] h-[2.5px] [transform:_rotate(-21deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[39px] left-[222px] bg-gold-500 w-[8.6px] h-[1.5px] [transform:_rotate(-63deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[33px] left-[130px] bg-deeppink-300 w-[6.6px] h-[2.5px] [transform:_rotate(173deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[128px] left-[84px] bg-plum-600 w-[5.6px] h-[1.5px] [transform:_rotate(2deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[65px] left-[180px] bg-greenyellow-100 w-[3.6px] h-[2.5px] [transform:_rotate(-18deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[86px] left-[7px] bg-fuchsia-300 w-[2.6px] h-[2.5px] [transform:_rotate(-97deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[68px] left-[155px] bg-gold-100 w-[4.6px] h-[3.5px] [transform:_rotate(75deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[48px] left-[143px] bg-orangered-300 w-[7.6px] h-[1.5px] [transform:_rotate(143deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[122px] left-[118px] bg-cornflowerblue-400 w-[7.6px] h-[1.5px] [transform:_rotate(133deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[4px] left-[177px] bg-palegoldenrod-500 w-[8.6px] h-[1.5px] [transform:_rotate(-66deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[38px] left-[152px] bg-plum-700 w-[1.6px] h-[1.5px] [transform:_rotate(132deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[76px] left-[176px] rounded-[50%] bg-cornflowerblue-500 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[99px] left-[201px] rounded-[50%] bg-orangered-200 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[35px] left-[129px] rounded-[50%] bg-paleturquoise-300 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[10px] left-[36px] rounded-[50%] bg-paleturquoise-200 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[45px] left-[29px] rounded-[50%] bg-greenyellow-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[15px] left-[202px] rounded-[50%] bg-mediumslateblue-400 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[0px] left-[131px] rounded-[50%] bg-greenyellow-100 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[81px] left-[218px] rounded-[50%] bg-chocolate-500 w-[4.1px] h-[4.1px]" />
                  <div className="absolute top-[24px] left-[113px] rounded-[50%] bg-darkblue-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[48px] left-[44px] rounded-[50%] bg-chocolate-500 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[100px] left-[27px] rounded-[50%] bg-greenyellow-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[84px] left-[128px] rounded-[50%] bg-deeppink-400 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[88px] left-[56px] rounded-[50%] bg-gold-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[57px] left-[125px] rounded-[50%] bg-gold-400 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[60px] left-[11px] rounded-[50%] bg-mediumslateblue-500 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[57px] left-[124px] rounded-[50%] bg-palegoldenrod-500 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[82px] left-[62px] rounded-[50%] bg-palegoldenrod-300 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[36px] left-[106px] rounded-[50%] bg-palegoldenrod-400 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[66px] left-[101px] rounded-[50%] bg-paleturquoise-300 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[37px] left-[97px] rounded-[50%] bg-skyblue-300 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[85px] left-[165px] rounded-[50%] bg-paleturquoise-400 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[101px] left-[40px] rounded-[50%] bg-plum-100 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[48px] left-[154px] rounded-[50%] bg-chocolate-600 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[117px] left-[131px] rounded-[50%] bg-palegoldenrod-500 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[61px] left-[178px] rounded-[50%] bg-greenyellow-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[5px] left-[77px] rounded-[50%] bg-fuchsia-400 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[0px] left-[26px] rounded-[50%] bg-paleturquoise-500 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[53px] left-[1px] rounded-[50%] bg-skyblue-400 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[59px] left-[181px] rounded-[50%] bg-gold-500 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[100px] left-[93px] rounded-[50%] bg-orangered-300 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[33px] left-[14px] rounded-[50%] bg-darkblue-500 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[83px] left-[136px] rounded-[50%] bg-fuchsia-400 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[97px] left-[222px] rounded-[50%] bg-orange-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[92px] left-[100px] rounded-[50%] bg-fuchsia-500 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[92px] left-[198px] rounded-[50%] bg-darkblue-500 w-[3.1px] h-[3.1px]" />
                  <img
                    className="absolute top-[14.5px] left-[182.1px] w-[4.5px] h-[4.5px] object-contain"
                    alt=""
                    src="/bars69.svg"
                  />
                  <img
                    className="absolute top-[21.8px] left-[28.7px] w-[5.3px] h-[5.3px] object-contain"
                    alt=""
                    src="/polygon3.svg"
                  />
                  <img
                    className="absolute top-[6.5px] left-[210.5px] w-[4.5px] h-[4.5px] object-contain"
                    alt=""
                    src="/bars70.svg"
                  />
                  <img
                    className="absolute top-[89.2px] left-[141px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars71.svg"
                  />
                  <img
                    className="absolute top-[49.4px] left-[20.8px] w-[2.6px] h-[2.6px] object-contain"
                    alt=""
                    src="/bars72.svg"
                  />
                  <img
                    className="absolute top-[40px] left-[-0.2px] w-[4.2px] h-[4.2px] object-contain"
                    alt=""
                    src="/bars73.svg"
                  />
                  <img
                    className="absolute top-[97.7px] left-[-1.1px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/chart-bar.svg"
                  />
                  <img
                    className="absolute top-[109px] left-[98.8px] w-[2.5px] h-[2.5px] object-contain"
                    alt=""
                    src="/bars75.svg"
                  />
                  <img
                    className="absolute top-[8px] left-[84.1px] w-[2.9px] h-[2.9px] object-contain"
                    alt=""
                    src="/bars77.svg"
                  />
                  <img
                    className="absolute top-[55.6px] left-[137.1px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/bars78.svg"
                  />
                  <img
                    className="absolute top-[85.9px] left-[198px] w-[5.3px] h-[5.3px] object-contain"
                    alt=""
                    src="/chart-bar1.svg"
                  />
                  <img
                    className="absolute top-[41px] left-[183.3px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars79.svg"
                  />
                  <img
                    className="absolute top-[80.9px] left-[151.8px] w-[5.2px] h-[5.2px] object-contain"
                    alt=""
                    src="/bars81.svg"
                  />
                  <img
                    className="absolute top-[110.3px] left-[163.6px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars82.svg"
                  />
                  <img
                    className="absolute top-[110px] left-[23px] w-[3px] h-[3px] object-contain"
                    alt=""
                    src="/chart-bar2.svg"
                  />
                  <img
                    className="absolute top-[24px] left-[2.9px] w-1.5 h-1.5 object-contain"
                    alt=""
                    src="/polygon4.svg"
                  />
                  <img
                    className="absolute top-[120.4px] left-[101.9px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars86.svg"
                  />
                  <img
                    className="absolute top-[89.8px] left-[194px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/chart-bar3.svg"
                  />
                  <img
                    className="absolute top-[141px] left-[21px] w-[5.1px] h-[5.1px] object-contain"
                    alt=""
                    src="/polygon6.svg"
                  />
                  <img
                    className="absolute top-[38px] left-[212.5px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/bars90.svg"
                  />
                  <img
                    className="absolute top-[26px] left-[61.1px] w-[5.5px] h-[5.5px] object-contain"
                    alt=""
                    src="/bars93.svg"
                  />
                  <img
                    className="absolute top-[68px] left-[-0.1px] w-[5.2px] h-[5.2px] object-contain"
                    alt=""
                    src="/bars94.svg"
                  />
                  <img
                    className="absolute top-[125.8px] left-[215.6px] w-[2.4px] h-[2.4px] object-contain"
                    alt=""
                    src="/bars95.svg"
                  />
                  <img
                    className="absolute top-[43px] left-[76.3px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars97.svg"
                  />
                  <img
                    className="absolute top-[125.6px] left-[209px] w-[3.6px] h-[3.6px] object-contain"
                    alt=""
                    src="/bars98.svg"
                  />
                  <img
                    className="absolute top-[72.1px] left-[183px] w-[5.5px] h-[5.5px] object-contain"
                    alt=""
                    src="/bars100.svg"
                  />
                  <img
                    className="absolute top-[103.8px] left-[28.6px] w-[2.4px] h-[2.4px] object-contain"
                    alt=""
                    src="/polygon7.svg"
                  />
                  <img
                    className="absolute top-[126.5px] left-[137.4px] w-[5.5px] h-[5.5px] object-contain"
                    alt=""
                    src="/bars103.svg"
                  />
                  <img
                    className="absolute top-[90.8px] left-[111.8px] w-[2.2px] h-[2.2px] object-contain"
                    alt=""
                    src="/polygon5.svg"
                  />
                  <img
                    className="absolute top-[44.9px] left-[99.5px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars105.svg"
                  />
                  <img
                    className="absolute top-[35.2px] left-[30.6px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars106.svg"
                  />
                  <img
                    className="absolute top-[91.1px] left-[87px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars107.svg"
                  />
                  <img
                    className="absolute top-[89.3px] left-[22px] w-[4.8px] h-[4.8px] object-contain"
                    alt=""
                    src="/polygon8.svg"
                  />
                  <img
                    className="absolute top-[45px] left-[151.1px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars110.svg"
                  />
                  <img
                    className="absolute top-[101.9px] left-[9.3px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/polygon9.svg"
                  />
                  <img
                    className="absolute top-[72.9px] left-[131px] w-[3px] h-[3px] object-contain"
                    alt=""
                    src="/bars112.svg"
                  />
                  <img
                    className="absolute top-[43px] left-[95.3px] w-[2.8px] h-[2.8px] object-contain"
                    alt=""
                    src="/bars113.svg"
                  />
                  <img
                    className="absolute top-[120px] left-[51.9px] w-[6.1px] h-[6.1px] object-contain"
                    alt=""
                    src="/star-team-target.svg"
                  />
                  <img
                    className="absolute top-[135.1px] left-[58px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/star-team-target1.svg"
                  />
                  <img
                    className="absolute top-[123.8px] left-[4.3px] w-[2.7px] h-[2.7px] object-contain"
                    alt=""
                    src="/star-team-target2.svg"
                  />
                  <img
                    className="absolute top-[37.9px] left-[147px] w-[5.2px] h-[5.2px] object-contain"
                    alt=""
                    src="/bars119.svg"
                  />
                  <img
                    className="absolute top-[29.7px] left-[142.2px] w-[5.8px] h-[5.8px] object-contain"
                    alt=""
                    src="/star-two.svg"
                  />
                  <img
                    className="absolute top-[43.9px] left-[93px] w-[3.3px] h-[3.3px] object-contain"
                    alt=""
                    src="/star-three.svg"
                  />
                  <img
                    className="absolute top-[59px] left-[35.1px] w-[5.6px] h-[5.6px] object-contain"
                    alt=""
                    src="/bars120.svg"
                  />
                  <img
                    className="absolute top-[120.9px] left-[127px] w-1 h-1 object-contain"
                    alt=""
                    src="/bars121.svg"
                  />
                  <img
                    className="absolute top-[110.8px] left-[33px] w-[4.9px] h-[4.9px] object-contain"
                    alt=""
                    src="/star-team-target3.svg"
                  />
                  <img
                    className="absolute top-[129.4px] left-[22.5px] w-[5.5px] h-[5.5px] object-contain"
                    alt=""
                    src="/star-team-target4.svg"
                  />
                  <img
                    className="absolute top-[125px] left-[122.4px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars127.svg"
                  />
                  <img
                    className="absolute top-[62px] left-[207.1px] w-[5.6px] h-[5.6px] object-contain"
                    alt=""
                    src="/bars129.svg"
                  />
                  <img
                    className="absolute top-[115.8px] left-[133px] w-[2.4px] h-[2.4px] object-contain"
                    alt=""
                    src="/bars131.svg"
                  />
                  <img
                    className="absolute top-[105.6px] left-[112.1px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/bars133.svg"
                  />
                  <img
                    className="absolute top-[102.9px] left-[203px] w-[3px] h-[3px] object-contain"
                    alt=""
                    src="/bars135.svg"
                  />
                  <img
                    className="absolute top-[8.6px] left-[24px] w-[4.5px] h-[4.5px] object-contain"
                    alt=""
                    src="/bars139.svg"
                  />
                  <img
                    className="absolute top-[104.9px] left-[126px] w-[3.8px] h-[3.8px] object-contain"
                    alt=""
                    src="/bars140.svg"
                  />
                  <img
                    className="absolute top-[91.5px] left-[71.3px] w-[4.5px] h-[4.5px] object-contain"
                    alt=""
                    src="/star-team-target5.svg"
                  />
                  <img
                    className="absolute top-[115.9px] left-[182.2px] w-[3.8px] h-[3.8px] object-contain"
                    alt=""
                    src="/bars144.svg"
                  />
                  <img
                    className="absolute top-[15.2px] left-[71px] w-[6.8px] h-[6.8px] object-contain"
                    alt=""
                    src="/star-team-target6.svg"
                  />
                  <img
                    className="absolute top-[44px] left-[162.7px] w-[2.5px] h-[2.5px] object-contain"
                    alt=""
                    src="/bars147.svg"
                  />
                  <img
                    className="absolute top-[76px] left-[105px] w-[4.2px] h-[4.2px]"
                    alt=""
                    src="/bars148.svg"
                  />
                  <img
                    className="absolute top-[121px] left-[75.6px] w-[3.6px] h-[3.6px] object-contain"
                    alt=""
                    src="/bars149.svg"
                  />
                  <img
                    className="absolute top-[76.2px] left-[173px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars151.svg"
                  />
                  <img
                    className="absolute top-[26.7px] left-[160.8px] w-[6.3px] h-[6.3px] object-contain"
                    alt=""
                    src="/star-four.svg"
                  />
                  <img
                    className="absolute top-[113.7px] left-[48.7px] w-[7.3px] h-[7.3px] object-contain"
                    alt=""
                    src="/star-team-target7.svg"
                  />
                  <img
                    className="absolute top-[89.1px] left-[13px] w-[2.9px] h-[2.9px] object-contain"
                    alt=""
                    src="/star-team-target8.svg"
                  />
                  <img
                    className="absolute top-[131.8px] left-[103.6px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars155.svg"
                  />
                  <img
                    className="absolute top-[-1.7px] left-[114.8px] w-[2.7px] h-[2.7px] object-contain"
                    alt=""
                    src="/bars157.svg"
                  />
                  <img
                    className="absolute top-[101px] left-[185px] w-[6.4px] h-[6.4px] object-contain"
                    alt=""
                    src="/bars158.svg"
                  />
                  <img
                    className="absolute top-[125px] left-[116.9px] w-[3px] h-[3px] object-contain"
                    alt=""
                    src="/bars160.svg"
                  />
                  <img
                    className="absolute top-[29px] left-[42px] w-[2.3px] h-[2.3px] object-contain"
                    alt=""
                    src="/star-five.svg"
                  />
                  <img
                    className="absolute top-[44.8px] left-[32.2px] w-[4.8px] h-[4.8px] object-contain"
                    alt=""
                    src="/bars162.svg"
                  />
                  <div className="absolute top-[calc(50%_-_39.5px)] left-[24px] flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative font-semibold whitespace-nowrap text-white text-4xl">
                      $3000
                    </div>
                    <div className="relative tracking-[0.04em] text-xl">
                      Forecast Commission
                    </div>
                  </div>
                  <div className="absolute top-[50.4px] left-[122.9px] bg-gold-100 w-[9.6px] h-[2.5px] [transform:_rotate(-136deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[44px] left-[74px] bg-greenyellow-100 w-[3.6px] h-[2.5px] [transform:_rotate(-18deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[38px] left-[75px] rounded-[50%] bg-gold-500 w-[1.1px] h-[1.1px]" />
                  <img
                    className="absolute top-[61.4px] left-[58.2px] w-[2.9px] h-[2.9px] object-contain"
                    alt=""
                    src="/bars163.svg"
                  />
                  <img
                    className="absolute top-[70.4px] left-[48.6px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars164.svg"
                  />
                  <img
                    className="absolute top-[52px] left-[46px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/bars165.svg"
                  />
                  <div className="absolute top-[61.1px] left-[101.5px] bg-gold-100 w-[9.6px] h-[2.5px] [transform:_rotate(150deg)] [transform-origin:0_0]" />
                </div>
                <div className="w-[215px] relative text-sm font-medium text-right inline-block">
                  <p className="m-0">
                    <span className="text-lime">+2.5%</span>
                    <span>{` increase `}</span>
                  </p>
                  <p className="m-0">vs last month</p>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-lg text-foundation-green-normal mq725:flex-wrap">
              <div className="flex-1 rounded-xl [background:linear-gradient(180deg,_rgba(210,_255,_240,_0),_#fff)] box-border flex flex-col items-start justify-between p-[11px] min-w-[174px] border-[0.5px] border-solid border-gainsboro-100">
                <div className="self-stretch h-[106px] flex flex-col items-start justify-between">
                  <div className="w-[122.7px] relative font-semibold inline-block text-black">
                    Current Run Rate Per Day
                  </div>
                  <div className="relative self-stretch font-semibold text-black whitespace-nowrap">
                    $3000.00
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-xl [background:linear-gradient(180deg,_rgba(210,_255,_240,_0),_#fff)] box-border flex flex-col items-start justify-between p-[11px] min-w-[174px] border-[0.5px] border-solid border-gainsboro-100">
                <div className="self-stretch h-[106px] flex flex-col items-start justify-between">
                  <div className="w-[122.7px] relative font-semibold inline-block text-black">
                    Required Run Rate Per Day
                  </div>
                  <div className="relative self-stretch font-semibold text-black whitespace-nowrap">
                    $2500.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <EmployeeStatistics
          performanceVsTarget="Agent Ranking : Performance Vs Target"
          propDisplay="inline-block"
        />
        <FrameComponent1 agentRankingPerformanceVs="Agent Ranking : Performance Vs Actual" />
        <div className="self-stretch rounded-3xl bg-white flex flex-col items-center justify-center p-6 box-border gap-[24px] max-w-full text-right">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq725:flex-wrap">
            <div className="relative leading-[18px] font-semibold">
              SPIFF Summary
            </div>
            <div className="flex flex-row items-start justify-start w-56 text-base text-center rounded-3xl text-darkgray-100">
              <div className="flex-1 rounded-tl-3xl rounded-tr-none rounded-br-none rounded-bl-3xl flex flex-row items-center justify-center py-[9px] px-2.5 border-t-[0.5px] border-solid border-gainsboro-100 border-b-[0.5px] border-l-[0.5px]">
                <div className="relative font-medium inline-block min-w-[43px]">
                  Week
                </div>
              </div>
              <div className="flex-1 shadow-[0px_4px_10px_2px_rgba(0,_164,_108,_0.15)] bg-white overflow-hidden flex flex-row items-center justify-center p-2.5 text-foundation-green-normal">
                <div className="relative font-medium inline-block min-w-[50px]">
                  Month
                </div>
              </div>
              <div className="flex-1 rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none flex flex-row items-center justify-center py-[9px] px-2.5 border-t-[0.5px] border-solid border-gainsboro-100 border-r-[0.5px] border-b-[0.5px]">
                <div className="relative font-medium inline-block min-w-[35px]">
                  Year
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
            <ChartBarTen2 number="3" />
            <ChartBarTen1 number="550" />
            <ChartBarTen number="$400" />
          </div>
        </div>
        <div className="self-stretch shadow-[0px_12px_16px_-4px_rgba(0,_0,_0,_0.08)] rounded-3xl bg-white overflow-hidden flex flex-col items-start justify-start p-6 box-border gap-[26px] max-w-full text-center">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-left text-5xl mq725:flex-wrap">
            <div className="relative font-semibold mq450:text-lgi">
              Agent Ranking : SPIFF’S
            </div>
            <div className="flex flex-row items-start justify-start w-56 text-base text-center rounded-3xl text-darkgray-100">
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
            <div className="flex flex-col items-center justify-center px-0 py-5">
              <div className="w-[45px] flex flex-col items-center justify-center gap-[28px]">
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
                <div className="flex flex-row items-center self-stretch justify-center">
                  <i className="relative inline-block font-bold min-w-[13px]">
                    4
                  </i>
                </div>
                <div className="flex flex-row items-center self-stretch justify-center">
                  <i className="relative inline-block font-bold min-w-[12px]">
                    5
                  </i>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-start gap-[16px] min-w-[640px] max-w-full font-display-xs-semibold mq975:min-w-full">
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
                <div className="flex flex-row items-center self-stretch justify-start max-w-full text-lg">
                  <div className="flex-1 rounded-81xl [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.4)_16.5%,_rgba(5,_72,_49,_0.2))] flex flex-row items-center justify-start py-0 pr-6 pl-0 box-border gap-[16px] max-w-full mq975:flex-wrap mq975:p-5 mq975:box-border">
                    <img
                      className="h-12 w-12 relative rounded-[50%] object-cover"
                      alt=""
                      src="/employee-avatar@2x.png"
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
                      src="/employee-avatar@2x.png"
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
                      src="/employee-avatar@2x.png"
                    />
                    <div className="flex-1 flex flex-row items-center justify-between min-w-[190px] max-w-full gap-[20px] mq450:flex-wrap">
                      <div className="relative font-medium">
                        Monica Fernandez
                      </div>
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
                      src="/employee-avatar@2x.png"
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
                      src="/employee-avatar@2x.png"
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
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full text-sm text-foundation-m-green-m-green-400">
          <div className="flex-1 shadow-[0px_12px_16px_-4px_rgba(0,_0,_0,_0.08)] rounded-3xl bg-white box-border flex flex-row items-start justify-start pt-[21px] pb-6 pr-6 pl-[27px] relative gap-[24px] min-w-[348px] min-h-[390px] max-w-full border-[0.5px] border-solid border-gainsboro-100 mq725:min-w-full">
           
          <div className="h-[27px] w-[141px] relative z-[0] text-5xl text-foundation-green-normal font-nunito">
              <div className="absolute top-[0px] left-[0px] w-[97px] h-[33px]">
                <b className="absolute top-[0px] left-[0px] inline-block min-w-[97px] w-full h-full text-2xl">
                  Lipton
                </b>
              </div>
              <img
                className="absolute top-[-2px] left-[108px] w-[36px] h-[31px] object-cover"
                alt=""
                src="/image-42@2x.png"
              />
            </div>

            <div className="h-64 w-52 absolute !m-[0] top-[93px] left-[30px] rounded-3xl bg-white box-border z-[1] border-[0.5px] border-solid border-gainsboro-100">
              <div className="absolute top-[8px] left-[13px] w-full flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative self-stretch">
                    Target Achievement
                  </div>
                  <div className="flex flex-row items-center justify-start p-1 text-center rounded-7xs bg-seagreen-300 text-seagreen-200">
                    <img
                      className="relative object-contain w-5 h-5"
                      alt=""
                      src="/arrow-right-alt@2x.png"
                    />
                    <div className="relative font-medium inline-block min-w-[33px]">
                      2.5%
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-center text-lg text-foundation-green-normal">
                  <div className="relative font-semibold inline-block min-w-[76px] whitespace-nowrap">
                    $23,000
                  </div>
                  <div className="relative text-sm font-medium text-foundation-white-dark-active text-left inline-block min-w-[101px]">
                    out of $50,000
                  </div>
                </div>
              </div>
              <div className="absolute top-[153px] left-[21px] w-40 h-[88px] text-center text-5xl text-gray-900">
                <div className="absolute h-[calc(100%_+_56px)] w-[calc(100%_-_16px)] top-[8px] right-[8px] bottom-[-64px] left-[8px] max-w-full max-h-full flex items-center justify-center">
                  <img
                    className="h-full w-full overflow-hidden object-contain absolute left-[0px] top-[-4px] [transform:scale(1.111)]"
                    alt=""
                    src="/ring3.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_+_6px)] left-[calc(50%_-_24.5px)] leading-[32px] font-semibold inline-block min-w-[50px] text-xl">
                  70%
                </div>
              </div>
            </div>
            <div className="w-[232px] !m-[0] absolute top-[93px] left-[274px] rounded-3xl bg-white box-border flex flex-col items-center justify-start p-[11px] gap-[24px] z-[2] border-[0.5px] border-solid border-gainsboro-100">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="flex flex-row items-center self-stretch justify-start">
                    <div className="relative flex-1">Forecast Finish</div>
                  </div>
                  <div className="flex flex-row items-center justify-start p-1 text-center rounded-7xs bg-seagreen-300 text-seagreen-200">
                    <img
                      className="relative object-contain w-5 h-5"
                      alt=""
                      src="/arrow-right-alt@2x.png"
                    />
                    <div className="relative font-medium inline-block min-w-[28px]">
                      18%
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-center text-lg text-foundation-green-normal">
                  <div className="relative font-semibold inline-block min-w-[76px] whitespace-nowrap">
                    $45,000
                  </div>
                  <div className="relative self-stretch text-sm font-medium text-left text-seagreen-200">
                    <span>+18%</span>
                    <span className="text-foundation-white-dark-active">
                      {" "}
                      increase vs last month
                    </span>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[88px] relative text-center text-5xl text-gray-900">
                <div className="absolute h-[calc(100%_+_56px)] w-[calc(100%_-_65px)] top-[8px] right-[32.5px] bottom-[-64px] left-[32.5px] max-w-full max-h-full flex items-center justify-center">
                  <img
                    className="h-full w-full overflow-hidden object-contain absolute left-[0px] top-[-4px] [transform:scale(1.111)]"
                    alt=""
                    src="/ring4.svg"
                  />
                </div>
                <div className="absolute top-[calc(30%_+_6px)] left-[calc(50%_-_30.5px)] leading-[32px] font-semibold inline-block min-w-[62px] text-xl">
                  125%
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 shadow-[0px_12px_16px_-4px_rgba(0,_0,_0,_0.08)] rounded-3xl bg-white flex flex-col items-start justify-start pt-[60px] px-6 pb-6 box-border gap-[24px] min-w-[348px] max-w-full text-29xl text-white mq725:min-w-full">
            <div className="self-stretch h-[152px] relative rounded-xl bg-[#072D20] overflow-hidden shrink-0 max-w-full">
              <div className="absolute top-[148.4px] left-[63.2px] rounded-[20.48px] bg-green-200/20 w-[142.1px] h-[142.1px] overflow-hidden [transform:_rotate(56.6deg)] [transform-origin:0_0]" />
              <div className="absolute top-[-114.3px] left-[145.1px] rounded-[20.48px] bg-green-200/20 w-[142.1px] h-[142.1px] overflow-hidden [transform:_rotate(56.6deg)] [transform-origin:0_0]" />
              <div className="absolute top-[-123.7px] left-[476.2px] rounded-[20.48px] bg-green-200/20 w-[142.1px] h-[142.1px] overflow-hidden [transform:_rotate(56.6deg)] [transform-origin:0_0]" />
              <div className="absolute top-[145.9px] left-[477px] rounded-[20.48px] bg-green-200/20 w-[142.1px] h-[142.1px] overflow-hidden [transform:_rotate(56.6deg)] [transform-origin:0_0]" />
              <div className="absolute top-[55.8px] left-[284.4px] rounded-[20.48px] bg-green-200/20 w-[83.7px] h-[83.7px] overflow-hidden [transform:_rotate(56.6deg)] [transform-origin:0_0]" />
              <div className="absolute top-[calc(50%_-_52px)] left-[calc(50%_-_232px)] w-[464px] h-[104px] flex flex-row items-center justify-between gap-[0px] [row-gap:20px] max-w-full">
                <div className="h-[126px] w-[249px] relative rounded-21xl overflow-hidden shrink-0">
                  <div className="absolute top-[124px] left-[116px] bg-skyblue-300 w-[8.6px] h-[2.5px] [transform:_rotate(110deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[88px] left-[172px] bg-skyblue-300 w-[5.6px] h-[2.5px] [transform:_rotate(30deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[18px] left-[95px] bg-paleturquoise-200 w-[8.6px] h-[1.5px] [transform:_rotate(135deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[105px] left-[134px] bg-paleturquoise-100 w-[6.6px] h-[1.5px] [transform:_rotate(-63deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[11px] left-[124px] bg-palegoldenrod-500 w-[8.6px] h-[2.5px] [transform:_rotate(34deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[77px] left-[81.8px] bg-plum-300 w-[7.6px] h-[1.5px] [transform:_rotate(32deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[34px] left-[176px] bg-fuchsia-200 w-[5.6px] h-[1.5px] [transform:_rotate(61deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[77px] left-[52px] bg-darkblue-100 w-[2.6px] h-[2.5px] [transform:_rotate(69deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[30px] left-[12px] bg-plum-200 w-[6.6px] h-[2.5px] [transform:_rotate(141deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[129px] left-[97px] bg-palegoldenrod-100 w-[2.6px] h-[1.5px] [transform:_rotate(-13deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[57px] left-[157px] bg-gold-100 w-[2.6px] h-[2.5px] [transform:_rotate(-83deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[67px] left-[47px] bg-cornflowerblue-100 w-[1.6px] h-[1.5px] [transform:_rotate(-102deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[9px] left-[104px] bg-skyblue-100 w-[2.6px] h-[2.5px] [transform:_rotate(-56deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[93px] left-[201px] bg-greenyellow-200 w-[7.6px] h-[1.5px] [transform:_rotate(5deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[121px] left-[44px] bg-paleturquoise-200 w-[9.6px] h-[2.5px] [transform:_rotate(12deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[111px] left-[83px] bg-mediumslateblue-400 w-[5.6px] h-[1.5px] [transform:_rotate(-20deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[62.7px] left-[122.7px] bg-deeppink-400 w-[7.6px] h-[1.5px] [transform:_rotate(117deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[84px] left-[181px] bg-palegoldenrod-200 w-[3.6px] h-[2.5px] [transform:_rotate(-149deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[9px] left-[31px] bg-deeppink-100 w-[7.6px] h-[2.5px] [transform:_rotate(100deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[118px] left-[159px] bg-paleturquoise-100 w-[1.6px] h-[3.5px] [transform:_rotate(-6deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[12px] left-[44px] bg-deeppink-400 w-[4.6px] h-[2.5px] [transform:_rotate(10deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[144px] left-[67px] bg-chocolate-100 w-[6.6px] h-[1.5px] [transform:_rotate(-164deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[23px] left-[83px] bg-cornflowerblue-500 w-[1.6px] h-[2.5px] [transform:_rotate(-107deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[121px] left-[91px] rounded-[50%] bg-palegoldenrod-500 w-[4.1px] h-[4.1px]" />
                  <div className="absolute top-[111px] left-[9px] rounded-[50%] bg-darkblue-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[142px] left-[115px] rounded-[50%] bg-orange-200 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[97px] left-[178px] rounded-[50%] bg-orangered-200 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[58px] left-[21px] rounded-[50%] bg-plum-300 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[137px] left-[93px] rounded-[50%] bg-gold-200 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[116px] left-[175px] rounded-[50%] bg-plum-100 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[89px] left-[104px] rounded-[50%] bg-fuchsia-200 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[90px] left-[6px] rounded-[50%] bg-darkblue-200 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[42px] left-[34px] rounded-[50%] bg-plum-400 w-[4.1px] h-[4.1px]" />
                  <div className="absolute top-[83px] left-[34px] rounded-[50%] bg-gold-300 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[77px] left-[34px] rounded-[50%] bg-paleturquoise-500 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[4px] left-[134px] rounded-[50%] bg-orange-400 w-[4.1px] h-[4.1px]" />
                  <div className="absolute top-[12px] left-[158px] rounded-[50%] bg-mediumslateblue-200 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[9px] left-[154px] rounded-[50%] bg-deeppink-200 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[102px] left-[60px] rounded-[50%] bg-skyblue-400 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[126px] left-[196px] rounded-[50%] bg-mediumslateblue-100 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[30px] left-[138px] rounded-[50%] bg-orange-100 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[125px] left-[77px] rounded-[50%] bg-cornflowerblue-200 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[124px] left-[68px] rounded-[50%] bg-plum-700 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[64px] left-[202px] rounded-[50%] bg-chocolate-100 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[86px] left-[56px] rounded-[50%] bg-plum-400 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[115px] left-[107px] rounded-[50%] bg-mediumslateblue-500 w-[4.1px] h-[4.1px]" />
                  <img
                    className="absolute top-[135.7px] left-[205px] w-[3.5px] h-[3.5px] object-contain"
                    alt=""
                    src="/bars.svg"
                  />
                  <img
                    className="absolute top-[58.8px] left-[20.7px] w-[7.3px] h-[7.3px] object-contain"
                    alt=""
                    src="/bars2.svg"
                  />
                  <img
                    className="absolute top-[62.1px] left-[196.3px] w-[4.9px] h-[4.9px] object-contain"
                    alt=""
                    src="/bars3.svg"
                  />
                  <img
                    className="absolute top-[57.8px] left-[29.1px] w-[4.9px] h-[4.9px] object-contain"
                    alt=""
                    src="/bars4.svg"
                  />
                  <img
                    className="absolute top-[45px] left-[220.7px] w-[4.3px] h-[4.3px] object-contain"
                    alt=""
                    src="/bars5.svg"
                  />
                  <img
                    className="absolute top-[104px] left-[184px] w-[3px] h-[3px] object-contain"
                    alt=""
                    src="/bars8.svg"
                  />
                  <img
                    className="absolute top-[123.4px] left-[66px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/chart-shape.svg"
                  />
                  <img
                    className="absolute top-[88.8px] left-[68px] w-[2.6px] h-[2.6px] object-contain"
                    alt=""
                    src="/chart-shape1.svg"
                  />
                  <img
                    className="absolute top-[87.1px] left-[33.5px] w-[5.5px] h-[5.5px] object-contain"
                    alt=""
                    src="/chart-shape2.svg"
                  />
                  <img
                    className="absolute top-[129.3px] left-[191px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars16.svg"
                  />
                  <img
                    className="absolute top-[-5.4px] left-[45.6px] w-[5.4px] h-[5.4px] object-contain"
                    alt=""
                    src="/polygon.svg"
                  />
                  <img
                    className="absolute top-[5.3px] left-[76px] w-[4.5px] h-[4.5px] object-contain"
                    alt=""
                    src="/bars18.svg"
                  />
                  <img
                    className="absolute top-[40.3px] left-[0px] w-[7px] h-[7px] object-contain"
                    alt=""
                    src="/polygon1.svg"
                  />
                  <img
                    className="absolute top-[141px] left-[28.8px] w-[2.5px] h-[2.5px] object-contain"
                    alt=""
                    src="/chart-shape3.svg"
                  />
                  <img
                    className="absolute top-[106.7px] left-[214.9px] w-[7.3px] h-[7.3px] object-contain"
                    alt=""
                    src="/chart-shape4.svg"
                  />
                  <img
                    className="absolute top-[66px] left-[148.2px] w-[2.9px] h-[2.9px] object-contain"
                    alt=""
                    src="/bars21.svg"
                  />
                  <img
                    className="absolute top-[113.6px] left-[26.1px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/chart-shape5.svg"
                  />
                  <img
                    className="absolute top-[102.9px] left-[203.2px] w-[2.8px] h-[2.8px] object-contain"
                    alt=""
                    src="/bars24.svg"
                  />
                  <img
                    className="absolute top-[27px] left-[41.6px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/bars28.svg"
                  />
                  <img
                    className="absolute top-[38px] left-[180.8px] w-[2.7px] h-[2.7px] object-contain"
                    alt=""
                    src="/bars29.svg"
                  />
                  <img
                    className="absolute top-[7.8px] left-[147px] w-[3.2px] h-[3.2px] object-contain"
                    alt=""
                    src="/polygon2.svg"
                  />
                  <img
                    className="absolute top-[24px] left-[11.5px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/bars31.svg"
                  />
                  <img
                    className="absolute top-[72.8px] left-[22.5px] w-[2.5px] h-[2.5px] object-contain"
                    alt=""
                    src="/bars32.svg"
                  />
                  <img
                    className="absolute top-[39.3px] left-[200.8px] w-[2.7px] h-[2.7px] object-contain"
                    alt=""
                    src="/bars33.svg"
                  />
                  <img
                    className="absolute top-[125px] left-[89.9px] w-[2.8px] h-[2.8px] object-contain"
                    alt=""
                    src="/bars36.svg"
                  />
                  <img
                    className="absolute top-[44px] left-[8.5px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars38.svg"
                  />
                  <img
                    className="absolute top-[74px] left-[139.7px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars39.svg"
                  />
                  <img
                    className="absolute top-[108.6px] left-[58.8px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/chart-indicator.svg"
                  />
                  <img
                    className="absolute top-[39px] left-[63.3px] w-[5.7px] h-[5.7px] object-contain"
                    alt=""
                    src="/bars42.svg"
                  />
                  <img
                    className="absolute top-[135px] left-[181.9px] w-[6.1px] h-[6.1px] object-contain"
                    alt=""
                    src="/chart-indicator1.svg"
                  />
                  <img
                    className="absolute top-[100.8px] left-[87px] w-[2.6px] h-[2.6px] object-contain"
                    alt=""
                    src="/bars44.svg"
                  />
                  <img
                    className="absolute top-[144.7px] left-[168.5px] w-[3.5px] h-[3.5px] object-contain"
                    alt=""
                    src="/bars46.svg"
                  />
                  <img
                    className="absolute top-[52.3px] left-[79.6px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars48.svg"
                  />
                  <img
                    className="absolute top-[91.2px] left-[183px] w-[5.6px] h-[5.6px] object-contain"
                    alt=""
                    src="/bars49.svg"
                  />
                  <img
                    className="absolute top-[16px] left-[198.2px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars52.svg"
                  />
                  <img
                    className="absolute top-[104.6px] left-[71.1px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/month-filter.svg"
                  />
                  <img
                    className="absolute top-[9.3px] left-[42.8px] w-[2.7px] h-[2.7px] object-contain"
                    alt=""
                    src="/bars55.svg"
                  />
                  <img
                    className="absolute top-[123.8px] left-[65.6px] w-[2.4px] h-[2.4px] object-contain"
                    alt=""
                    src="/star.svg"
                  />
                  <img
                    className="absolute top-[113px] left-[197.9px] w-[6.1px] h-[6.1px] object-contain"
                    alt=""
                    src="/target-container.svg"
                  />
                  <img
                    className="absolute top-[130.3px] left-[36.4px] w-[2.7px] h-[2.7px] object-contain"
                    alt=""
                    src="/week-target-container.svg"
                  />
                  <img
                    className="absolute top-[124.6px] left-[167.8px] w-[2.4px] h-[2.4px] object-contain"
                    alt=""
                    src="/bars62.svg"
                  />
                  <img
                    className="absolute top-[41.8px] left-[54px] w-[2.4px] h-[2.4px] object-contain"
                    alt=""
                    src="/bars64.svg"
                  />
                  <img
                    className="absolute top-[11px] left-[53.2px] w-[6.9px] h-[6.9px] object-contain"
                    alt=""
                    src="/star-one.svg"
                  />
                  <img
                    className="absolute top-[135.5px] left-[29px] w-[4.5px] h-[4.5px] object-contain"
                    alt=""
                    src="/star1.svg"
                  />
                  <img
                    className="absolute top-[52px] left-[119.9px] w-1 h-1 object-contain"
                    alt=""
                    src="/bars67.svg"
                  />
                  <img
                    className="absolute top-[130px] left-[178.3px] w-[5.7px] h-[5.7px] object-contain"
                    alt=""
                    src="/bars68.svg"
                  />
                  <div className="absolute top-[69px] left-[32px] bg-fuchsia-100 w-[1.6px] h-[3.5px] [transform:_rotate(37deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[78px] left-[168px] bg-gold-400 w-[9.6px] h-[2.5px] [transform:_rotate(-136deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[43px] left-[30px] bg-chocolate-600 w-[5.6px] h-[2.5px] [transform:_rotate(-144deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[23px] left-[2px] bg-plum-100 w-[7.6px] h-[3.5px] [transform:_rotate(162deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[85px] left-[173px] bg-mediumslateblue-300 w-[4.6px] h-[1.5px] [transform:_rotate(2deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[14px] left-[186px] bg-skyblue-100 w-[5.6px] h-[1.5px] [transform:_rotate(148deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[2px] left-[34px] bg-skyblue-200 w-[7.6px] h-[1.5px] [transform:_rotate(130deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[56px] left-[13px] bg-cornflowerblue-300 w-[7.6px] h-[2.5px] [transform:_rotate(-140deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[80px] left-[209px] bg-skyblue-300 w-[1.6px] h-[1.5px] [transform:_rotate(174deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[2px] left-[137px] bg-orange-200 w-[3.6px] h-[2.5px] [transform:_rotate(-172deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[138px] left-[161px] bg-paleturquoise-400 w-[7.6px] h-[2.5px] [transform:_rotate(-23deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[78.5px] left-[68.5px] bg-chocolate-500 w-[8.6px] h-[1.5px] [transform:_rotate(-173deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[117px] left-[183px] bg-greenyellow-200 w-[5.6px] h-[3.5px] [transform:_rotate(-154deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[74px] left-[13px] bg-skyblue-400 w-[7.6px] h-[1.5px] [transform:_rotate(-4deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[79px] left-[33px] bg-chocolate-200 w-[7.6px] h-[1.5px] [transform:_rotate(134deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[22px] left-[214px] bg-chocolate-300 w-[1.6px] h-[1.5px] [transform:_rotate(154deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[82px] left-[156px] bg-fuchsia-200 w-[3.6px] h-[3.5px] [transform:_rotate(132deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[6px] left-[15px] bg-chocolate-400 w-[3.6px] h-[2.5px] [transform:_rotate(53deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[128px] left-[213px] bg-greenyellow-300 w-[4.6px] h-[1.5px] [transform:_rotate(166deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[116px] left-[199px] bg-orangered-300 w-[7.6px] h-[1.5px] [transform:_rotate(-175deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[122px] left-[145px] bg-orange-200 w-[2.6px] h-[1.5px] [transform:_rotate(64deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[78px] left-[208px] bg-darkblue-300 w-[4.6px] h-[2.5px] [transform:_rotate(-60deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[86px] left-[123px] bg-orange-300 w-[3.6px] h-[2.5px] [transform:_rotate(-53deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[11px] left-[7px] bg-plum-500 w-[3.6px] h-[2.5px] [transform:_rotate(-136deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[55px] left-[195px] bg-orangered-100 w-[7.6px] h-[2.5px] [transform:_rotate(-21deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[39px] left-[222px] bg-gold-500 w-[8.6px] h-[1.5px] [transform:_rotate(-63deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[33px] left-[130px] bg-deeppink-300 w-[6.6px] h-[2.5px] [transform:_rotate(173deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[128px] left-[84px] bg-plum-600 w-[5.6px] h-[1.5px] [transform:_rotate(2deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[65px] left-[180px] bg-greenyellow-100 w-[3.6px] h-[2.5px] [transform:_rotate(-18deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[86px] left-[7px] bg-fuchsia-300 w-[2.6px] h-[2.5px] [transform:_rotate(-97deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[68px] left-[155px] bg-gold-100 w-[4.6px] h-[3.5px] [transform:_rotate(75deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[48px] left-[143px] bg-orangered-300 w-[7.6px] h-[1.5px] [transform:_rotate(143deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[122px] left-[118px] bg-cornflowerblue-400 w-[7.6px] h-[1.5px] [transform:_rotate(133deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[4px] left-[177px] bg-palegoldenrod-500 w-[8.6px] h-[1.5px] [transform:_rotate(-66deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[38px] left-[152px] bg-plum-700 w-[1.6px] h-[1.5px] [transform:_rotate(132deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[76px] left-[176px] rounded-[50%] bg-cornflowerblue-500 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[99px] left-[201px] rounded-[50%] bg-orangered-200 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[35px] left-[129px] rounded-[50%] bg-paleturquoise-300 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[10px] left-[36px] rounded-[50%] bg-paleturquoise-200 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[45px] left-[29px] rounded-[50%] bg-greenyellow-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[15px] left-[202px] rounded-[50%] bg-mediumslateblue-400 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[0px] left-[131px] rounded-[50%] bg-greenyellow-100 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[81px] left-[218px] rounded-[50%] bg-chocolate-500 w-[4.1px] h-[4.1px]" />
                  <div className="absolute top-[24px] left-[113px] rounded-[50%] bg-darkblue-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[48px] left-[44px] rounded-[50%] bg-chocolate-500 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[100px] left-[27px] rounded-[50%] bg-greenyellow-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[84px] left-[128px] rounded-[50%] bg-deeppink-400 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[88px] left-[56px] rounded-[50%] bg-gold-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[57px] left-[125px] rounded-[50%] bg-gold-400 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[60px] left-[11px] rounded-[50%] bg-mediumslateblue-500 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[57px] left-[124px] rounded-[50%] bg-palegoldenrod-500 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[82px] left-[62px] rounded-[50%] bg-palegoldenrod-300 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[36px] left-[106px] rounded-[50%] bg-palegoldenrod-400 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[66px] left-[101px] rounded-[50%] bg-paleturquoise-300 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[37px] left-[97px] rounded-[50%] bg-skyblue-300 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[85px] left-[165px] rounded-[50%] bg-paleturquoise-400 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[101px] left-[40px] rounded-[50%] bg-plum-100 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[48px] left-[154px] rounded-[50%] bg-chocolate-600 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[117px] left-[131px] rounded-[50%] bg-palegoldenrod-500 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[61px] left-[178px] rounded-[50%] bg-greenyellow-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[5px] left-[77px] rounded-[50%] bg-fuchsia-400 w-[3.1px] h-[3.1px]" />
                  <div className="absolute top-[0px] left-[26px] rounded-[50%] bg-paleturquoise-500 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[53px] left-[1px] rounded-[50%] bg-skyblue-400 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[59px] left-[181px] rounded-[50%] bg-gold-500 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[100px] left-[93px] rounded-[50%] bg-orangered-300 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[33px] left-[14px] rounded-[50%] bg-darkblue-500 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[83px] left-[136px] rounded-[50%] bg-fuchsia-400 w-[1.1px] h-[1.1px]" />
                  <div className="absolute top-[97px] left-[222px] rounded-[50%] bg-orange-400 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[92px] left-[100px] rounded-[50%] bg-fuchsia-500 w-[2.1px] h-[2.1px]" />
                  <div className="absolute top-[92px] left-[198px] rounded-[50%] bg-darkblue-500 w-[3.1px] h-[3.1px]" />
                  <img
                    className="absolute top-[14.5px] left-[182.1px] w-[4.5px] h-[4.5px] object-contain"
                    alt=""
                    src="/bars69.svg"
                  />
                  <img
                    className="absolute top-[21.8px] left-[28.7px] w-[5.3px] h-[5.3px] object-contain"
                    alt=""
                    src="/polygon3.svg"
                  />
                  <img
                    className="absolute top-[6.5px] left-[210.5px] w-[4.5px] h-[4.5px] object-contain"
                    alt=""
                    src="/bars70.svg"
                  />
                  <img
                    className="absolute top-[89.2px] left-[141px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars71.svg"
                  />
                  <img
                    className="absolute top-[49.4px] left-[20.8px] w-[2.6px] h-[2.6px] object-contain"
                    alt=""
                    src="/bars72.svg"
                  />
                  <img
                    className="absolute top-[40px] left-[-0.2px] w-[4.2px] h-[4.2px] object-contain"
                    alt=""
                    src="/bars73.svg"
                  />
                  <img
                    className="absolute top-[97.7px] left-[-1.1px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/chart-bar.svg"
                  />
                  <img
                    className="absolute top-[109px] left-[98.8px] w-[2.5px] h-[2.5px] object-contain"
                    alt=""
                    src="/bars75.svg"
                  />
                  <img
                    className="absolute top-[8px] left-[84.1px] w-[2.9px] h-[2.9px] object-contain"
                    alt=""
                    src="/bars77.svg"
                  />
                  <img
                    className="absolute top-[55.6px] left-[137.1px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/bars78.svg"
                  />
                  <img
                    className="absolute top-[85.9px] left-[198px] w-[5.3px] h-[5.3px] object-contain"
                    alt=""
                    src="/chart-bar1.svg"
                  />
                  <img
                    className="absolute top-[41px] left-[183.3px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars79.svg"
                  />
                  <img
                    className="absolute top-[80.9px] left-[151.8px] w-[5.2px] h-[5.2px] object-contain"
                    alt=""
                    src="/bars81.svg"
                  />
                  <img
                    className="absolute top-[110.3px] left-[163.6px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars82.svg"
                  />
                  <img
                    className="absolute top-[110px] left-[23px] w-[3px] h-[3px] object-contain"
                    alt=""
                    src="/chart-bar2.svg"
                  />
                  <img
                    className="absolute top-[24px] left-[2.9px] w-1.5 h-1.5 object-contain"
                    alt=""
                    src="/polygon4.svg"
                  />
                  <img
                    className="absolute top-[120.4px] left-[101.9px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars86.svg"
                  />
                  <img
                    className="absolute top-[89.8px] left-[194px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/chart-bar3.svg"
                  />
                  <img
                    className="absolute top-[141px] left-[21px] w-[5.1px] h-[5.1px] object-contain"
                    alt=""
                    src="/polygon6.svg"
                  />
                  <img
                    className="absolute top-[38px] left-[212.5px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/bars90.svg"
                  />
                  <img
                    className="absolute top-[26px] left-[61.1px] w-[5.5px] h-[5.5px] object-contain"
                    alt=""
                    src="/bars93.svg"
                  />
                  <img
                    className="absolute top-[68px] left-[-0.1px] w-[5.2px] h-[5.2px] object-contain"
                    alt=""
                    src="/bars94.svg"
                  />
                  <img
                    className="absolute top-[125.8px] left-[215.6px] w-[2.4px] h-[2.4px] object-contain"
                    alt=""
                    src="/bars95.svg"
                  />
                  <img
                    className="absolute top-[43px] left-[76.3px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars97.svg"
                  />
                  <img
                    className="absolute top-[125.6px] left-[209px] w-[3.6px] h-[3.6px] object-contain"
                    alt=""
                    src="/bars98.svg"
                  />
                  <img
                    className="absolute top-[72.1px] left-[183px] w-[5.5px] h-[5.5px] object-contain"
                    alt=""
                    src="/bars100.svg"
                  />
                  <img
                    className="absolute top-[103.8px] left-[28.6px] w-[2.4px] h-[2.4px] object-contain"
                    alt=""
                    src="/polygon7.svg"
                  />
                  <img
                    className="absolute top-[126.5px] left-[137.4px] w-[5.5px] h-[5.5px] object-contain"
                    alt=""
                    src="/bars103.svg"
                  />
                  <img
                    className="absolute top-[90.8px] left-[111.8px] w-[2.2px] h-[2.2px] object-contain"
                    alt=""
                    src="/polygon5.svg"
                  />
                  <img
                    className="absolute top-[44.9px] left-[99.5px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars105.svg"
                  />
                  <img
                    className="absolute top-[35.2px] left-[30.6px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars106.svg"
                  />
                  <img
                    className="absolute top-[91.1px] left-[87px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars107.svg"
                  />
                  <img
                    className="absolute top-[89.3px] left-[22px] w-[4.8px] h-[4.8px] object-contain"
                    alt=""
                    src="/polygon8.svg"
                  />
                  <img
                    className="absolute top-[45px] left-[151.1px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars110.svg"
                  />
                  <img
                    className="absolute top-[101.9px] left-[9.3px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/polygon9.svg"
                  />
                  <img
                    className="absolute top-[72.9px] left-[131px] w-[3px] h-[3px] object-contain"
                    alt=""
                    src="/bars112.svg"
                  />
                  <img
                    className="absolute top-[43px] left-[95.3px] w-[2.8px] h-[2.8px] object-contain"
                    alt=""
                    src="/bars113.svg"
                  />
                  <img
                    className="absolute top-[120px] left-[51.9px] w-[6.1px] h-[6.1px] object-contain"
                    alt=""
                    src="/star-team-target.svg"
                  />
                  <img
                    className="absolute top-[135.1px] left-[58px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/star-team-target1.svg"
                  />
                  <img
                    className="absolute top-[123.8px] left-[4.3px] w-[2.7px] h-[2.7px] object-contain"
                    alt=""
                    src="/star-team-target2.svg"
                  />
                  <img
                    className="absolute top-[37.9px] left-[147px] w-[5.2px] h-[5.2px] object-contain"
                    alt=""
                    src="/bars119.svg"
                  />
                  <img
                    className="absolute top-[29.7px] left-[142.2px] w-[5.8px] h-[5.8px] object-contain"
                    alt=""
                    src="/star-two.svg"
                  />
                  <img
                    className="absolute top-[43.9px] left-[93px] w-[3.3px] h-[3.3px] object-contain"
                    alt=""
                    src="/star-three.svg"
                  />
                  <img
                    className="absolute top-[59px] left-[35.1px] w-[5.6px] h-[5.6px] object-contain"
                    alt=""
                    src="/bars120.svg"
                  />
                  <img
                    className="absolute top-[120.9px] left-[127px] w-1 h-1 object-contain"
                    alt=""
                    src="/bars121.svg"
                  />
                  <img
                    className="absolute top-[110.8px] left-[33px] w-[4.9px] h-[4.9px] object-contain"
                    alt=""
                    src="/star-team-target3.svg"
                  />
                  <img
                    className="absolute top-[129.4px] left-[22.5px] w-[5.5px] h-[5.5px] object-contain"
                    alt=""
                    src="/star-team-target4.svg"
                  />
                  <img
                    className="absolute top-[125px] left-[122.4px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars127.svg"
                  />
                  <img
                    className="absolute top-[62px] left-[207.1px] w-[5.6px] h-[5.6px] object-contain"
                    alt=""
                    src="/bars129.svg"
                  />
                  <img
                    className="absolute top-[115.8px] left-[133px] w-[2.4px] h-[2.4px] object-contain"
                    alt=""
                    src="/bars131.svg"
                  />
                  <img
                    className="absolute top-[105.6px] left-[112.1px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/bars133.svg"
                  />
                  <img
                    className="absolute top-[102.9px] left-[203px] w-[3px] h-[3px] object-contain"
                    alt=""
                    src="/bars135.svg"
                  />
                  <img
                    className="absolute top-[8.6px] left-[24px] w-[4.5px] h-[4.5px] object-contain"
                    alt=""
                    src="/bars139.svg"
                  />
                  <img
                    className="absolute top-[104.9px] left-[126px] w-[3.8px] h-[3.8px] object-contain"
                    alt=""
                    src="/bars140.svg"
                  />
                  <img
                    className="absolute top-[91.5px] left-[71.3px] w-[4.5px] h-[4.5px] object-contain"
                    alt=""
                    src="/star-team-target5.svg"
                  />
                  <img
                    className="absolute top-[115.9px] left-[182.2px] w-[3.8px] h-[3.8px] object-contain"
                    alt=""
                    src="/bars144.svg"
                  />
                  <img
                    className="absolute top-[15.2px] left-[71px] w-[6.8px] h-[6.8px] object-contain"
                    alt=""
                    src="/star-team-target6.svg"
                  />
                  <img
                    className="absolute top-[44px] left-[162.7px] w-[2.5px] h-[2.5px] object-contain"
                    alt=""
                    src="/bars147.svg"
                  />
                  <img
                    className="absolute top-[76px] left-[105px] w-[4.2px] h-[4.2px]"
                    alt=""
                    src="/bars148.svg"
                  />
                  <img
                    className="absolute top-[121px] left-[75.6px] w-[3.6px] h-[3.6px] object-contain"
                    alt=""
                    src="/bars149.svg"
                  />
                  <img
                    className="absolute top-[76.2px] left-[173px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars151.svg"
                  />
                  <img
                    className="absolute top-[26.7px] left-[160.8px] w-[6.3px] h-[6.3px] object-contain"
                    alt=""
                    src="/star-four.svg"
                  />
                  <img
                    className="absolute top-[113.7px] left-[48.7px] w-[7.3px] h-[7.3px] object-contain"
                    alt=""
                    src="/star-team-target7.svg"
                  />
                  <img
                    className="absolute top-[89.1px] left-[13px] w-[2.9px] h-[2.9px] object-contain"
                    alt=""
                    src="/star-team-target8.svg"
                  />
                  <img
                    className="absolute top-[131.8px] left-[103.6px] w-[4.4px] h-[4.4px] object-contain"
                    alt=""
                    src="/bars155.svg"
                  />
                  <img
                    className="absolute top-[-1.7px] left-[114.8px] w-[2.7px] h-[2.7px] object-contain"
                    alt=""
                    src="/bars157.svg"
                  />
                  <img
                    className="absolute top-[101px] left-[185px] w-[6.4px] h-[6.4px] object-contain"
                    alt=""
                    src="/bars158.svg"
                  />
                  <img
                    className="absolute top-[125px] left-[116.9px] w-[3px] h-[3px] object-contain"
                    alt=""
                    src="/bars160.svg"
                  />
                  <img
                    className="absolute top-[29px] left-[42px] w-[2.3px] h-[2.3px] object-contain"
                    alt=""
                    src="/star-five.svg"
                  />
                  <img
                    className="absolute top-[44.8px] left-[32.2px] w-[4.8px] h-[4.8px] object-contain"
                    alt=""
                    src="/bars162.svg"
                  />
                  <div className="absolute top-[calc(50%_-_39.5px)] left-[24px] flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative font-semibold whitespace-nowrap text-white text-4xl ">
                      $3000
                    </div>
                    <div className="relative text-sm tracking-[0.04em] text-xl">
                      Forecast Commission
                    </div>
                  </div>
                  <div className="absolute top-[50.4px] left-[122.9px] bg-gold-100 w-[9.6px] h-[2.5px] [transform:_rotate(-136deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[44px] left-[74px] bg-greenyellow-100 w-[3.6px] h-[2.5px] [transform:_rotate(-18deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[38px] left-[75px] rounded-[50%] bg-gold-500 w-[1.1px] h-[1.1px]" />
                  <img
                    className="absolute top-[61.4px] left-[58.2px] w-[2.9px] h-[2.9px] object-contain"
                    alt=""
                    src="/bars163.svg"
                  />
                  <img
                    className="absolute top-[70.4px] left-[48.6px] w-[3.1px] h-[3.1px] object-contain"
                    alt=""
                    src="/bars164.svg"
                  />
                  <img
                    className="absolute top-[52px] left-[46px] w-[5.9px] h-[5.9px] object-contain"
                    alt=""
                    src="/bars165.svg"
                  />
                  <div className="absolute top-[61.1px] left-[101.5px] bg-gold-100 w-[9.6px] h-[2.5px] [transform:_rotate(150deg)] [transform-origin:0_0]" />
                </div>
                <div className="w-[215px] relative text-sm font-medium text-right inline-block">
                  <p className="m-0">
                    <span className="text-lime">+2.5%</span>
                    <span>{` increase `}</span>
                  </p>
                  <p className="m-0">vs last month</p>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-lg text-foundation-green-normal mq725:flex-wrap">
              <div className="flex-1 rounded-xl [background:linear-gradient(180deg,_rgba(210,_255,_240,_0),_#fff)] box-border flex flex-col items-start justify-between p-[11px] min-w-[174px] border-[0.5px] border-solid border-gainsboro-100">
                <div className="self-stretch h-[106px] flex flex-col items-start justify-between">
                  <div className="w-[122.7px] relative font-semibold inline-block text-black">
                    Current Run Rate Per Day
                  </div>
                  <div className="relative self-stretch font-semibold  whitespace-nowrap text-black">
                    $3000.00
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-xl [background:linear-gradient(180deg,_rgba(210,_255,_240,_0),_#fff)] box-border flex flex-col items-start justify-between p-[11px] min-w-[174px] border-[0.5px] border-solid border-gainsboro-100">
                <div className="self-stretch h-[106px] flex flex-col items-start justify-between">
                  <div className="w-[122.7px] relative font-semibold inline-block text-black">
                    Required Run Rate Per Day
                  </div>
                  <div className="relative self-stretch font-semibold text-black whitespace-nowrap">
                    $2500.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <EmployeeStatistics
          performanceVsTarget="Agent Ranking : Performance Vs Target"
          propDisplay="inline-block"
        />
        <FrameComponent1
          agentRankingPerformanceVs="Team Ranking : Actual vs Target"
          propHeight="unset"
          propMinHeight="49px"
        />
        <div className="self-stretch rounded-3xl bg-white flex flex-col items-center justify-center p-6 box-border gap-[24px] max-w-full text-right">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq725:flex-wrap">
            <div className="relative leading-[18px] font-semibold">
              SPIFF Summary
            </div>
            <div className="flex flex-row items-start justify-start w-56 text-base text-center rounded-3xl text-darkgray-100">
              <div className="flex-1 rounded-tl-3xl rounded-tr-none rounded-br-none rounded-bl-3xl flex flex-row items-center justify-center py-[9px] px-2.5 border-t-[0.5px] border-solid border-gainsboro-100 border-b-[0.5px] border-l-[0.5px]">
                <div className="relative font-medium inline-block min-w-[43px]">
                  Week
                </div>
              </div>
              <div className="flex-1 shadow-[0px_4px_10px_2px_rgba(0,_164,_108,_0.15)] bg-white overflow-hidden flex flex-row items-center justify-center p-2.5 text-foundation-green-normal">
                <div className="relative font-medium inline-block min-w-[50px]">
                  Month
                </div>
              </div>
              <div className="flex-1 rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none flex flex-row items-center justify-center py-[9px] px-2.5 border-t-[0.5px] border-solid border-gainsboro-100 border-r-[0.5px] border-b-[0.5px]">
                <div className="relative font-medium inline-block min-w-[35px]">
                  Year
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
            <ChartBarTen2 number="6" />
            <ChartBarTen1 number="850" />
            <ChartBarTen number="$500" />
          </div>
        </div>
        <FrameComponent />
      </div>
 

    </>
  );
};

export default DashboardManager;
