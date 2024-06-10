import { Button } from "@mui/material";
import PropTypes from "prop-types";
import ContentHeader from "../components/commission_management/ContentHeader";
import AgentTarget from "../components/commission_management/AgentTarget";
import GroupComponent from "../components/commission_management/GroupComponent";


export default function Commision_Management(){


    return(

    
//         <>
        
     
      
//       <main className="absolute top-[19px] left-[347px] rounded-tl-21xl rounded-tr-none rounded-b-none bg-white w-[1093px] flex flex-col items-start justify-start pt-6 pb-[1505px] pr-[35px] pl-[47px] box-border gap-[46px] max-w-full z-[1]">
//         <div className="w-[1093px] h-[3566px] relative rounded-tl-21xl rounded-tr-none rounded-b-none bg-white hidden max-w-full z-[0]" />
//         <section className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full text-left text-13xl text-black font-nunito">
//           <div className="flex flex-col items-start justify-start gap-[1px] max-w-full bg-pink-200">
//             <h1 className="m-0 relative text-inherit font-bold font-inherit z-[2] mq450:text-lgi mq900:text-7xl">
//               Commission Management
//             </h1>
//             <div className="relative text-base font-medium z-[2]">{`Manager > Commission Management`}</div>
//           </div>
//           <ContentHeader />
//         </section>
//         <div className="w-[933px] h-0 absolute !m-[0] top-[349px] right-[32px] z-[6]" />
//         <div className="w-[933px] h-0 absolute !m-[0] top-[389px] right-[32px] z-[6]" />
//         <div className="w-[933px] h-0 absolute !m-[0] top-[429px] right-[32px] z-[6]" />
//         <div className="w-[933px] h-0 absolute !m-[0] top-[469px] right-[32px] z-[6]" />
//         <section className="self-stretch flex flex-col items-start justify-start gap-[42px] max-w-full">
//           <AgentTarget />
//           <GroupComponent />
//         </section>
//       </main>
//       <div className="absolute top-[459px] left-[1px] bg-gray-300 w-[347px] flex flex-row items-start justify-start pt-3 px-[17px] pb-[21px] box-border gap-[7px] max-w-full z-[2]">
//         <div className="h-[63px] w-[347px] relative bg-gray-300 hidden max-w-full" />
//         <img
//           className="h-[30px] w-[30px] relative object-contain min-h-[30px] z-[3]"
//           loading="lazy"
//           alt=""
//           src="/image-38@2x.png"
//         />
//         <div className="w-[263px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
//           <h2 className="m-0 self-stretch relative text-inherit font-normal font-inherit z-[3] mq450:text-base">
//             Commission Management
//           </h2>
//         </div>
// </div>
        
//         </>


<main className=" rounded-tl-21xl rounded-tr-none rounded-b-none w-[1093px] flex flex-col items-start justify-start pt-6 pb-[1505px] pr-[35px] pl-[47px] box-border gap-[46px] max-w-full z-[1]">
<div className="w-[1093px] h-[3566px] relative rounded-tl-21xl rounded-tr-none rounded-b-none bg-white hidden max-w-full z-[0]" />
<section className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full text-left text-13xl text-black font-nunito">
  <div className="flex flex-col items-start justify-start gap-[1px] max-w-full ">
    <h1 className="m-0 relative text-inherit font-bold font-inherit z-[2] mq450:text-lgi mq900:text-7xl">
      Commission Management
    </h1>
    <div className="relative text-base font-medium z-[2]">{`Manager > Commission Management`}</div>
  </div>
  <ContentHeader />
</section>
<div className="w-[933px] h-0 absolute !m-[0] top-[349px] right-[32px] z-[6]" />
<div className="w-[933px] h-0 absolute !m-[0] top-[389px] right-[32px] z-[6]" />
<div className="w-[933px] h-0 absolute !m-[0] top-[429px] right-[32px] z-[6]" />
<div className="w-[933px] h-0 absolute !m-[0] top-[469px] right-[32px] z-[6]" />
<section className="self-stretch flex flex-col items-start justify-start gap-[42px] max-w-full">
  <AgentTarget />
  <GroupComponent />
</section>
</main>
    )
}