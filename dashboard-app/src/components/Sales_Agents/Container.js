import PropTypes from "prop-types";

const Container = ({ className = "" }) => {
  return (
    <div
      className={`w-[305px] flex flex-col items-start justify-start gap-[70px]  text-left text-13xl text-aquamarine font-inter mq1050:hidden mq450:gap-[35px] ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-[9px]">
        <div className="flex flex-row items-start justify-start bg-[url('/public/whatsapp-image-20240405-at-2112-4@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
          <img
            className="self-stretch w-[243px] relative max-h-full object-cover hidden min-h-[57px]"
            alt=""
            src="/whatsapp-image-20240405-at-2112-4@2x.png"
          />
          <img
            className="h-[57px] w-[243px] relative object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/whatsapp-image-20240405-at-2112-4@2x.png"
          />
        </div>
      </div>
      <div className="w-[252.4px] flex flex-row items-start justify-start pt-0 px-px pb-[297px] box-border mq750:pb-[193px] mq750:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[39px] mq450:gap-[19px]">
          <div className="w-[218.4px] flex flex-row items-start justify-end py-0 px-[26px] box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
              <div className="w-[138px] flex flex-row items-start justify-start">
                <div className="h-[123px] flex-1 relative">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-snow box-border w-full h-full z-[1] border-[0px] border-solid border-teal-100" />
                  <img
                    className="absolute top-[3px] left-[24px] w-[92px] h-[111px] object-contain z-[2]"
                    loading="lazy"
                    alt=""
                    src="/manager@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px]">
                <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit [text-shadow:0px_0px_42.76px_#2d8085] z-[1] mq1050:text-7xl mq450:text-lgi">
                  Manager
                </h1>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-xl text-white">
            <div className="self-stretch flex flex-row items-start justify-start gap-[17px]">
              <img
                className="h-[29px] w-[29px] relative object-cover min-h-[29px] shrink-0 [debug_commit:69da668] z-[1]"
                loading="lazy"
                alt=""
                src="/dashboard-layout@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <h2 className="m-0 self-stretch relative text-inherit font-normal font-inherit shrink-0 [debug_commit:69da668] z-[1] mq450:text-base">
                  Dashboard
                </h2>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-0 gap-[15.5px]">
              <img
                className="h-7 w-[25px] relative object-cover min-h-[28px] shrink-0 [debug_commit:69da668] z-[1]"
                loading="lazy"
                alt=""
                src="/manager-1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <h2 className="m-0 self-stretch relative text-inherit font-normal font-inherit shrink-0 [debug_commit:69da668] z-[1] mq450:text-base">
                  Sale Agents
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[25px] text-xl text-white">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[7px]">
            <img
              className="h-[30px] w-[30px] relative object-cover min-h-[30px] z-[1]"
              alt=""
              src="/image-38@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <h2 className="m-0 self-stretch relative text-inherit font-normal font-inherit z-[1] mq450:text-base">
                Commission Management
              </h2>
            </div>
          </div>
        </div>
        <div className="w-[277px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[22px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-1">
            <div className="flex-1 flex flex-row items-start justify-start gap-[5px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-[33px] h-6 relative object-cover shrink-0 [debug_commit:69da668] z-[1]"
                  alt=""
                  src="/team@2x.png"
                />
              </div>
              <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit shrink-0 [debug_commit:69da668] z-[1] mq450:text-base">
                Teams
              </h2>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="w-[246.4px] flex flex-row items-start justify-start gap-[11px]">
              <img
                className="h-[31px] w-[31px] relative object-cover shrink-0 [debug_commit:69da668] z-[1]"
                alt=""
                src="/rocket@2x.png"
              />
              <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit shrink-0 [debug_commit:69da668] z-[1] mq450:text-base">
                Set Contest
              </h2>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1">
              <div className="flex-1 flex flex-col items-start justify-start gap-[19.5px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-px">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[17px]">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-[26px] h-[26px] relative z-[1]"
                        alt=""
                        src="/gift-light.svg"
                      />
                    </div>
                    <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit z-[1] mq450:text-base">
                      Prize
                    </h2>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-px">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[14px]">
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <img
                        className="w-[23px] h-[23px] relative object-cover shrink-0 [debug_commit:69da668] z-[1]"
                        alt=""
                        src="/icons8summary50-2@2x.png"
                      />
                    </div>
                    <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit shrink-0 [debug_commit:69da668] z-[1] mq450:text-base">
                      Summary
                    </h2>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[17px]">
                  <img
                    className="h-[30px] w-[25px] relative object-cover z-[1]"
                    alt=""
                    src="/collect@2x.png"
                  />
                  <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit z-[1]">
                    Help
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
