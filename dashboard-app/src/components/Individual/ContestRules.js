import { Button } from "@mui/material";
import PropTypes from "prop-types";

const ContestRules = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border flex flex-row items-end justify-start pt-[18px] px-12 pb-[34.1px] relative gap-[41px] max-w-full z-[2] text-center text-smi text-black font-nunito border-t-[3.5px] border-solid border-silver-100 mq950:flex-wrap ${className}`}
    >
      <div className="h-[202.5px] w-[1011px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border hidden max-w-full z-[0] border-t-[3.5px] border-solid border-silver-100" />
      <b className="h-0 w-0 absolute !m-[0] right-[381px] bottom-[79.5px] text-mini leading-[0%] inline-block z-[3]">{` `}</b>
      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[150px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[25.5px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-6 pl-5">
            <img
              className="h-[67px] w-[63px] relative object-cover z-[3]"
              loading="lazy"
              alt=""
              src="/image-21@2x.png"
            />
          </div>
          <div className="self-stretch h-0 relative tracking-[-0.02em] leading-[0%] inline-block z-[4]">
            Highest revenue delivered wins.
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[67px] pl-[71px]">
            <Button
              className="h-[22.9px] flex-1 z-[3]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "15",
                background: "#06916c",
                borderRadius: "9px",
                "&:hover": { background: "#06916c" },
                height: 22.9,
              }}
            >
              Select
            </Button>
          </div>
        </div>
      </div>
      <div className="h-0 w-[231px] absolute !m-[0] bottom-[79.5px] left-[253px] tracking-[-0.02em] leading-[0%] inline-block z-[3]">
        Most units delivered wins.
      </div>
      <div className="w-28 flex flex-col items-end justify-start py-0 pr-[19px] pl-0 box-border gap-[52px]">
        <div className="flex flex-row items-start justify-end py-0 pr-3.5 pl-[15px]">
          <img
            className="h-[67px] w-[63px] relative object-cover z-[3]"
            loading="lazy"
            alt=""
            src="/image-21@2x.png"
          />
        </div>
        <Button
          className="self-stretch h-[22.9px] z-[3]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "15",
            background: "#013a2b",
            borderRadius: "9px",
            "&:hover": { background: "#013a2b" },
            height: 22.9,
          }}
        >
          Select
        </Button>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border gap-[7px] min-w-[147px]">
        <div className="flex flex-row items-start justify-start py-0 pr-[82px] pl-[77px]">
          <img
            className="h-[67px] w-[63px] relative object-cover z-[3]"
            loading="lazy"
            alt=""
            src="/image-21@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[1px]">
          <p className="m-0 self-stretch h-11 relative tracking-[-0.02em] inline-block shrink-0 z-[4]">
            1st player to reach a specific amount of revenue wins.
          </p>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-16 pl-[65px]">
            <Button
              className="h-[22.9px] flex-1 z-[3]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "15",
                background: "#013a2b",
                borderRadius: "9px",
                "&:hover": { background: "#013a2b" },
                height: 22.9,
              }}
            >
              Select
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[8.5px] min-w-[144px]">
        <div className="flex flex-row items-start justify-start py-0 pr-[82px] pl-[77px]">
          <img
            className="h-[67px] w-[63px] relative object-cover z-[3]"
            loading="lazy"
            alt=""
            src="/image-21@2x.png"
          />
        </div>
        <p className="m-0 self-stretch relative tracking-[-0.02em] z-[3]">
          1st player to reach a specific amount of units wins.
        </p>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[67px] pl-[62px]">
          <Button
            className="h-[22.9px] flex-1 z-[3]"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "15",
              background: "#013a2b",
              borderRadius: "9px",
              "&:hover": { background: "#013a2b" },
              height: 22.9,
            }}
          >
            Select
          </Button>
        </div>
      </div>
    </div>
  );
};

ContestRules.propTypes = {
  className: PropTypes.string,
};

export default ContestRules;
