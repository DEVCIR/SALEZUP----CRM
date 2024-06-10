import GroupComponent3 from "../components/Individual/GroupComponent3";
import ContestRules from "../components/Individual/ContestRules";
import GroupComponent2 from "../components/Individual/GroupComponent2";
import GroupComponent1 from "../components/Individual/GroupComponent1";
import PrizeOptions from "../components/Individual/PrizeOptions";
import GroupComponent from "../components/Individual/GroupComponent";
import { useState } from "react";

const Individual = () => {



   



  return (
   
<>
    
      <main className=" rounded-tl-21xl rounded-tr-none rounded-b-none bg-white w-[1093px] flex flex-col items-end justify-start pt-6 px-[35px] pb-[627px] box-border gap-[37px] max-w-full z-[1]">
        <div className="w-[1093px] h-[3314px] relative rounded-tl-21xl rounded-tr-none rounded-b-none bg-white hidden max-w-full" />
        <section className="w-[1011px] flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border gap-[23px] max-w-full shrink-0 text-left text-13xl text-black font-nunito">
          <div className="w-[264px] flex flex-col items-start justify-start gap-[1px]">
            <h2 className="m-0 self-stretch relative text-inherit font-bold font-inherit z-[2] mq450:text-lgi mq950:text-7xl">
              Individual
            </h2>
            <div className="relative text-base font-medium z-[2]">{`Manager > Set Contest > Individual`}</div>
          </div>
          <ContestRules />
        </section>
        <section className="w-[1011px] flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full shrink-0">
          <GroupComponent2 />
        </section>
        <GroupComponent1 />
        <section className="w-[1011px] flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full shrink-0">
          <PrizeOptions />
        </section>



<div className="flex flex-row w-full space-x-16 bg-slate-500" >

<div> 
<h2 className="font-bold tracking-spacing">Cash Prize</h2>




</div>


<div>
<h2 className="font-bold tracking-spacing">Voucher</h2></div>


<div>
<h2 className="font-bold tracking-spacing">Food </h2>



</div>

<div>
<h2 className="font-bold tracking-spacing">Experience</h2>


</div>


</div>



        <section className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full shrink-0 text-left text-xl text-black font-inter">
          <GroupComponent />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1.5 box-border max-w-full">
            <div className="flex-1 shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border flex flex-col items-start justify-start pt-[29px] px-[41px] pb-[66px] gap-[32px] max-w-full z-[2] border-t-[3.5px] border-solid border-silver-100">
              <div className="w-[1011px] h-[298.5px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border hidden max-w-full border-t-[3.5px] border-solid border-silver-100" />
              <div className="self-stretch h-px relative box-border hidden border-t-[1px] border-solid border-silver-300" />
              <div className="self-stretch h-px relative box-border hidden border-t-[1px] border-solid border-silver-300" />
              <b className="relative font-semibold inline-block min-w-[106px] z-[1] mq450:text-base">
                Add Points
              </b>
              <div className="self-stretch shadow-[0px_9px_5.4px_-2px_rgba(0,_0,_0,_0.13)] rounded-[7.81px] bg-whitesmoke-100 flex flex-col items-start justify-start pt-[25px] px-0 pb-[15px] box-border gap-[15px] max-w-full z-[2] text-center text-base">
                <div className="self-stretch h-36 relative shadow-[0px_9px_5.4px_-2px_rgba(0,_0,_0,_0.13)] rounded-[7.81px] bg-whitesmoke-100 hidden" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                    <div className="w-[838px] flex flex-row items-start justify-start py-0 px-[11px] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq700:flex-wrap">
                        <div className="w-[246px] relative font-medium flex items-center justify-center shrink-0 z-[3]">
                          Enter total points to allocate
                        </div>
                        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-mini font-nunito">
                          <b className="h-0 relative leading-[0%] font-bold inline-block min-w-[36px] z-[3]">
                            1000
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-px relative box-border z-[3] border-t-[1px] border-solid border-silver-300" />
                  </div>
                  <div className="w-[846px] flex flex-row items-end justify-between gap-[20px] max-w-full mq450:flex-wrap">
                    <div className="w-[195px] relative font-medium flex items-center justify-center shrink-0 z-[3]">
                      Split points equally
                    </div>
                    <div className="rounded-4xs bg-darkslategray-200 flex flex-row items-start justify-start py-[3px] pr-[5px] pl-[13px] gap-[10.6px] z-[4] text-left text-mini text-white font-nunito">
                      <div className="h-[23px] w-[73px] relative rounded-4xs bg-darkslategray-200 hidden" />
                      <div className="flex flex-col items-start justify-start px-0 pt-2 pb-0">
                        <b className="h-0 relative leading-[0%] font-bold inline-block min-w-[27.4px] z-[1]">
                          Yes
                        </b>
                      </div>
                      <div className="h-[17px] w-[17px] relative rounded-[50%] bg-mediumseagreen z-[1]" />
                    </div>
                  </div>
                  <div className="self-stretch h-px relative box-border z-[3] border-t-[1px] border-solid border-silver-300" />
                </div>
                <div className="w-[846px] flex flex-row items-start justify-between gap-[20px] max-w-full mq700:flex-wrap">
                  <div className="w-56 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                    <div className="self-stretch relative font-medium z-[3]">
                      Winner takes all points
                    </div>
                  </div>
                  <div className="w-[73px] rounded-4xs bg-firebrick flex flex-row items-start justify-start py-[3px] px-[5px] box-border gap-[14px] z-[4] text-left text-mini text-white font-nunito">
                    <div className="h-[23px] w-[73px] relative rounded-4xs bg-firebrick hidden" />
                    <div className="h-[17px] w-[17px] relative rounded-[50%] bg-gray-200 z-[1]" />
                    <div className="w-[27.4px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
                      <b className="self-stretch h-0 relative leading-[0%] font-bold inline-block z-[1]">
                        No
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      </>
    
  );
};

export default Individual;