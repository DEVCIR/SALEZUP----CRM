import { useMemo } from "react";
import PropTypes from "prop-types";

const ProgressGrid = ({
  className = "",
  commission,
  emptyLabel,
  ring,
  number,
  propMinWidth,
  propMinWidth1,
  propLeft,
  propMinWidth2,
}) => {
  const commissionStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const emptyLabelStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const numberStyle = useMemo(() => {
    return {
      left: propLeft,
      minWidth: propMinWidth2,
    };
  }, [propLeft, propMinWidth2]);

  return (
    <div
      className={`flex-1 flex flex-col items-center justify-start gap-[16px] min-w-[117px] text-center text-sm text-foundation-m-green-m-green-400 font-display-xs-semibold ${className}`}
    >
      <div className="flex flex-col items-center justify-start gap-[4px]">
        <div
          className="relative inline-block min-w-[81px]"
          style={commissionStyle}
        >
          {commission}
        </div>
        <div
          className="relative text-lg font-semibold text-foundation-green-normal inline-block min-w-[59px] whitespace-nowrap"
          style={emptyLabelStyle}
        >
          {emptyLabel}
        </div>
      </div>

      <div className="self-stretch h-[126px] relative text-5xl text-gray-900">
        <div className="absolute h-[calc(100%_-_16px)] w-[calc(100%_-_46px)] top-[8px] right-[23px] bottom-[8px] left-[23px] max-w-full max-h-full flex items-center justify-center">
          <img
            className="h-full w-full overflow-hidden object-contain absolute left-[0px] top-[0px] [transform:scale(1.145)]"
            alt=""
            src={ring}
          />
        </div>
        <div
          className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_25px)] leading-[32px] font-semibold inline-block min-w-[50px] text-3xl"
          style={numberStyle}
        >
          {number}
        </div>

      </div>
    </div>
  );
};

ProgressGrid.propTypes = {
  className: PropTypes.string,
  commission: PropTypes.string,
  emptyLabel: PropTypes.string,
  ring: PropTypes.string,
  number: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propLeft: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default ProgressGrid;
