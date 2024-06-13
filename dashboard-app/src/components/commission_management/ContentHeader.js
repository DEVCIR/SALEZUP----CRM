import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import Separator from "../Sales_Agents/Separator";

const ContentHeader = ({ className = "" }) => {

  return (
    <div
      className={`self-stretch h-[448.5px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-transparent box-border max-w-full z-[2] text-center text-xs text-black font-inter border-t-[3.5px] border-solid mq900:h-auto mq900:min-h-[445] `}
    >
      <div className="absolute top-[0px] left-[0px] shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border w-full h-full hidden border-t-[3.5px] border-solid border-silver-100" />
      <Separator /> 
      <div className="absolute top-[137px] left-[177px] w-0 h-[254px] z-[5]" />
      <div className="absolute top-[137px] left-[307px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[137px] left-[437px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[137px] left-[568px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[137px] left-[698px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[137px] left-[829px] w-0 h-[254px] z-[7]" />
    </div>
  );
};

ContentHeader.propTypes = {
  className: PropTypes.string,
};

export default ContentHeader;