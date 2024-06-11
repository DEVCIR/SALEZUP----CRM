import ProgressGrid from "./ProgressGrid";
import PropTypes from "prop-types";

const CommissionContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-3xl bg-white flex flex-col items-end justify-center p-6 box-border gap-[36px] max-w-full text-left text-lg text-black font-display-xs-semibold ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] text-center text-foundation-green-normal mq975:flex-wrap">
      
        <div className="relative font-semibold text-3xl">
          My Commission: All Campaigns
        </div>

        <div className="rounded-3xl flex flex-row items-start justify-center [row-gap:20px] max-w-full text-sm text-darkgray-100 mq725:flex-wrap">
          <div className="shadow-[0px_2px_10px_2px_rgba(0,_164,_108,_0.15)] rounded-tl-3xl rounded-tr-none rounded-br-none rounded-bl-3xl bg-white overflow-hidden flex flex-row items-center justify-center p-2.5 whitespace-nowrap text-foundation-green-normal">
            <div className="relative font-medium inline-block min-w-[98px] text-black">
              Current Month
            </div>
          </div>
          <div className="w-[132px] box-border flex flex-row items-center justify-center py-[9px] px-2.5 border-t-[0.5px] border-solid border-gainsboro-100 border-b-[0.5px] border-l-[0.5px]">
            <div className="relative font-medium inline-block min-w-[52px] text-black">
              Quarter
            </div>
          </div>
          <div className="w-[132px] rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none box-border flex flex-row items-center justify-center py-[9px] px-2.5 border-t-[0.5px] border-solid border-gainsboro-100 border-r-[0.5px] border-b-[0.5px]">
            <div className="relative font-medium inline-block min-w-[30px] text-black">
              Year
            </div>
          </div>
        </div>
      </div>


      <div className="self-stretch h-[29px] relative text-mini font-nunito">

      <div className="absolute top-[0px] left-[0px] w-[120.1px] h-[29px] bg-[#067457] text-white rounded-2xl">
          <div className="absolute top-[0px] left-[0px] rounded-4xs bg-seagreen-100 w-full h-full" />
          <b className="absolute top-[15px] left-[8px] leading-[0%] inline-block w-[108px] min-w-[108px]">
          Campaigns
          </b>
        </div>
       
        <div className="absolute top-[0px] left-[128px] w-[120.1px] h-[29px] bg-[#067457] text-white rounded-2xl">
          <div className="absolute top-[0px] left-[0px] rounded-4xs bg-darkslategray-200 w-full h-full" />
          <b className="absolute top-[15px] left-[30px] leading-[0%] inline-block w-[72px]">
            Mobile
          </b>
        </div>

        

        <div className="absolute top-[0px] left-[264.1px] w-[120.1px] h-[29px] bg-[#067457] text-white rounded-2xl">
          <div className="absolute top-[0px] left-[0px] rounded-4xs bg-darkslategray-200 w-full h-full" />
          <b className="absolute top-[15px] left-[38px] leading-[0%] inline-block w-[82px] min-w-[74px]">
            Cola
          </b>
        </div>

        <div className="absolute top-[0px] left-[390.2px] w-[120.1px] h-[29px] bg-[#067457] text-white rounded-2xl">
          <div className="absolute top-[0px] left-[0px] rounded-4xs w-full h-full" />
          <b className="absolute top-[15px] left-[34px] leading-[0%] inline-block w-[52px]">
            Lipton
          </b>
        </div>

      </div>


      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[24px] max-w-full text-29xl ">
        
        <div className="h-[202px] flex-1 relative rounded-xl bg-[#013A2B] overflow-hidden min-w-[333px] max-w-full mq725:h-auto mq725:min-h-[202]">
          <div className="absolute top-[148.4px] left-[63.2px] rounded-[20.48px] bg-seagreen-500 w-[142.1px] h-[142.1px] overflow-hidden [transform:_rotate(56.6deg)] [transform-origin:0_0]" />
          <img
            className="absolute top-[-114.3px] left-[26.4px] rounded-[20.48px] w-[196.8px] h-[196.8px] overflow-hidden object-contain"
            alt=""
            src="/frame-83@2x.png"
          />
          <div className="absolute top-[-123.7px] left-[476.2px] rounded-[20.48px] bg-green-200/10 w-[162.1px] h-[162.1px] overflow-hidden [transform:_rotate(56.6deg)] [transform-origin:0_0]" />
          <div className="absolute top-[145.9px] left-[477px] rounded-[20.48px] bg-green-300/20 w-[162.1px] h-[162.1px] overflow-hidden [transform:_rotate(56.6deg)] [transform-origin:0_0]" />
          <div className="absolute top-[55.8px] left-[284.4px] rounded-[20.48px] bg-green-200/10 w-[103.7px] h-[103.7px] overflow-hidden [transform:_rotate(56.6deg)] [transform-origin:0_0]" />
          <div className="absolute top-[calc(50%_-_101px)] left-[calc(50%_-_256px)] w-full flex flex-row items-center justify-start py-0 px-3 box-border gap-[24px] max-w-full h-full mq725:flex-wrap">
            <div className="h-[202px] flex-1 relative rounded-21xl overflow-hidden min-w-[172px]">
              <div className="absolute top-[124px] left-[116px] bg-pink-300 w-[10.6px] h-[2.5px] [transform:_rotate(110deg)] [transform-origin:0_0]" />
              <div className="absolute top-[179.2px] left-[111px] bg-purple-300 w-[10.6px] h-[2.5px] [transform:_rotate(110deg)] [transform-origin:0_0]" />
              <div className="absolute top-[88px] left-[172px] bg-green-300 w-[7.6px] h-[2.5px] [transform:_rotate(30deg)] [transform-origin:0_0]" />
              <div className="absolute top-[105px] left-[134px] bg-blue-100 w-[8.6px] h-[1.5px] [transform:_rotate(-63deg)] [transform-origin:0_0]" />
              <div className="absolute top-[160.2px] left-[129px] bg-purple-100 w-[8.6px] h-[1.5px] [transform:_rotate(-63deg)] [transform-origin:0_0]" />
              <div className="absolute top-[11px] left-[124px] bg-palegoldenrod-500 w-[8.6px] h-[2.5px] [transform:_rotate(34deg)] [transform-origin:0_0]" />
              <div className="absolute top-[77px] left-[81.8px] bg-plum-300 w-[7.6px] h-[1.5px] [transform:_rotate(32deg)] [transform-origin:0_0]" />
              <div className="absolute top-[34px] left-[176px] bg-fuchsia-200 w-[5.6px] h-[1.5px] [transform:_rotate(61deg)] [transform-origin:0_0]" />
              <div className="absolute top-[63.6px] left-[217px] bg-fuchsia-200 w-[5.6px] h-[1.5px] [transform:_rotate(61deg)] [transform-origin:0_0]" />
              <div className="absolute top-[84px] left-[52.1px] bg-darkblue-100 w-[2.6px] h-[2.5px] [transform:_rotate(69deg)] [transform-origin:0_0]" />
              <div className="absolute top-[30px] left-[12px] bg-plum-200 w-[6.6px] h-[2.5px] [transform:_rotate(141deg)] [transform-origin:0_0]" />
              <div className="absolute top-[129px] left-[97px] bg-palegoldenrod-100 w-[2.6px] h-[1.5px] [transform:_rotate(-13deg)] [transform-origin:0_0]" />
              <div className="absolute top-[184.2px] left-[92px] bg-palegoldenrod-100 w-[2.6px] h-[1.5px] [transform:_rotate(-13deg)] [transform-origin:0_0]" />
              <div className="absolute top-[57px] left-[157px] bg-gold-100 w-[2.6px] h-[2.5px] [transform:_rotate(-83deg)] [transform-origin:0_0]" />
              <div className="absolute top-[67px] left-[47px] bg-cornflowerblue-100 w-[1.6px] h-[1.5px] [transform:_rotate(-102deg)] [transform-origin:0_0]" />
              <div className="absolute top-[9px] left-[104px] bg-skyblue-100 w-[2.6px] h-[2.5px] [transform:_rotate(-56deg)] [transform-origin:0_0]" />
              <div className="absolute top-[122.6px] left-[242px] bg-greenyellow-200 w-[7.6px] h-[1.5px] [transform:_rotate(5deg)] [transform-origin:0_0]" />
              <div className="absolute top-[128px] left-[44.1px] bg-paleturquoise-200 w-[9.6px] h-[2.5px] [transform:_rotate(12deg)] [transform-origin:0_0]" />
              <div className="absolute top-[183.2px] left-[39.1px] bg-paleturquoise-200 w-[9.6px] h-[2.5px] [transform:_rotate(12deg)] [transform-origin:0_0]" />
              <div className="absolute top-[111px] left-[83px] bg-mediumslateblue-400 w-[5.6px] h-[1.5px] [transform:_rotate(-20deg)] [transform-origin:0_0]" />
              <div className="absolute top-[166.2px] left-[78px] bg-mediumslateblue-400 w-[5.6px] h-[1.5px] [transform:_rotate(-20deg)] [transform-origin:0_0]" />
              <div className="absolute top-[62.7px] left-[122.7px] bg-deeppink-400 w-[7.6px] h-[1.5px] [transform:_rotate(117deg)] [transform-origin:0_0]" />
              <div className="absolute top-[84px] left-[181px] bg-palegoldenrod-200 w-[3.6px] h-[2.5px] [transform:_rotate(-149deg)] [transform-origin:0_0]" />
              <div className="absolute top-[113.6px] left-[222px] bg-palegoldenrod-200 w-[3.6px] h-[2.5px] [transform:_rotate(-149deg)] [transform-origin:0_0]" />
              <div className="absolute top-[9px] left-[31px] bg-deeppink-100 w-[7.6px] h-[2.5px] [transform:_rotate(100deg)] [transform-origin:0_0]" />
              <div className="absolute top-[118px] left-[159px] bg-paleturquoise-100 w-[1.6px] h-[3.5px] [transform:_rotate(-6deg)] [transform-origin:0_0]" />
              <div className="absolute top-[173.2px] left-[154px] bg-paleturquoise-100 w-[1.6px] h-[3.5px] [transform:_rotate(-6deg)] [transform-origin:0_0]" />
              <div className="absolute top-[12px] left-[44px] bg-deeppink-400 w-[4.6px] h-[2.5px] [transform:_rotate(10deg)] [transform-origin:0_0]" />
              <div className="absolute top-[151px] left-[67.1px] bg-chocolate-100 w-[6.6px] h-[1.5px] [transform:_rotate(-164deg)] [transform-origin:0_0]" />
              <div className="absolute top-[206.2px] left-[62.1px] bg-chocolate-100 w-[6.6px] h-[1.5px] [transform:_rotate(-164deg)] [transform-origin:0_0]" />
              <div className="absolute top-[23px] left-[83px] bg-cornflowerblue-500 w-[1.6px] h-[2.5px] [transform:_rotate(-107deg)] [transform-origin:0_0]" />
              <div className="absolute top-[121px] left-[91px] rounded-[50%] bg-palegoldenrod-500 w-[4.1px] h-[4.1px]" />
              <div className="absolute top-[176.2px] left-[86px] rounded-[50%] bg-palegoldenrod-500 w-[4.1px] h-[4.1px]" />
              <div className="absolute top-[118px] left-[9.1px] rounded-[50%] bg-darkblue-400 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[142px] left-[115px] rounded-[50%] bg-orange-200 w-[1.1px] h-[1.1px]" />
              <div className="absolute top-[197.2px] left-[110px] rounded-[50%] bg-orange-200 w-[1.1px] h-[1.1px]" />
              <div className="absolute top-[97px] left-[178px] rounded-[50%] bg-orangered-200 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[126.6px] left-[219px] rounded-[50%] bg-orangered-200 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[152.2px] left-[173px] rounded-[50%] bg-orangered-200 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[58px] left-[21px] rounded-[50%] bg-plum-300 w-[1.1px] h-[1.1px]" />
              <div className="absolute top-[137px] left-[93px] rounded-[50%] bg-gold-200 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[192.2px] left-[88px] rounded-[50%] bg-gold-200 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[116px] left-[175px] rounded-[50%] bg-plum-100 w-[1.1px] h-[1.1px]" />
              <div className="absolute top-[171.2px] left-[170px] rounded-[50%] bg-plum-100 w-[1.1px] h-[1.1px]" />
              <div className="absolute top-[89px] left-[104px] rounded-[50%] bg-fuchsia-200 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[97px] left-[6.1px] rounded-[50%] bg-darkblue-200 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[42px] left-[34px] rounded-[50%] bg-plum-400 w-[4.1px] h-[4.1px]" />
              <div className="absolute top-[90px] left-[34.1px] rounded-[50%] bg-gold-300 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[84px] left-[34.1px] rounded-[50%] bg-paleturquoise-500 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[4px] left-[134px] rounded-[50%] bg-orange-400 w-[4.1px] h-[4.1px]" />
              <div className="absolute top-[12px] left-[158px] rounded-[50%] bg-mediumslateblue-200 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[9px] left-[154px] rounded-[50%] bg-deeppink-200 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[109px] left-[60.1px] rounded-[50%] bg-skyblue-400 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[164.2px] left-[55.1px] rounded-[50%] bg-skyblue-400 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[181.2px] left-[191px] rounded-[50%] bg-mediumslateblue-100 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[30px] left-[138px] rounded-[50%] bg-orange-100 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[125px] left-[77px] rounded-[50%] bg-cornflowerblue-200 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[187.2px] left-[72.1px] rounded-[50%] bg-cornflowerblue-200 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[131px] left-[68.1px] rounded-[50%] bg-plum-700 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[186.2px] left-[63.1px] rounded-[50%] bg-plum-700 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[64px] left-[202px] rounded-[50%] bg-chocolate-100 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[93.6px] left-[243px] rounded-[50%] bg-chocolate-100 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[93px] left-[56.1px] rounded-[50%] bg-plum-400 w-[1.1px] h-[1.1px]" />
              <div className="absolute top-[115px] left-[107px] rounded-[50%] bg-mediumslateblue-500 w-[4.1px] h-[4.1px]" />
              <div className="absolute top-[170.2px] left-[102px] rounded-[50%] bg-mediumslateblue-500 w-[4.1px] h-[4.1px]" />
             
              <img
                className="absolute top-[135.7px] left-[205px] w-[3.5px] h-[3.5px] object-contain"
                alt=""
                src="/bars.svg"
              />
              <img
                className="absolute top-[191px] left-[200px] w-[3.5px] h-[3.5px] object-contain"
                alt=""
                src="/bars1.svg"
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
                className="absolute top-[74.6px] left-[261.7px] w-[4.3px] h-[4.3px] object-contain"
                alt=""
                src="/bars6.svg"
              />
              <img
                className="absolute top-[35.6px] left-[246.7px] w-[4.3px] h-[4.3px] object-contain"
                alt=""
                src="/bars7.svg"
              />
              <img
                className="absolute top-[7.6px] left-[225.7px] w-[4.3px] h-[4.3px] object-contain"
                alt=""
                src="/bars7.svg"
              />
              <img
                className="absolute top-[104px] left-[184px] w-[3px] h-[3px] object-contain"
                alt=""
                src="/bars8.svg"
              />
              <img
                className="absolute top-[133.6px] left-[225px] w-[3px] h-[3px] object-contain"
                alt=""
                src="/bars9.svg"
              />
              <img
                className="absolute top-[159.2px] left-[179px] w-[3px] h-[3px] object-contain"
                alt=""
                src="/bars10.svg"
              />
              <img
                className="absolute top-[188.9px] left-[220px] w-[3px] h-[3px] object-contain"
                alt=""
                src="/bars11.svg"
              />
              <img
                className="absolute top-[130.4px] left-[66.1px] w-[5.9px] h-[5.9px] object-contain"
                alt=""
                src="/bars12.svg"
              />
              <img
                className="absolute top-[185.6px] left-[61.1px] w-[5.9px] h-[5.9px] object-contain"
                alt=""
                src="/bars13.svg"
              />
              <img
                className="absolute top-[95.8px] left-[68.1px] w-[2.6px] h-[2.6px] object-contain"
                alt=""
                src="/bars14.svg"
              />
              <img
                className="absolute top-[94.1px] left-[33.7px] w-[5.5px] h-[5.5px] object-contain"
                alt=""
                src="/bars15.svg"
              />
              <img
                className="absolute top-[129.3px] left-[191px] w-[3.1px] h-[3.1px] object-contain"
                alt=""
                src="/bars16.svg"
              />
              <img
                className="absolute top-[184.6px] left-[186px] w-[3.1px] h-[3.1px] object-contain"
                alt=""
                src="/bars17.svg"
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
                className="absolute top-[148px] left-[28.9px] w-[2.5px] h-[2.5px] object-contain"
                alt=""
                src="/bars19.svg"
              />
              <img
                className="absolute top-[203.2px] left-[23.9px] w-[2.5px] h-[2.5px] object-contain"
                alt=""
                src="/bars20.svg"
              />
              <img
                className="absolute top-[66px] left-[148.2px] w-[2.9px] h-[2.9px] object-contain"
                alt=""
                src="/bars21.svg"
              />
              <img
                className="absolute top-[120.6px] left-[26.2px] w-[5.9px] h-[5.9px] object-contain"
                alt=""
                src="/bars22.svg"
              />
              <img
                className="absolute top-[175.8px] left-[21.2px] w-[5.9px] h-[5.9px] object-contain"
                alt=""
                src="/bars23.svg"
              />
              <img
                className="absolute top-[102.9px] left-[203.2px] w-[2.8px] h-[2.8px] object-contain"
                alt=""
                src="/bars24.svg"
              />
              <img
                className="absolute top-[132.5px] left-[244.1px] w-[2.8px] h-[2.8px] object-contain"
                alt=""
                src="/bars25.svg"
              />
              <img
                className="absolute top-[158.1px] left-[198.2px] w-[2.8px] h-[2.8px] object-contain"
                alt=""
                src="/bars26.svg"
              />
              <img
                className="absolute top-[187.8px] left-[239.1px] w-[2.8px] h-[2.8px] object-contain"
                alt=""
                src="/bars27.svg"
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
                className="absolute top-[67.6px] left-[221.8px] w-[2.7px] h-[2.7px] object-contain"
                alt=""
                src="/bars30.svg"
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
                className="absolute top-[69px] left-[241.8px] w-[2.7px] h-[2.7px] object-contain"
                alt=""
                src="/bars34.svg"
              />
              <img
                className="absolute top-[30px] left-[226.8px] w-[2.7px] h-[2.7px] object-contain"
                alt=""
                src="/bars35.svg"
              />
              <img
                className="absolute top-[2px] left-[205.8px] w-[2.7px] h-[2.7px] object-contain"
                alt=""
                src="/bars35.svg"
              />
              <img
                className="absolute top-[125px] left-[89.9px] w-[2.8px] h-[2.8px] object-contain"
                alt=""
                src="/bars36.svg"
              />
              <img
                className="absolute top-[180.2px] left-[84.9px] w-[2.8px] h-[2.8px] object-contain"
                alt=""
                src="/bars37.svg"
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
                className="absolute top-[115.6px] left-[58.9px] w-[4.4px] h-[4.4px] object-contain"
                alt=""
                src="/bars40.svg"
              />
              <img
                className="absolute top-[170.9px] left-[53.9px] w-[4.4px] h-[4.4px] object-contain"
                alt=""
                src="/bars41.svg"
              />
              <img
                className="absolute top-[39px] left-[63.3px] w-[5.7px] h-[5.7px] object-contain"
                alt=""
                src="/bars42.svg"
              />
              <img
                className="absolute top-[190.2px] left-[176.9px] w-[6.1px] h-[6.1px] object-contain"
                alt=""
                src="/bars43.svg"
              />
              <img
                className="absolute top-[100.8px] left-[87px] w-[2.6px] h-[2.6px] object-contain"
                alt=""
                src="/bars44.svg"
              />
              <img
                className="absolute top-[156.1px] left-[82px] w-[2.6px] h-[2.6px] object-contain"
                alt=""
                src="/bars45.svg"
              />
              <img
                className="absolute top-[144.7px] left-[168.5px] w-[3.5px] h-[3.5px] object-contain"
                alt=""
                src="/bars46.svg"
              />
              <img
                className="absolute top-[199.9px] left-[163.5px] w-[3.5px] h-[3.5px] object-contain"
                alt=""
                src="/bars47.svg"
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
                className="absolute top-[120.8px] left-[224px] w-[5.6px] h-[5.6px] object-contain"
                alt=""
                src="/bars50.svg"
              />
              <img
                className="absolute top-[176.1px] left-[219px] w-[5.6px] h-[5.6px] object-contain"
                alt=""
                src="/bars51.svg"
              />
              <img
                className="absolute top-[16px] left-[198.2px] w-[4.4px] h-[4.4px] object-contain"
                alt=""
                src="/bars52.svg"
              />
              <img
                className="absolute top-[111.6px] left-[71.2px] w-[5.9px] h-[5.9px] object-contain"
                alt=""
                src="/bars53.svg"
              />
              <img
                className="absolute top-[166.8px] left-[66.2px] w-[5.9px] h-[5.9px] object-contain"
                alt=""
                src="/bars54.svg"
              />
              <img
                className="absolute top-[9.3px] left-[42.8px] w-[2.7px] h-[2.7px] object-contain"
                alt=""
                src="/bars55.svg"
              />
              <img
                className="absolute top-[130.8px] left-[65.7px] w-[2.4px] h-[2.4px] object-contain"
                alt=""
                src="/bars56.svg"
              />
              <img
                className="absolute top-[186px] left-[60.7px] w-[2.4px] h-[2.4px] object-contain"
                alt=""
                src="/bars57.svg"
              />
              <img
                className="absolute top-[142.6px] left-[238.9px] w-[6.1px] h-[6.1px] object-contain"
                alt=""
                src="/bars58.svg"
              />
              <img
                className="absolute top-[197.9px] left-[233.9px] w-[6.1px] h-[6.1px] object-contain"
                alt=""
                src="/bars59.svg"
              />
              <img
                className="absolute top-[137.3px] left-[36.5px] w-[2.7px] h-[2.7px] object-contain"
                alt=""
                src="/bars60.svg"
              />
              <img
                className="absolute top-[192.5px] left-[31.5px] w-[2.7px] h-[2.7px] object-contain"
                alt=""
                src="/bars61.svg"
              />
              <img
                className="absolute top-[124.6px] left-[167.8px] w-[2.4px] h-[2.4px] object-contain"
                alt=""
                src="/bars62.svg"
              />
              <img
                className="absolute top-[179.8px] left-[162.8px] w-[2.4px] h-[2.4px] object-contain"
                alt=""
                src="/bars63.svg"
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
                className="absolute top-[142.5px] left-[29.1px] w-[4.5px] h-[4.5px] object-contain"
                alt=""
                src="/bars65.svg"
              />
              <img
                className="absolute top-[197.7px] left-[24.1px] w-[4.5px] h-[4.5px] object-contain"
                alt=""
                src="/bars66.svg"
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
              <div className="absolute top-[109.6px] left-[250px] bg-skyblue-300 w-[1.6px] h-[1.5px] [transform:_rotate(174deg)] [transform-origin:0_0]" />
              <div className="absolute top-[2px] left-[137px] bg-orange-200 w-[3.6px] h-[2.5px] [transform:_rotate(-172deg)] [transform-origin:0_0]" />
              <div className="absolute top-[138px] left-[161px] bg-paleturquoise-400 w-[7.6px] h-[2.5px] [transform:_rotate(-23deg)] [transform-origin:0_0]" />
              <div className="absolute top-[78.5px] left-[68.5px] bg-chocolate-500 w-[8.6px] h-[1.5px] [transform:_rotate(-173deg)] [transform-origin:0_0]" />
              <div className="absolute top-[74px] left-[13px] bg-skyblue-400 w-[7.6px] h-[1.5px] [transform:_rotate(-4deg)] [transform-origin:0_0]" />
              <div className="absolute top-[86px] left-[33.1px] bg-chocolate-200 w-[7.6px] h-[1.5px] [transform:_rotate(134deg)] [transform-origin:0_0]" />
              <div className="absolute top-[22px] left-[214px] bg-chocolate-300 w-[1.6px] h-[1.5px] [transform:_rotate(154deg)] [transform-origin:0_0]" />
              <div className="absolute top-[82px] left-[156px] bg-fuchsia-200 w-[3.6px] h-[3.5px] [transform:_rotate(132deg)] [transform-origin:0_0]" />
              <div className="absolute top-[6px] left-[15px] bg-chocolate-400 w-[3.6px] h-[2.5px] [transform:_rotate(53deg)] [transform-origin:0_0]" />
              <div className="absolute top-[128px] left-[213px] bg-greenyellow-300 w-[4.6px] h-[1.5px] [transform:_rotate(166deg)] [transform-origin:0_0]" />
              <div className="absolute top-[157.6px] left-[254px] bg-greenyellow-300 w-[4.6px] h-[1.5px] [transform:_rotate(166deg)] [transform-origin:0_0]" />
              <div className="absolute top-[183.2px] left-[208px] bg-greenyellow-300 w-[4.6px] h-[1.5px] [transform:_rotate(166deg)] [transform-origin:0_0]" />
              <div className="absolute top-[171.2px] left-[194px] bg-orangered-300 w-[7.6px] h-[1.5px] [transform:_rotate(-175deg)] [transform-origin:0_0]" />
              <div className="absolute top-[122px] left-[145px] bg-orange-200 w-[2.6px] h-[1.5px] [transform:_rotate(64deg)] [transform-origin:0_0]" />
              <div className="absolute top-[177.2px] left-[140px] bg-orange-200 w-[2.6px] h-[1.5px] [transform:_rotate(64deg)] [transform-origin:0_0]" />
              <div className="absolute top-[78px] left-[208px] bg-darkblue-300 w-[4.6px] h-[2.5px] [transform:_rotate(-60deg)] [transform-origin:0_0]" />
              <div className="absolute top-[107.6px] left-[249px] bg-darkblue-300 w-[4.6px] h-[2.5px] [transform:_rotate(-60deg)] [transform-origin:0_0]" />
              <div className="absolute top-[86px] left-[123px] bg-orange-300 w-[3.6px] h-[2.5px] [transform:_rotate(-53deg)] [transform-origin:0_0]" />
              <div className="absolute top-[11px] left-[7px] bg-plum-500 w-[3.6px] h-[2.5px] [transform:_rotate(-136deg)] [transform-origin:0_0]" />
              <div className="absolute top-[55px] left-[195px] bg-orangered-100 w-[7.6px] h-[2.5px] [transform:_rotate(-21deg)] [transform-origin:0_0]" />
              <div className="absolute top-[45.6px] left-[221px] bg-orangered-100 w-[7.6px] h-[2.5px] [transform:_rotate(-21deg)] [transform-origin:0_0]" />
              <div className="absolute top-[17.6px] left-[200px] bg-orangered-100 w-[7.6px] h-[2.5px] [transform:_rotate(-21deg)] [transform-origin:0_0]" />
              <div className="absolute top-[39px] left-[222px] bg-gold-500 w-[8.6px] h-[1.5px] [transform:_rotate(-63deg)] [transform-origin:0_0]" />
              <div className="absolute top-[11px] left-[201px] bg-gold-500 w-[8.6px] h-[1.5px] [transform:_rotate(-63deg)] [transform-origin:0_0]" />
              <div className="absolute top-[68.6px] left-[263px] bg-gold-500 w-[8.6px] h-[1.5px] [transform:_rotate(-63deg)] [transform-origin:0_0]" />
              <div className="absolute top-[29.6px] left-[248px] bg-gold-500 w-[8.6px] h-[1.5px] [transform:_rotate(-63deg)] [transform-origin:0_0]" />
              <div className="absolute top-[1.6px] left-[227px] bg-gold-500 w-[8.6px] h-[1.5px] [transform:_rotate(-63deg)] [transform-origin:0_0]" />
              <div className="absolute top-[33px] left-[130px] bg-deeppink-300 w-[6.6px] h-[2.5px] [transform:_rotate(173deg)] [transform-origin:0_0]" />
              <div className="absolute top-[128px] left-[84px] bg-plum-600 w-[5.6px] h-[1.5px] [transform:_rotate(2deg)] [transform-origin:0_0]" />
              <div className="absolute top-[183.2px] left-[79px] bg-plum-600 w-[5.6px] h-[1.5px] [transform:_rotate(2deg)] [transform-origin:0_0]" />
              <div className="absolute top-[65px] left-[180px] bg-greenyellow-100 w-[3.6px] h-[2.5px] [transform:_rotate(-18deg)] [transform-origin:0_0]" />
              <div className="absolute top-[93px] left-[7.1px] bg-fuchsia-300 w-[2.6px] h-[2.5px] [transform:_rotate(-97deg)] [transform-origin:0_0]" />
              <div className="absolute top-[68px] left-[155px] bg-gold-100 w-[4.6px] h-[3.5px] [transform:_rotate(75deg)] [transform-origin:0_0]" />
              <div className="absolute top-[48px] left-[143px] bg-orangered-300 w-[7.6px] h-[1.5px] [transform:_rotate(143deg)] [transform-origin:0_0]" />
              <div className="absolute top-[122px] left-[118px] bg-cornflowerblue-400 w-[7.6px] h-[1.5px] [transform:_rotate(133deg)] [transform-origin:0_0]" />
              <div className="absolute top-[177.2px] left-[113px] bg-cornflowerblue-400 w-[7.6px] h-[1.5px] [transform:_rotate(133deg)] [transform-origin:0_0]" />
              <div className="absolute top-[4px] left-[177px] bg-palegoldenrod-500 w-[8.6px] h-[1.5px] [transform:_rotate(-66deg)] [transform-origin:0_0]" />
              <div className="absolute top-[38px] left-[152px] bg-plum-700 w-[1.6px] h-[1.5px] [transform:_rotate(132deg)] [transform-origin:0_0]" />
              <div className="absolute top-[76px] left-[176px] rounded-[50%] bg-cornflowerblue-500 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[99px] left-[201px] rounded-[50%] bg-orangered-200 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[128.6px] left-[242px] rounded-[50%] bg-orangered-200 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[154.2px] left-[196px] rounded-[50%] bg-orangered-200 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[183.9px] left-[237px] rounded-[50%] bg-orangered-200 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[35px] left-[129px] rounded-[50%] bg-paleturquoise-300 w-[1.1px] h-[1.1px]" />
              <div className="absolute top-[10px] left-[36px] rounded-[50%] bg-paleturquoise-200 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[45px] left-[29px] rounded-[50%] bg-greenyellow-400 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[15px] left-[202px] rounded-[50%] bg-mediumslateblue-400 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[0px] left-[131px] rounded-[50%] bg-greenyellow-100 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[24px] left-[113px] rounded-[50%] bg-darkblue-400 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[48px] left-[44px] rounded-[50%] bg-chocolate-500 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[107px] left-[27.1px] rounded-[50%] bg-greenyellow-400 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[162.2px] left-[22.1px] rounded-[50%] bg-greenyellow-400 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[84px] left-[128px] rounded-[50%] bg-deeppink-400 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[95px] left-[56.1px] rounded-[50%] bg-gold-400 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[57px] left-[125px] rounded-[50%] bg-gold-400 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[60px] left-[11px] rounded-[50%] bg-mediumslateblue-500 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[57px] left-[124px] rounded-[50%] bg-palegoldenrod-500 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[89px] left-[62.1px] rounded-[50%] bg-palegoldenrod-300 w-[1.1px] h-[1.1px]" />
              <div className="absolute top-[36px] left-[106px] rounded-[50%] bg-palegoldenrod-400 w-[1.1px] h-[1.1px]" />
              <div className="absolute top-[66px] left-[101px] rounded-[50%] bg-paleturquoise-300 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[37px] left-[97px] rounded-[50%] bg-skyblue-300 w-[1.1px] h-[1.1px]" />
              <div className="absolute top-[85px] left-[165px] rounded-[50%] bg-paleturquoise-400 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[108px] left-[40.1px] rounded-[50%] bg-plum-100 w-[1.1px] h-[1.1px]" />
              <div className="absolute top-[163.2px] left-[35.1px] rounded-[50%] bg-plum-100 w-[1.1px] h-[1.1px]" />
              <div className="absolute top-[48px] left-[154px] rounded-[50%] bg-chocolate-600 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[117px] left-[131px] rounded-[50%] bg-palegoldenrod-500 w-[1.1px] h-[1.1px]" />
              <div className="absolute top-[172.2px] left-[126px] rounded-[50%] bg-palegoldenrod-500 w-[1.1px] h-[1.1px]" />
              <div className="absolute top-[61px] left-[178px] rounded-[50%] bg-greenyellow-400 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[90.6px] left-[219px] rounded-[50%] bg-greenyellow-400 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[5px] left-[77px] rounded-[50%] bg-fuchsia-400 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[0px] left-[26px] rounded-[50%] bg-paleturquoise-500 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[53px] left-[1px] rounded-[50%] bg-skyblue-400 w-[1.1px] h-[1.1px]" />
              <div className="absolute top-[59px] left-[181px] rounded-[50%] bg-gold-500 w-[1.1px] h-[1.1px]" />
              <div className="absolute top-[88.6px] left-[222px] rounded-[50%] bg-gold-500 w-[1.1px] h-[1.1px]" />
              <div className="absolute top-[100px] left-[93px] rounded-[50%] bg-orangered-300 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[155.2px] left-[88px] rounded-[50%] bg-orangered-300 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[33px] left-[14px] rounded-[50%] bg-darkblue-500 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[83px] left-[136px] rounded-[50%] bg-fuchsia-400 w-[1.1px] h-[1.1px]" />
              <div className="absolute top-[97px] left-[222px] rounded-[50%] bg-orange-400 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[92px] left-[100px] rounded-[50%] bg-fuchsia-500 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[147.2px] left-[95px] rounded-[50%] bg-fuchsia-500 w-[2.1px] h-[2.1px]" />
              <div className="absolute top-[92px] left-[198px] rounded-[50%] bg-darkblue-500 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[121.6px] left-[239px] rounded-[50%] bg-darkblue-500 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[147.2px] left-[193px] rounded-[50%] bg-darkblue-500 w-[3.1px] h-[3.1px]" />
              <div className="absolute top-[176.9px] left-[234px] rounded-[50%] bg-darkblue-500 w-[3.1px] h-[3.1px]" />
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
                className="absolute top-[104.7px] left-[-1px] w-[3.1px] h-[3.1px] object-contain"
                alt=""
                src="/bars74.svg"
              />
              <img
                className="absolute top-[109px] left-[98.8px] w-[2.5px] h-[2.5px] object-contain"
                alt=""
                src="/bars75.svg"
              />
              <img
                className="absolute top-[164.2px] left-[93.8px] w-[2.5px] h-[2.5px] object-contain"
                alt=""
                src="/bars76.svg"
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
                className="absolute top-[41px] left-[183.3px] w-[4.4px] h-[4.4px] object-contain"
                alt=""
                src="/bars79.svg"
              />
              <img
                className="absolute top-[70.6px] left-[224.3px] w-[4.4px] h-[4.4px] object-contain"
                alt=""
                src="/bars80.svg"
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
                className="absolute top-[165.5px] left-[158.6px] w-[4.4px] h-[4.4px] object-contain"
                alt=""
                src="/bars83.svg"
              />
              <img
                className="absolute top-[117px] left-[23.1px] w-[3px] h-[3px] object-contain"
                alt=""
                src="/bars84.svg"
              />
              <img
                className="absolute top-[172.3px] left-[18.1px] w-[3px] h-[3px] object-contain"
                alt=""
                src="/bars85.svg"
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
                className="absolute top-[175.6px] left-[96.9px] w-[3.1px] h-[3.1px] object-contain"
                alt=""
                src="/bars87.svg"
              />
              <img
                className="absolute top-[148px] left-[21.1px] w-[5.1px] h-[5.1px] object-contain"
                alt=""
                src="/bars88.svg"
              />
              <img
                className="absolute top-[203.2px] left-[16.1px] w-[5.1px] h-[5.1px] object-contain"
                alt=""
                src="/bars89.svg"
              />
              <img
                className="absolute top-[38px] left-[212.5px] w-[5.9px] h-[5.9px] object-contain"
                alt=""
                src="/bars90.svg"
              />
              <img
                className="absolute top-[67.6px] left-[253.5px] w-[5.9px] h-[5.9px] object-contain"
                alt=""
                src="/bars91.svg"
              />
              <img
                className="absolute top-[28.6px] left-[238.5px] w-[5.9px] h-[5.9px] object-contain"
                alt=""
                src="/bars92.svg"
              />
              <img
                className="absolute top-[0.6px] left-[217.5px] w-[5.9px] h-[5.9px] object-contain"
                alt=""
                src="/bars92.svg"
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
                className="absolute top-[155.4px] left-[256.6px] w-[2.4px] h-[2.4px] object-contain"
                alt=""
                src="/bars96.svg"
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
                className="absolute top-[180.8px] left-[204px] w-[3.6px] h-[3.6px] object-contain"
                alt=""
                src="/bars99.svg"
              />
              <img
                className="absolute top-[72.1px] left-[183px] w-[5.5px] h-[5.5px] object-contain"
                alt=""
                src="/bars100.svg"
              />
              <img
                className="absolute top-[110.8px] left-[28.7px] w-[2.4px] h-[2.4px] object-contain"
                alt=""
                src="/bars101.svg"
              />
              <img
                className="absolute top-[166px] left-[23.7px] w-[2.4px] h-[2.4px] object-contain"
                alt=""
                src="/bars102.svg"
              />
              <img
                className="absolute top-[126.5px] left-[137.4px] w-[5.5px] h-[5.5px] object-contain"
                alt=""
                src="/bars103.svg"
              />
              <img
                className="absolute top-[181.7px] left-[132.4px] w-[5.5px] h-[5.5px] object-contain"
                alt=""
                src="/bars104.svg"
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
                className="absolute top-[146.4px] left-[82px] w-[3.1px] h-[3.1px] object-contain"
                alt=""
                src="/bars108.svg"
              />
              <img
                className="absolute top-[96.3px] left-[22.1px] w-[4.8px] h-[4.8px] object-contain"
                alt=""
                src="/bars109.svg"
              />
              <img
                className="absolute top-[45px] left-[151.1px] w-[3.1px] h-[3.1px] object-contain"
                alt=""
                src="/bars110.svg"
              />
              <img
                className="absolute top-[108.9px] left-[9.4px] w-[3.1px] h-[3.1px] object-contain"
                alt=""
                src="/bars111.svg"
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
                className="absolute top-[127px] left-[52px] w-[6.1px] h-[6.1px] object-contain"
                alt=""
                src="/bars114.svg"
              />
              <img
                className="absolute top-[182.2px] left-[47px] w-[6.1px] h-[6.1px] object-contain"
                alt=""
                src="/bars115.svg"
              />
              <img
                className="absolute top-[142.1px] left-[58.1px] w-[3.1px] h-[3.1px] object-contain"
                alt=""
                src="/bars116.svg"
              />
              <img
                className="absolute top-[197.4px] left-[53.1px] w-[3.1px] h-[3.1px] object-contain"
                alt=""
                src="/bars117.svg"
              />
              <img
                className="absolute top-[130.8px] left-[4.4px] w-[2.7px] h-[2.7px] object-contain"
                alt=""
                src="/bars118.svg"
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
                className="absolute top-[176.2px] left-[122px] w-1 h-1 object-contain"
                alt=""
                src="/bars122.svg"
              />
              <img
                className="absolute top-[117.8px] left-[33.1px] w-[4.9px] h-[4.9px] object-contain"
                alt=""
                src="/bars123.svg"
              />
              <img
                className="absolute top-[173.1px] left-[28.1px] w-[4.9px] h-[4.9px] object-contain"
                alt=""
                src="/bars124.svg"
              />
              <img
                className="absolute top-[136.4px] left-[22.6px] w-[5.5px] h-[5.5px] object-contain"
                alt=""
                src="/bars125.svg"
              />
              <img
                className="absolute top-[191.6px] left-[17.6px] w-[5.5px] h-[5.5px] object-contain"
                alt=""
                src="/bars126.svg"
              />
              <img
                className="absolute top-[125px] left-[122.4px] w-[3.1px] h-[3.1px] object-contain"
                alt=""
                src="/bars127.svg"
              />
              <img
                className="absolute top-[180.2px] left-[117.4px] w-[3.1px] h-[3.1px] object-contain"
                alt=""
                src="/bars128.svg"
              />
              <img
                className="absolute top-[62px] left-[207.1px] w-[5.6px] h-[5.6px] object-contain"
                alt=""
                src="/bars129.svg"
              />
              <img
                className="absolute top-[91.6px] left-[248.1px] w-[5.6px] h-[5.6px] object-contain"
                alt=""
                src="/bars130.svg"
              />
              <img
                className="absolute top-[115.8px] left-[133px] w-[2.4px] h-[2.4px] object-contain"
                alt=""
                src="/bars131.svg"
              />
              <img
                className="absolute top-[171px] left-[128px] w-[2.4px] h-[2.4px] object-contain"
                alt=""
                src="/bars132.svg"
              />
              <img
                className="absolute top-[105.6px] left-[112.1px] w-[5.9px] h-[5.9px] object-contain"
                alt=""
                src="/bars133.svg"
              />
              <img
                className="absolute top-[160.8px] left-[107.1px] w-[5.9px] h-[5.9px] object-contain"
                alt=""
                src="/bars134.svg"
              />
              <img
                className="absolute top-[102.9px] left-[203px] w-[3px] h-[3px] object-contain"
                alt=""
                src="/bars135.svg"
              />
              <img
                className="absolute top-[132.5px] left-[244px] w-[3px] h-[3px] object-contain"
                alt=""
                src="/bars136.svg"
              />
              <img
                className="absolute top-[158.1px] left-[198px] w-[3px] h-[3px] object-contain"
                alt=""
                src="/bars137.svg"
              />
              <img
                className="absolute top-[187.7px] left-[239px] w-[3px] h-[3px] object-contain"
                alt=""
                src="/bars138.svg"
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
                className="absolute top-[160.1px] left-[121px] w-[3.8px] h-[3.8px] object-contain"
                alt=""
                src="/bars141.svg"
              />
              <img
                className="absolute top-[98.5px] left-[71.4px] w-[4.5px] h-[4.5px] object-contain"
                alt=""
                src="/bars142.svg"
              />
              <img
                className="absolute top-[153.8px] left-[66.4px] w-[4.5px] h-[4.5px] object-contain"
                alt=""
                src="/bars143.svg"
              />
              <img
                className="absolute top-[115.9px] left-[182.2px] w-[3.8px] h-[3.8px] object-contain"
                alt=""
                src="/bars144.svg"
              />
              <img
                className="absolute top-[145.5px] left-[223.2px] w-[3.8px] h-[3.8px] object-contain"
                alt=""
                src="/bars145.svg"
              />
              <img
                className="absolute top-[171.1px] left-[177.2px] w-[3.8px] h-[3.8px] object-contain"
                alt=""
                src="/bars146.svg"
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
                className="absolute top-[183.2px] left-[70.7px] w-[3.6px] h-[3.6px] object-contain"
                alt=""
                src="/bars150.svg"
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
                className="absolute top-[120.7px] left-[48.8px] w-[7.3px] h-[7.3px] object-contain"
                alt=""
                src="/bars152.svg"
              />
              <img
                className="absolute top-[176px] left-[43.8px] w-[7.3px] h-[7.3px] object-contain"
                alt=""
                src="/bars153.svg"
              />
              <img
                className="absolute top-[96.1px] left-[13.1px] w-[2.9px] h-[2.9px] object-contain"
                alt=""
                src="/bars154.svg"
              />
              <img
                className="absolute top-[131.8px] left-[103.6px] w-[4.4px] h-[4.4px] object-contain"
                alt=""
                src="/bars155.svg"
              />
              <img
                className="absolute top-[187px] left-[98.6px] w-[4.4px] h-[4.4px] object-contain"
                alt=""
                src="/bars156.svg"
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
                className="absolute top-[130.6px] left-[225.9px] w-[6.4px] h-[6.4px] object-contain"
                alt=""
                src="/bars159.svg"
              />
              <img
                className="absolute top-[125px] left-[116.9px] w-[3px] h-[3px] object-contain"
                alt=""
                src="/bars160.svg"
              />
              <img
                className="absolute top-[180.2px] left-[111.9px] w-[3px] h-[3px] object-contain"
                alt=""
                src="/bars161.svg"
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
              <div className="absolute top-[calc(50%_-_62px)] left-[16px] flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative font-semibold whitespace-nowrap text-white text-6xl">
                    $9000
                  </div>
                  <div className="self-stretch relative text-2xl text-white tracking-[0.04em] ">
                    Total Commission
                  </div>
                </div>
                <div className="rounded-7xs bg-white flex flex-row items-center justify-start p-1 text-center text-xs text-seagreen-200">
                  <img
                    className="h-5 w-5 relative object-contain"
                    alt=""
                    src="/arrow-right-alt@2x.png"
                  />

                  <div className="relative   font-medium inline-block min-w-[28px]">
                    2.5%
                  </div>

                </div>

              </div>
            </div>

            <div className="w-[199px] relative text-lg font-medium text-white inline-block shrink-0">
              <p className="m-0">{`Compared to $8750 `}</p>
              <p className="m-0">last month</p>
            </div>

          </div>
        </div>
        <div className="flex-1 flex flex-row items-end justify-start gap-[24px]  w-[40%] text-center text-sm text-foundation-m-green-m-green-400">
          <ProgressGrid
            commission="Commission"
            emptyLabel="$8500"
            ring="/ring.svg"
            number="78%"
          />
          <ProgressGrid
            commission="SPIFFS"
            emptyLabel="$1500"
            ring="/ring1.svg"
            number="15%"
            propMinWidth="47px"
            propMinWidth1="56px"
            propLeft="calc(50% - 23px)"
            propMinWidth2="47px"
          />
          <ProgressGrid
            commission="Adjustments"
            emptyLabel="$100"
            ring="/ring2.svg"
            number="6%"
            propMinWidth="83px"
            propMinWidth1="45px"
            propLeft="calc(50% - 18px)"
            propMinWidth2="36px"
          />
        </div>
      </div>
    </div>
  );
};

CommissionContainer.propTypes = {
  className: PropTypes.string,
};

export default CommissionContainer;
