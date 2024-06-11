import FrameComponent2 from "../components/team/Team_Component_2";
import { Button } from "@mui/material";

const Teams = ({className = ""}) => {
  return (
    <div className="w-full relative bg-darkslategray overflow-hidden flex flex-row flex-wrap items-start justify-start pt-[19px] px-0 pb-0 box-border leading-[normal] tracking-[normal] [row-gap:20px]">
      <div className="h-[1180px] w-[1434px] relative bg-darkslategray hidden max-w-full" />
      <main className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[710px] max-w-full mq750:min-w-full">
        <section className="self-stretch rounded-tl-21xl rounded-tr-none rounded-b-none bg-white flex flex-col items-start justify-start pt-[22px] pb-[236px] pr-[33px] pl-[47px] box-border gap-[70px] max-w-full z-[1] text-left text-13xl text-black font-nunito mq750:gap-[17px] mq750:pb-[99px] mq750:box-border mq1125:gap-[35px] mq1125:pl-[23px] mq1125:pt-5 mq1125:pb-[153px] mq1125:box-border">
          <div className="w-[1093px] h-[1159px] relative rounded-tl-21xl rounded-tr-none rounded-b-none bg-white hidden max-w-full" />
          
          <div   className={`self-stretch  flex flex-col items-start justify-start pt-0 px-0 pb-[81px] box-border gap-[40px] max-w-full text-left text-13xl text-black font-nunito mq750:gap-[20px] mq450:pb-[53px] mq450:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[6px]">
        <a className="[text-decoration:none] w-[134px] relative leading-[38px] font-bold text-[inherit] inline-block z-[2] mq450:text-lgi mq450:leading-[23px] mq1050:text-7xl mq1050:leading-[30px] text-4xl">
          Teams
        </a>
        <div className="relative text-xl font-medium z-[2]">{`Manager > Teams > Add New Teams`}</div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-xl font-inter">
        <div className="flex-1 shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border flex flex-col items-start justify-start pt-[9px] px-[26px] pb-[52px] gap-[31px] max-w-full z-[2] border-t-[3.5px] border-solid border-silver-100 mq750:gap-[15px]">
          <div className="w-[1011px] h-[250.5px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border hidden max-w-full border-t-[3.5px] border-solid border-silver-100" />
          <h3 className="m-0 relative text-xl font-semibold font-inherit z-[3] mq450:text-base">
            Add New Team
          </h3>
          <div className="w-[931px] flex flex-col items-end justify-start gap-[21px] max-w-full text-base text-gray-100">
            <div className="flex flex-row items-start self-stretch justify-start max-w-full">
              <div className="w-[666px] flex flex-row items-end justify-start gap-[15px] max-w-full mq750:flex-wrap">
                <FrameComponent2
                  campaign="Campaign"
                  fullName="Enter Team Name"
                />
                <FrameComponent2
                  campaign="Team Name"
                  fullName="Enter Team Name"
                />
                <FrameComponent2
                  campaign="Team Lead"
                  fullName="Enter Team Lead"
                />
               

              </div>
            </div>
            <Button
              className="w-[162px] h-10 z-[3]"
              startIcon={<img width="20px" height="20px" src="/teams/plus.svg" />}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "14",
                background: "#013a2b",
                border: "#013a2b solid 1px",
                borderRadius: "8px",
                "&:hover": { background: "#013a2b" },
                width: 162,
                height: 40,
              }}
            >
              Add New Team
            </Button>
          </div>
        </div>
      </div>
    </div>


          <div className="flex flex-row items-start justify-start py-0 px-0.5">
            <div className="flex flex-col items-start justify-start gap-[6px]">
              <b className="w-[134px] relative leading-[38px] text-4xl font-bold inline-block z-[2] mq450:text-lgi mq450:leading-[23px] mq1050:text-7xl mq1050:leading-[30px]">
                Teams
              </b>
              <div className="relative text-xl font-medium z-[2]">{`Manager > Teams > Current Teams`}</div>
            </div>
          </div>
          <div
      className={`w-[987px] flex flex-row items-start justify-start py-0 px-7 box-border max-w-full text-left text-xl text-black font-inter ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[23px] max-w-full">
        <b className="relative font-semibold z-[3] mq450:text-base">
          Current Teams
        </b>
        <div className="flex flex-col items-start self-stretch justify-start max-w-full text-sm text-center">
          <div className="self-stretch shadow-[0px_1px_1.04px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(89.05deg,_#f5f5f5,_rgba(45,_128,_133,_0.35)_88.41%)] overflow-x-auto flex flex-row items-start justify-between pt-[13px] pb-2.5 pr-[90px] pl-[92px] relative gap-[20px] z-[3] mq750:pl-[23px] mq750:pr-[22px] mq750:box-border mq1050:pl-[46px] mq1050:pr-[45px] mq1050:box-border">
            <div className="h-11 w-[931px] relative shadow-[0px_1px_1.04px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(89.05deg,_#f5f5f5,_rgba(45,_128,_133,_0.35)_88.41%)] shrink-0 hidden z-[0]" />
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_1px_1.04px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(89.05deg,_#f5f5f5,_rgba(45,_128,_133,_0.35)_88.41%)] z-[5]" />
            <div className="w-[79px] relative leading-[20px] inline-block shrink-0 z-[6]">{`Campaign `}</div>
            <div className="w-[65px] shrink-0 flex flex-col items-start justify-start pt-px pb-0 pr-[21px] pl-0 box-border">
              <div className="self-stretch relative leading-[20px] z-[6]">
                Team
              </div>
            </div>
            <div className="w-[115px] shrink-0 flex flex-col items-start justify-start py-0 pr-[29px] pl-0 box-border">
              <div className="self-stretch relative leading-[20px] z-[6]">
                Team Lead
              </div>
            </div>
            <div className="w-[55px] shrink-0 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
              <div className="self-stretch relative leading-[20px] z-[6]">
                Agents
              </div>
            </div>
          </div>
          <div className="relative flex flex-row items-start self-stretch justify-start max-w-full">
            <div className="h-[367px] w-[1011px] absolute !m-[0] top-[-121px] right-[-54px] z-[2] flex items-center justify-center">
              <img
                className="h-full w-full z-[2] object-contain absolute left-[0px] top-[20px] [transform:scale(1.144)]"
                loading="lazy"
                alt=""
                src="/teams/vector.svg"
              />
            </div>
            <div className="flex-1 shadow-[0px_9px_5.4px_-2px_rgba(0,_0,_0,_0.13)] rounded-[7.81px] bg-whitesmoke-100 flex flex-col items-start justify-start pt-[13px] px-0 pb-[5px] box-border gap-[13px] max-w-full z-[6]">
              <div className="self-stretch h-[170px] relative shadow-[0px_9px_5.4px_-2px_rgba(0,_0,_0,_0.13)] rounded-[7.81px] bg-whitesmoke-100 hidden" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                <div className="w-[914px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <div className="w-[730px] flex flex-row items-start justify-between py-0 pr-px pl-0 box-border gap-[20px] max-w-full mq750:flex-wrap">
                    <div className="w-[68px] relative leading-[20px] inline-block shrink-0 z-[7]">
                      3 Mobile
                    </div>
                    <div className="w-16 relative leading-[20px] inline-block shrink-0 z-[7]">
                      Inbound
                    </div>
                    <div className="w-[139px] flex flex-col items-start justify-start py-0 pr-[37px] pl-0 box-border">
                      <div className="self-stretch relative leading-[20px] z-[7]">
                        Shane Smart
                      </div>
                    </div>
                    <div className="w-[17px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                      <div className="self-stretch relative leading-[20px] inline-block min-w-[17px] z-[7]">
                        12
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border z-[7] border-t-[1px] border-solid border-silver-200" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
                <div className="w-[916px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <div className="w-[732px] flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
                    <div className="w-[63px] flex flex-col items-start justify-start py-0 pr-[13px] pl-0 box-border">
                      <div className="self-stretch relative leading-[20px] z-[7]">
                        Lipton
                      </div>
                    </div>
                    <div className="w-[79px] relative leading-[20px] inline-block shrink-0 z-[7]">
                      Outbound
                    </div>
                    <div className="w-[133px] flex flex-col items-start justify-start">
                      <div className="w-[92px] relative leading-[20px] inline-block z-[7]">
                        Jack Willow
                      </div>
                    </div>
                    <div className="w-[22px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                      <div className="self-stretch relative leading-[20px] z-[7]">
                        24
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border z-[7] border-t-[1px] border-solid border-silver-200" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
                <div className="w-[916px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <div className="w-[732px] flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
                    <div className="w-20 relative leading-[20px] inline-block shrink-0 z-[7]">
                      Coca Cola
                    </div>
                    <div className="w-[77px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                      <div className="self-stretch relative leading-[20px] z-[7]">
                        Vetting
                      </div>
                    </div>
                    <div className="w-[139px] flex flex-col items-start justify-start">
                      <div className="w-[90px] relative leading-[20px] inline-block z-[7]">
                        Brett Sharp
                      </div>
                    </div>
                    <div className="w-[22px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                      <div className="self-stretch relative leading-[20px] z-[7]">
                        06
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border z-[7] border-t-[1px] border-solid border-silver-200" />
              </div>
              <div className="w-[916px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="w-[732px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
                  <div className="w-[68px] relative leading-[20px] inline-block shrink-0 z-[7]">
                    3 Mobile
                  </div>
                  <div className="w-[38px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] z-[7]">
                      SDR
                    </div>
                  </div>
                  <div className="w-[118px] flex flex-col items-start justify-start py-0 pr-[22px] pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] z-[7]">
                      Mannie Smit
                    </div>
                  </div>
                  <div className="w-[22px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch relative leading-[20px] z-[7]">
                      05
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[215px] w-px absolute !m-[0] top-[-44px] left-[223px] box-border z-[8] border-r-[1px] border-solid border-silver-200" />
            <div className="h-[215px] w-px absolute !m-[0] top-[-44px] left-[459px] box-border z-[8] border-r-[1px] border-solid border-silver-200" />
            <div className="h-[215px] w-px absolute !m-[0] top-[-44px] right-[235px] box-border z-[8] border-r-[1px] border-solid border-silver-200" />
          </div>
        </div>
      </div>
    </div>
        </section>
      </main>
      <div className="h-[170px] w-[931px] relative shadow-[0px_9px_5.4px_-2px_rgba(0,_0,_0,_0.13)] rounded-[7.81px] bg-whitesmoke-100 hidden max-w-full" />
      <div className="h-px w-[932px] relative box-border hidden max-w-full border-t-[1px] border-solid border-silver-200" />
      <div className="h-px w-[932px] relative box-border hidden max-w-full border-t-[1px] border-solid border-silver-200" />
      <div className="h-px w-[932px] relative box-border hidden max-w-full border-t-[1px] border-solid border-silver-200" />
    </div>
  );
};

export default Teams;
