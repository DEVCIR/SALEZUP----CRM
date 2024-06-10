
import FrameComponent1 from "../components/Leaderboard/FrameComponent1";
import FrameComponent from "../components/Leaderboard/FrameComponent";

export default function Leaderboard(){


    return(

        <>
        
        <main className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[768px] max-w-full mq1050:min-w-full">
        <section className="self-stretch rounded-tl-21xl rounded-tr-none rounded-b-none bg-white flex flex-col items-start justify-start pt-3.5 px-[25px] pb-[499px] box-border gap-[29px] max-w-full z-[1] text-center text-[24px] text-foundation-green-normal font-inter lg:pt-5 lg:pb-[324px] lg:box-border mq750:pb-[211px] mq750:box-border">
          <div className="w-[1181px] h-[1277px] relative rounded-tl-21xl rounded-tr-none rounded-b-none bg-white hidden max-w-full" />
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[129px] z-[2] mq450:text-lgi">
              Dashboard
            </a>
            <div className="relative text-[14px] font-medium z-[2]">{`Sales agent > Dashboard > Today’s Spiff`}</div>
          </div>
          <FrameComponent />
          <div className="w-[555.4px] flex flex-row items-start justify-center max-w-full text-left text-[10.8px] text-white font-montserrat">
            <div className="relative inline-block min-w-[104.7px] z-[2]">
              Forgot Password?
            </div>
          </div>
        </section>
      </main>
        
        
        </>
    )
}