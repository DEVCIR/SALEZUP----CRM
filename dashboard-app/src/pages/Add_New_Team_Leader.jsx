import FrameComponent2 from "../components/Teamleader/FrameComponent2";
import FrameComponent1 from "../components/Teamleader/FrameComponent1";
import FrameComponent from "../components/Teamleader/FrameComponent";
import GroupComponent from "../components/Teamleader/GroupComponent";

const Add_New_Team_Leader = () => {
  return (
 
      <main className="flex-1 rounded-tl-21xl rounded-tr-none rounded-b-none bg-white flex flex-col items-start justify-start pt-6 pb-[708px] pr-[34px] pl-[47px] box-border gap-[25px] min-w-[710px] max-w-full z-[1] text-left text-13xl text-black font-nunito lg:pl-[23px] lg:pt-5 lg:pb-[299px] lg:box-border mq750:pb-[194px] mq750:box-border mq750:min-w-full">

        <div className="w-96 flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[6px] max-w-full">
          <h1 className="m-0 self-stretch relative text-2xl font-bold font-inherit z-[2] mq450:text-lgi mq1050:text-7xl">
            Add New Team Leader
          </h1>
          <div className="relative text-lg font-medium inline-block max-w-full z-[2]">{`Manager > Sale Agents > Add New Team Leader`}</div>
        </div>

        <section className="box-border flex flex-row items-start self-stretch justify-start max-w-full pt-0 pl-px pr-0 pb-7">
         
         
          <FrameComponent />
        </section>
                
      </main>
    
  );
};

export default Add_New_Team_Leader;
