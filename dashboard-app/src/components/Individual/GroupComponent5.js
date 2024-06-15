import React from 'react'

const GroupComponent5 = () => {
    return (
        <div className="shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl w-[95%]  flex flex-row items-center justify-between p-5 relative z-[2] text-center text-sm text-black border-t-[3.5px] border-solid flex-wrap">
            <div className="h-[298.5px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white  hidden max-w-full border-t-[3.5px] border-solid border-silver-100" />
            <div className=" h-px relative  hidden border-t-[1px] border-solid border-silver-300" />
            <div className=" h-px relative  hidden border-t-[1px] border-solid border-silver-300" />
            <b className="relative font-semibold inline-block min-w-[106px] z-[1] mq450:text-base">
                Add Points
            </b>
            <div className=" shadow-[0px_9px_5.4px_-2px_rgba(0,_0,_0,_0.13)] rounded-[7.81px] bg-whitesmoke-100 flex flex-col items-start justify-start pt-[25px] px-0 pb-[15px]  gap-[15px] max-w-full z-[2] text-center text-base">
                <div className=" h-36 relative shadow-[0px_9px_5.4px_-2px_rgba(0,_0,_0,_0.13)] rounded-[7.81px] bg-whitesmoke-100 hidden" />
                <div className=" flex flex-col items-start justify-start gap-[8px] max-w-full">
                    <div className=" flex flex-col items-start justify-start gap-[6px] max-w-full">
                        <div className="w-[838px] flex flex-row items-start justify-start py-0 px-[11px]  max-w-full">
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
                        <div className=" h-px relative  z-[3] border-t-[1px] border-solid border-silver-300" />
                    </div>
                    <div className="w-[846px] flex flex-row items-end justify-between gap-[20px] max-w-full mq450:flex-wrap">
                        <div className="w-[195px] relative font-medium flex items-center justify-center shrink-0 z-[3]">
                            Split points equally
                        </div>
                        <div className="rounded-4xs bg-darkslategray-200 flex flex-row items-start justify-start py-[3px] pr-[5px] pl-[13px] gap-[10.6px] z-[4] text-left text-mini text-white font-nunito">
                            <div className="h-[23px] w-[73px] relative rounded-4xs bg-darkslategray-200 hidden" />
                            <div className="flex flex-col items-start justify-start pt-2">
                                <b className="h-0 relative leading-[0%] font-bold inline-block min-w-[27.4px] z-[1]">
                                    Yes
                                </b>
                            </div>
                            <div className="h-[17px] w-[17px] relative rounded-[50%] bg-mediumseagreen z-[1]" />
                        </div>
                    </div>
                    <div className=" h-px relative  z-[3] border-t-[1px] border-solid border-silver-300" />
                </div>
                <div className="w-[846px] flex flex-row items-start justify-between gap-[20px] max-w-full mq700:flex-wrap">
                    <div className="w-56 flex flex-col items-start justify-start pt-0.5 ">
                        <div className=" relative font-medium z-[3]">
                            Winner takes all points
                        </div>
                    </div>
                    <div className="w-[73px] rounded-4xs bg-firebrick flex flex-row items-start justify-start py-[3px] px-[5px]  gap-[14px] z-[4] text-left text-mini text-white font-nunito">
                        <div className="h-[23px] w-[73px] relative rounded-4xs bg-firebrick hidden" />
                        <div className="h-[17px] w-[17px] relative rounded-[50%] bg-gray-200 z-[1]" />
                        <div className="w-[27.4px] flex flex-col items-start justify-start pt-[9px] ">
                            <b className=" h-0 relative leading-[0%] font-bold inline-block z-[1]">
                                No
                            </b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupComponent5