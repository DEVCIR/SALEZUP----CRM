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
      <main className="rounded-tl-21xl bg-white w-full flex flex-col justify-start pt-6 px-[30px] pb-10 gap-[37px] mt-16">
        <div className="w-fit flex flex-col items-start justify-start">
          <h2 className="font-bold z-[2]">
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