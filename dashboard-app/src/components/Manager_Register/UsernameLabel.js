import { useMemo } from "react";
import PropTypes from "prop-types";

const UsernameLabel = ({
  className = "",
  username,
  fullName,
  propMinWidth,
}) => {
  const fullNameStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[13px] text-left text-base text-gray font-inter ${className}`}
    >
      <div className="w-[212px] relative font-medium inline-block z-[1]">
        {username}
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[15.3px] px-3 pb-[16.5px] relative z-[1] text-3xs text-black">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5.99px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/bg.svg"
        />
        <div
          className="relative inline-block min-w-[100px] z-[1]"
          style={fullNameStyle}
        >
          {fullName}
        </div>
        <div className="w-8 relative text-xs font-medium text-green-primary text-right hidden z-[2]">
          Show
        </div>
      </div>
    </div>
  );
};

UsernameLabel.propTypes = {
  className: PropTypes.string,
  username: PropTypes.string,
  fullName: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default UsernameLabel;
