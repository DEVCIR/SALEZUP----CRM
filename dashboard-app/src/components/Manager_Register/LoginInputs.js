import { Button } from "@mui/material";
import UsernameLabel from "./UsernameLabel";
import PropTypes from "prop-types";

const LoginInputs = ({ className = "" }) => {
  return (

    // <div
    //   className={`self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px] box-border max-w-full ${className}`}
    // >
    //   <div className="flex-1 flex flex-row items-start justify-start gap-[80px] max-w-full mq1050:flex-wrap mq1050:gap-[40px] mq750:gap-[20px]">
       
    //     <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[292px] max-w-full">
    //       <form className="m-0 self-stretch shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl ml-auto mr-auto bg-pink-400 box-border flex flex-col items-start justify-start pt-1.5 px-6 pb-[110.2px] gap-[48.1px] w-[40%] z-[2] border-t-[3.5px] border-solid border-silver mq450:gap-[24px] mq750:pt-5 mq750:pb-[72px] mq750:box-border">
            
    //         <div className="w-[450px] h-[610.5px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-pink-400 box-border hidden max-w-full border-t-[3.5px] border-solid border-silver" />
    //         <div className="self-stretch flex flex-col items-end justify-start gap-[25px]">
    //           <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
    //             <img
    //               className="h-[55px] w-[226px] relative object-cover z-[1]"
    //               loading="lazy"
    //               alt=""
    //               src="/whatsapp-image-20240405-at-2112-6@2x.png"
    //             />
    //           </div>
    //           <UsernameLabel
    //             username="Username"
    //             fullName="Enter your Username"
    //           />
    //         </div>
    //         <UsernameLabel
    //           username="Email"
    //           fullName="Enter your  Email"
    //           propMinWidth="80px"
    //         />
    //         <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
    //           <div className="w-[212px] relative text-base font-medium font-inter text-gray text-left inline-block z-[1]">
    //             Password
    //           </div>
    //           <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7.3px] box-border max-w-full">
    //             <div className="flex-1 flex flex-row items-start justify-start pt-[15.3px] px-3 pb-[16.5px] box-border relative max-w-full z-[1]">
    //               <img
    //                 className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5.99px] max-w-full overflow-hidden max-h-full"
    //                 alt=""
    //                 src="/bg.svg"
    //               />
    //               <div className="relative text-3xs font-inter text-black whitespace-pre-wrap text-left inline-block min-w-[101px] z-[1]">
    //                 Enter your Password
    //               </div>
    //               <div className="w-8 relative text-xs font-medium font-inter text-green-primary text-right hidden z-[2]">
    //                 Show
    //               </div>
    //             </div>
    //           </div>
    //           <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-1 box-border max-w-full">
    //             <div className="flex-1 flex flex-col items-start justify-start gap-[7.1px] max-w-full">
    //               <div className="w-[360.3px] flex flex-row items-start justify-start py-0 px-[17px] box-border max-w-full">
    //                 <img
    //                   className="h-[8.9px] flex-1 relative max-w-full overflow-hidden z-[1]"
    //                   loading="lazy"
    //                   alt=""
    //                   src="/by-clicking-create-account-you-agree-to-ourterms-and-privacy-policy.svg"
    //                 />
    //               </div>
    //               <Button
    //                 className="self-stretch h-[47.8px] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
    //                 disableElevation
    //                 variant="contained"
    //                 sx={{
    //                   textTransform: "none",
    //                   color: "#fff",
    //                   fontSize: "16",
    //                   background: "#346155",
    //                   borderRadius: "9.01px",
    //                   "&:hover": { background: "#346155" },
    //                   height: 47.8,
    //                 }}
    //               >
    //                 Create Account
    //               </Button>
    //             </div>
    //           </div>
    //         </div>
    //       </form>
    //     </div>

        
    //   </div>
    // </div>


    <div className={"flex flex-row items-center justify-center py-0 pr-2.5 pl-[9px] box-border w-[60%] ml-auto mr-auto"}>
    <div className="flex flex-row items-center justify-center flex-1 ml-auto mr-auto">
      

    <form className="m-0 self-stretch shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border flex flex-col items-start justify-start pt-1.5 px-6 pb-[110.2px] gap-[48.1px] max-w-full z-[2] border-t-[3.5px] border-solid border-silver mq450:gap-[24px] mq750:pt-5 mq750:pb-[72px] mq750:box-border">
          <div className="w-[450px] h-[610.5px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border hidden max-w-full border-t-[3.5px] border-solid border-silver" />
          <div className="self-stretch flex flex-col items-end justify-start gap-[25px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
              <img
                className="h-[55px] w-[226px] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/whatsapp-image-20240405-at-2112-6@2x.png"
              />
            </div>
            <UsernameLabel
              username="Username"
              fullName="Enter your Username"
            />
          </div>
          <UsernameLabel
            username="Email"
            fullName="Enter your  Email"
            propMinWidth="80px"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
            <div className="w-[212px] relative text-base font-medium font-inter text-gray text-left inline-block z-[1]">
              Password
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7.3px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start pt-[15.3px] px-3 pb-[16.5px] box-border relative max-w-full z-[1]">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5.99px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/bg.svg"
                />
                <div className="relative text-3xs font-inter text-black whitespace-pre-wrap text-left inline-block min-w-[101px] z-[1]">
                  Enter your Password
                </div>
                <div className="w-8 relative text-xs font-medium font-inter text-green-primary text-right hidden z-[2]">
                  Show
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-1 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[7.1px] max-w-full">
                <div className="w-[360.3px] flex flex-row items-start justify-start py-0 px-[17px] box-border max-w-full">
                  <img
                    className="h-[8.9px] flex-1 relative max-w-full overflow-hidden z-[1]"
                    loading="lazy"
                    alt=""
                    src="/by-clicking-create-account-you-agree-to-ourterms-and-privacy-policy.svg"
                  />
                </div>
                <Button
                  className="self-stretch h-[47.8px] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#346155",
                    borderRadius: "9.01px",
                    "&:hover": { background: "#346155" },
                    height: 47.8,
                  }}
                >
                  Create Account
                </Button>
              </div>
            </div>
          </div>
        </form>

    </div>
  </div>


  );
};

LoginInputs.propTypes = {
  className: PropTypes.string,
};

export default LoginInputs;
