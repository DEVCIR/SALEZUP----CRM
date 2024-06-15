import GroupComponent3 from "../components/Individual/GroupComponent3";
import ContestRules from "../components/Individual/ContestRules";
import GroupComponent2 from "../components/Individual/GroupComponent2";
import GroupComponent1 from "../components/Individual/GroupComponent1";
import PrizeOptions from "../components/Individual/PrizeOptions";
import GroupComponent from "../components/Individual/GroupComponent"
import GroupComponent5 from "../components/Individual/GroupComponent5";

const Individual = () => {
  return (
    <>
      <main className="rounded-tl-21xl rounded-tr-none rounded-b-none bg-white w-full flex flex-col justify-start pt-6 px-[30px] pb-10 gap-[37px] mt-16">
        <div className="w-[264px] flex flex-col items-start justify-start gap-[1px]">
          <h2 className="m-0 relative text-inherit font-bold font-inherit z-[2] mq450:text-lgi mq950:text-7xl">
            Individual
          </h2>
          <div className="text-sm font-normal">{`Manager / Set Contest / Individual`}</div>
        </div>
        <ContestRules />
        <GroupComponent2 />
        <GroupComponent1 />
        <PrizeOptions />
        <GroupComponent />
        <GroupComponent5 />
      </main>
    </>

  );
};

export default Individual;

