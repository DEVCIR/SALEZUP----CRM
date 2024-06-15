import { Button } from "@mui/material";
import PropTypes from "prop-types";

const ContestRules = ({ className = "" }) => {
  return (
    <div className={`shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl w-[95%] box-border flex flex-row items-center justify-between p-5 relative z-[2] text-center text-sm text-black border-t-[3.5px] border-solid border-silver-100 flex-wrap ${className}`}>
      <div className="flex  flex-col items-center justify-center min-w-[150px]">
        <div className="flex flex-col items-center justify-center gap-[5px]">
          <div className="flex flex-row items-center justify-center ">
            <img
              className="h-[67px] w-[63px] relative object-cover z-[3]"
              loading="lazy"
              alt=""
              src="/image-21@2x.png"
            />
          </div>
          <div className="">
            Highest revenue <br />delivered wins.
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-[67px] pl-[71px]">
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
      <div className="flex  flex-col items-center justify-center min-w-[150px]">
        <div className="flex flex-col items-center justify-center gap-[5px]">
          <div className="flex flex-row items-center justify-center ">
            <img
              className="h-[67px] w-[63px] relative object-cover z-[3]"
              loading="lazy"
              alt=""
              src="/image-21@2x.png"
            />
          </div>
          <div className="">
            Most units <br />delivered wins.
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-[67px] pl-[71px]">
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
      <div className="flex  flex-col items-center justify-center min-w-[150px]">
        <div className="flex flex-col items-center justify-center gap-[5px]">
          <div className="flex flex-row items-center justify-center ">
            <img
              className="h-[67px] w-[63px] relative object-cover z-[3]"
              loading="lazy"
              alt=""
              src="/image-21@2x.png"
            />
          </div>
          <div className="">
            1st player to reach a specific <br /> amount of units wins.
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-[67px] pl-[71px]">
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
      <div className="flex  flex-col items-center justify-center min-w-[150px]">
        <div className="flex flex-col items-center justify-center gap-[5px]">
          <div className="flex flex-row items-center justify-center ">
            <img
              className="h-[67px] w-[63px] relative object-cover z-[3]"
              loading="lazy"
              alt=""
              src="/image-21@2x.png"
            />
          </div>
          <div className="">
            1st player to reach a specific <br />  amount of revenue wins.
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-[67px] pl-[71px]">
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
    </div >
  );
};

ContestRules.propTypes = {
  className: PropTypes.string,
};

export default ContestRules;

//
// 