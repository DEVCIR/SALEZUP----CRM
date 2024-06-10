import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full text-left text-xl text-white font-inter ${className}`}
    >
      <div className="w-80 flex flex-row items-start justify-start pt-0 px-[77px] pb-[17px] box-border text-13xl text-aquamarine mq450:pl-5 mq450:pr-5 mq450:box-border">
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
            <a className="[text-decoration:none] flex-1 relative font-semibold text-[inherit] [text-shadow:0px_0px_42.76px_#2d8085] z-[1] mq450:text-lgi mq1050:text-7xl">
              Manager
            </a>
          </div>
        </div>
      </div>
      <div className="w-[288.4px] flex flex-row items-start justify-start py-0 px-[19px] box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[17px]">
            <img
              className="h-[29px] w-[29px] relative object-cover min-h-[29px] shrink-0 [debug_commit:bf4bc93] z-[1]"
              loading="lazy"
              alt=""
              src="/dashboard-layout@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <h2 className="m-0 self-stretch relative text-inherit font-normal font-inherit shrink-0 [debug_commit:bf4bc93] z-[1] mq450:text-base">
                Dashboard
              </h2>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-0 gap-[15.5px]">
            <img
              className="h-7 w-[25px] relative object-cover min-h-[28px] shrink-0 [debug_commit:bf4bc93] z-[1]"
              loading="lazy"
              alt=""
              src="/manager-1@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <h2 className="m-0 self-stretch relative text-inherit font-normal font-inherit shrink-0 [debug_commit:bf4bc93] z-[1] mq450:text-base">
                Sale Agents
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7px] box-border max-w-full">
        <div className="flex-1 bg-gray-200 flex flex-col items-start justify-start pt-[11px] px-[18px] pb-8 box-border gap-[24px] max-w-full z-[2]">
          <div className="w-[347px] h-[316px] relative bg-gray-200 hidden max-w-full" />
          <div className="w-[209px] flex flex-row items-start justify-start pt-0 px-px pb-1.5 box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[23px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
                <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit z-[3] mq450:text-base">
                  Current Agents
                </h2>
              </div>
              <h2 className="m-0 self-stretch relative text-inherit font-normal font-inherit z-[3] mq450:text-base">
                Add New Agent
              </h2>
            </div>
          </div>
          <div className="w-56 flex flex-row items-start justify-start pt-0 pb-1 pr-5 pl-0 box-border">
            <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit z-[3] mq450:text-base">
              Pending Requests
            </h2>
          </div>
          <h2 className="m-0 w-[225px] relative text-inherit font-normal font-inherit inline-block z-[3] mq450:text-base">
            Current Team Leaders
          </h2>
          <div className="w-[248px] flex flex-row items-start justify-start py-0 px-px box-border">
            <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit z-[3] mq450:text-base">
              Add New Team Leader
            </h2>
          </div>
          <h2 className="m-0 w-[204px] relative text-inherit font-normal font-inherit inline-block z-[3] mq450:text-base">
            Pending Requests
          </h2>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[21px] pl-[18px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[22.5px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2">
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
          <div className="w-[250.4px] flex flex-row items-start justify-start py-0 px-1 box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[5px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-[33px] h-6 relative object-cover shrink-0 [debug_commit:bf4bc93] z-[1]"
                  alt=""
                  src="/team@2x.png"
                />
              </div>
              <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit shrink-0 [debug_commit:bf4bc93] z-[1] mq450:text-base">
                Teams
              </h2>
            </div>
          </div>
          <div className="w-[257px] flex flex-col items-start justify-start gap-[16px]">
            <div className="w-[246.4px] flex flex-row items-start justify-start gap-[11px]">
              <img
                className="h-[31px] w-[31px] relative object-cover shrink-0 [debug_commit:bf4bc93] z-[1]"
                alt=""
                src="/rocket@2x.png"
              />
              <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit shrink-0 [debug_commit:bf4bc93] z-[1] mq450:text-base">
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
                        className="w-[23px] h-[23px] relative object-cover shrink-0 [debug_commit:bf4bc93] z-[1]"
                        alt=""
                        src="/icons8summary50-2@2x.png"
                      />
                    </div>
                    <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit shrink-0 [debug_commit:bf4bc93] z-[1] mq450:text-base">
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

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
