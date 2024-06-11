import { Button } from "@mui/material";
import UsernameLabel from "./UsernameLabel";
import PropTypes from "prop-types";

const LoginInputs = () => {
  return (
    <div
      className={"flex flex-row items-center justify-center py-0 pr-2.5 pl-[9px] box-border w-[40%] ml-auto mr-auto"}
    >
      <div className="flex flex-row items-center justify-center flex-1 ml-auto mr-auto">
        <form className="m-0 flex-[0.8933] shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)]  rounded-16xl bg-white box-border flex flex-col items-start justify-start pt-[46px] px-6 pb-[128.2px] gap-[37px] min-w-[292px] max-w-full z-[2] border-t-[3.5px] border-solid border-silver mq450:gap-[18px] mq450:flex-1 mq750:pt-[30px] mq750:pb-[83px] mq750:box-border">
          <div className="w-[450px] h-[610.5px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border hidden max-w-full border-t-[3.5px] border-solid border-silver" />
          <div className="flex flex-row items-start self-stretch justify-center px-0 pt-0 pb-5">
            <img
              className="h-[55px] w-[226px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/whatsapp-image-20240405-at-2112-6@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
              <div className="w-[212px] relative text-base font-medium font-inter text-gray text-left inline-block z-[1]">
                Email
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10.2px]">
                <div className="self-stretch flex flex-row items-start justify-start pt-[15.3px] px-3 pb-[16.5px] relative z-[1]">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5.99px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/bg.svg"
                  />
                  <div className="relative text-3xs font-inter text-black text-left inline-block min-w-[77px] z-[1]">
                    Enter your Email
                  </div>
                  <div className="w-8 relative text-xs font-medium font-inter text-green-primary text-right hidden z-[2]">
                    Show
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[29px] pl-5">
                  <img
                    className="h-[21px] w-[17.7px] relative object-cover z-[3]"
                    alt=""
                    src="/email@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[13.1px]">
              <div className="w-[212px] relative text-base font-medium font-inter text-gray text-left inline-block z-[1]">
                Password
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[15.2px] px-3 pb-[16.6px] relative z-[1]">
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
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[29px] pl-5">
                <img
                  className="h-[21px] w-[17.7px] relative object-cover z-[3]"
                  loading="lazy"
                  alt=""
                  src="/eye@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[7px] pl-px box-border max-w-full">
            <Button
              className="h-[47.8px] flex-1 max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
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
              Login
            </Button>
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