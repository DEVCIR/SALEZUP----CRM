import PropTypes from "prop-types";

const GroupComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border flex flex-col items-start justify-start pt-[37px] px-[26px] pb-[88px] gap-[0.3px] max-w-full z-[2] text-left text-smi text-black font-inter border-t-[3.5px] border-solid border-silver-100 ${className}`}
    >
      <div className="w-[1011px] h-[673.5px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border hidden max-w-full border-t-[3.5px] border-solid border-silver-100" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-[15px] box-border max-w-full text-xl">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq950:flex-wrap">
          <div className="w-80 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
            <b className="self-stretch relative font-semibold z-[1] mq450:text-base">
              Select Agents
            </b>
          </div>
          <div className="w-[250px] flex flex-col items-start justify-start gap-[8.8px] text-base text-gray-100">
            <div className="w-[214px] flex flex-row items-start justify-start py-0 px-px box-border">
              <div className="flex-1 relative font-medium z-[1]">
                Select Team
              </div>
            </div>
            <select className="self-stretch h-[32.9px] relative rounded-[5.99px] bg-whitesmoke-100 box-border border-[0px] border-solid border-whitesmoke-100">
              <option value="option_1">Option 1</option>
            </select>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[3.7px] pr-2 pl-2.5 box-border max-w-full text-xl font-nunito">
        <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq950:flex-wrap">
          <div className="w-[359px] flex flex-col items-start justify-start gap-[36px] max-w-full">
            <b className="w-[230px] relative inline-block z-[1] mq450:text-base">
              Current Agents
            </b>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[38px] box-border max-w-full text-smi font-inter">
              <div className="flex-1 flex flex-row items-start justify-start gap-[15px] max-w-full mq450:flex-wrap">
                <img
                  className="h-[43px] w-[45px] relative rounded-[50%] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/ellipse-155@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border min-w-[170px]">
                  <div className="self-stretch h-0 relative leading-[0%] font-medium inline-block z-[1]">
                    Saif Ahmed siddqui
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 flex flex-col items-start justify-end pt-0 px-0 pb-[6.9px] box-border">
            <div className="self-stretch flex flex-row items-end justify-start gap-[25px] mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[43px] min-w-[94px]">
                <b className="self-stretch relative font-bold shrink-0 [debug_commit:bf4bc93] z-[1] mq450:text-base">
                  Add Agents
                </b>
                <div className="self-stretch flex flex-row items-start justify-end py-0 px-[41px]">
                  <div className="h-[29.1px] w-[30.1px] box-border flex flex-row items-start justify-start relative shrink-0 [debug_commit:bf4bc93] z-[1] border-[2px] border-solid border-black">
                    <img
                      className="h-[19.8px] w-[24.5px] absolute !m-[0] top-[3.8px] left-[2.7px] object-contain"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="h-[29.1px] w-[30.1px] relative box-border hidden z-[1] border-[2px] border-solid border-black" />
                  </div>
                </div>
              </div>
              <div className="w-[119px] flex flex-col items-start justify-end pt-0 px-0 pb-[25.1px] box-border min-w-[119px] text-xs font-inter mq450:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3 relative gap-[1px]">
                  <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-t-8xs rounded-b-3xs bg-whitesmoke-400 box-border z-[1] border-t-[1px] border-solid border-silver-100" />
                  <div className="self-stretch rounded-t-8xs rounded-b-none bg-silver-200 flex flex-row items-start justify-start pt-3 px-[23px] pb-1.5 z-[2]">
                    <div className="h-[33px] w-[119px] relative rounded-t-8xs rounded-b-none bg-silver-200 hidden" />
                    <div className="w-[59px] relative inline-block shrink-0 z-[3]">
                      Inbound
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[23px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[7px]">
                      <div className="self-stretch relative z-[2]">
                        Outbound
                      </div>
                      <div className="w-[52px] flex flex-col items-start justify-start gap-[3px]">
                        <div className="self-stretch relative z-[2]">
                          Vetting
                        </div>
                        <div className="w-8 relative inline-block z-[2]">
                          BDR
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7.7px] box-border max-w-full">
        <div className="flex-1 shadow-[0px_4px_8.4px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(90deg,_#f5f5f5,_rgba(45,_128,_133,_0.36)_97.57%)] flex flex-row items-start justify-start pt-[11px] px-12 pb-[7px] box-border gap-[471px] max-w-full z-[1] mq950:flex-wrap">
          <div className="h-[62px] w-[959px] relative shadow-[0px_4px_8.4px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(90deg,_#f5f5f5,_rgba(45,_128,_133,_0.36)_97.57%)] hidden max-w-full" />
          <div className="w-[217px] flex flex-row items-start justify-start gap-[15px]">
            <img
              className="h-11 w-[45px] relative rounded-[50%] object-cover z-[2]"
              alt=""
              src="/ellipse-156@2x.png"
            />
            <input
              className="w-[calc(100%_-_69.5px)] [border:none] [outline:none] bg-[transparent] h-[22px] flex-1 flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border font-inter font-medium text-smi text-black min-w-[94px]"
              placeholder="Tom Curran"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <div className="w-[30.1px] h-[29.1px] box-border flex flex-row items-start justify-start relative z-[1] border-[2px] border-solid border-black">
              <img
                className="h-[19.8px] w-[24.5px] absolute !m-[0] top-[3.8px] left-[2.7px] object-contain"
                alt=""
                src="/icon.svg"
              />
              <div className="h-[29.1px] w-[30.1px] relative box-border hidden z-[1] border-[2px] border-solid border-black" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[814.1px] flex flex-row items-start justify-start pt-0 px-12 pb-[4.7px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq700:flex-wrap">
          <div className="w-[212px] flex flex-row items-start justify-start gap-[15px]">
            <img
              className="h-11 w-[45px] relative rounded-[50%] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/ellipse-159@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[22px] px-0 pb-0">
              <div className="self-stretch h-0 relative leading-[0%] font-medium inline-block z-[1]">
                Alex Parker
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <div className="w-[30.1px] h-[29.1px] box-border flex flex-row items-start justify-start relative z-[1] border-[2px] border-solid border-black">
              <img
                className="h-[19.8px] w-[24.5px] absolute !m-[0] top-[3.8px] left-[2.7px] object-contain"
                alt=""
                src="/icon.svg"
              />
              <div className="h-[29.1px] w-[30.1px] relative box-border hidden z-[1] border-[2px] border-solid border-black" />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[6.7px] box-border max-w-full">
        <div className="flex-1 shadow-[0px_4px_8.4px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(90deg,_#f5f5f5,_rgba(45,_128,_133,_0.36))] flex flex-row items-end justify-start pt-2.5 px-12 pb-2 box-border gap-[428px] max-w-full z-[1] mq950:flex-wrap">
          <div className="h-[61px] w-[959px] relative shadow-[0px_4px_8.4px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(90deg,_#f5f5f5,_rgba(45,_128,_133,_0.36))] hidden max-w-full" />
          <div className="w-[260px] flex flex-row items-start justify-start gap-[15px]">
            <img
              className="h-[43px] w-[45px] relative rounded-[50%] object-cover z-[2]"
              alt=""
              src="/ellipse-157@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[22px] px-0 pb-0">
              <div className="self-stretch h-0 relative leading-[0%] font-medium inline-block z-[2]">
                Kevin Petersen
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[6.9px]">
            <div className="w-[30.1px] h-[29.1px] box-border flex flex-row items-start justify-start relative z-[1] border-[2px] border-solid border-black">
              <img
                className="h-[19.8px] w-[24.5px] absolute !m-[0] top-[3.8px] left-[2.7px] object-contain"
                alt=""
                src="/icon.svg"
              />
              <div className="h-[29.1px] w-[30.1px] relative box-border hidden z-[1] border-[2px] border-solid border-black" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[814.3px] flex flex-row items-start justify-start pt-0 px-12 pb-[2.7px] box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[15px] max-w-full">
          <img
            className="h-11 w-[45px] relative rounded-[50%] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/ellipse-160@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[22px] pb-0 pr-5 pl-0 box-border min-w-[398px] max-w-full mq700:min-w-full">
            <div className="w-[180px] h-0 relative leading-[0%] font-medium inline-block z-[1]">
              David Warner
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <div className="w-[30.3px] h-[29.7px] relative box-border z-[1] border-[2px] border-solid border-black" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7.7px] box-border max-w-full">
        <div className="flex-1 shadow-[0px_4px_8.4px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(90deg,_#f5f5f5,_rgba(45,_128,_133,_0.36))] flex flex-row items-start justify-start pt-3 px-12 pb-[7px] box-border gap-[440px] max-w-full z-[1] mq950:flex-wrap">
          <div className="h-[61px] w-[959px] relative shadow-[0px_4px_8.4px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(90deg,_#f5f5f5,_rgba(45,_128,_133,_0.36))] hidden max-w-full" />
          <div className="w-[248px] flex flex-row items-start justify-start gap-[15px]">
            <img
              className="h-[42px] w-[45px] relative rounded-[50%] object-cover z-[2]"
              alt=""
              src="/avatar@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[21px] px-0 pb-0">
              <div className="self-stretch h-0 relative leading-[0%] font-medium inline-block z-[2]">
                Patt Cummins
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
            <div className="w-[30.3px] h-[28.5px] relative box-border z-[2] border-[2px] border-solid border-black" />
          </div>
        </div>
      </div>
      <div className="w-[815.2px] flex flex-row items-start justify-start py-0 px-[49px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px]">
          <div className="flex flex-row items-start justify-start gap-[14.4px] shrink-0 [debug_commit:bf4bc93]">
            <img
              className="h-[43px] w-[43.5px] relative rounded-[50%] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/ellipse-161@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-[22px] px-0 pb-0">
              <div className="h-0 relative leading-[0%] font-medium inline-block min-w-[83.1px] z-[1]">
                Steve Smith
              </div>
            </div>
          </div>
          <input className="m-0 h-9 w-[29.2px]" type="checkbox" />
        </div>
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent2;
