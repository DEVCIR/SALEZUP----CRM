import FrameComponent2 from "../components/Teamleader/FrameComponent2";
import FrameComponent1 from "../components/Teamleader/FrameComponent1";
import FrameComponent from "../components/Teamleader/FrameComponent";
import GroupComponent from "../components/Teamleader/GroupComponent";

const Current_Team_Leader = () => {
  return (
 
      <main className="flex-1 rounded-tl-21xl rounded-tr-none rounded-b-none bg-white flex flex-col items-start justify-start pt-6 pb-[708px] pr-[34px] pl-[47px] box-border gap-[25px] min-w-[710px] max-w-full z-[1] text-left text-13xl text-black font-nunito lg:pl-[23px] lg:pt-5 lg:pb-[299px] lg:box-border mq750:pb-[194px] mq750:box-border mq750:min-w-full">
        <div className="w-[1093px] h-[2596px] relative rounded-tl-21xl rounded-tr-none rounded-b-none bg-white hidden max-w-full" />
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border gap-[1px] max-w-full">
          <h1 className="m-0 w-[220px] relative text-2xl font-bold font-inherit inline-block z-[2] mq450:text-lgi mq1050:text-7xl">
            Team Leaders
          </h1>
          <div className="relative text-xl font-medium z-[2]">{`Manager > Sale Agents > Current Team Leaders`}</div>
        </div>

        <FrameComponent1 />

        
      </main>
    
  );
};

export default Current_Team_Leader;
