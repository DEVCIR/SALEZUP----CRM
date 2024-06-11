import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";

const StatisticTitle = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[487px] relative max-w-full text-center text-lg text-foundation-green-normal font-display-xs-semibold mq975:h-auto mq975:min-h-[487] ${className}`}
    >
      <FrameComponent2
        agentRankingPerformanceVs="Agent Ranking : Performance Vs Actual"
        asset3="/asset-3@2x.png"
        asset2="/asset-2@2x.png"
        asset1="/asset-1@2x.png"
      />
      <FrameComponent2
        agentRankingPerformanceVs="Agent Ranking : SPIFF’S"
        asset3="/asset-3@2x.png"
        asset2="/asset-2@2x.png"
        asset1="/asset-1@2x.png"
        propDisplay="unset"
        propPadding="43px 0px 0px"
        propGap="24px"
      />
      <div className="absolute top-[119.5px] left-[667.5px] box-border w-px h-[314px] border-r-[1px] border-dashed border-foundation-green-light-active" />
      <div className="absolute top-[119.5px] left-[847.5px] box-border w-px h-[314px] border-r-[1px] border-dashed border-foundation-green-light-active" />
      <div className="absolute top-[119.5px] left-[485.5px] box-border w-px h-[314px] border-r-[1px] border-dashed border-foundation-green-light-active" />
      <div className="absolute top-[119.5px] left-[327.5px] box-border w-px h-[314px] border-r-[1px] border-dashed border-foundation-green-light-active" />
    </div>
  );
};

StatisticTitle.propTypes = {
  className: PropTypes.string,
};

export default StatisticTitle;
