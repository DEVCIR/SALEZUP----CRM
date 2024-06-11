import PropTypes from "prop-types";

const User = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-center justify-start gap-[28px] max-w-full text-center text-lg text-black font-display-xs-semibold ${className}`}
    >
      <div className="h-[222px] w-[159px] relative">
        <img
          className="absolute top-[calc(50%_-_78px)] left-[0px] rounded-[50%] w-[159px] h-[159px] object-cover"
          alt=""
          src="/status-icon@2x.png"
        />
        <img
          className="absolute top-[26.4px] left-[107.5px] w-[38.5px] h-[38.5px] object-contain"
          alt=""
          src="/gold@2x.png"
        />
      </div>
      
      <div className="h-[209px] w-[200px] flex flex-col items-start justify-between">
        <b className="relative text-xl">Welcome Jack!</b>
        <div className="relative text-sm font-semibold text-darkslategray-100">
          Commissions Wallet: $25000
        </div>
        <div className="self-stretch h-[17px]" />
      </div>


      <div className="h-60 w-32 flex flex-col items-start justify-between py-5 px-0 box-border">
        <b className="self-stretch relative leading-[14px]">Campaigns</b>
        
        <div className="self-stretch h-[180px] relative">
          <img
            className="absolute top-[125.5px] left-[46px] w-[40px] h-[40px] object-contain"
            alt=""
            src="/image-42@2x.png"
          />
          <img
            className="absolute top-[46.5px] left-[50px] w-8 h-8 object-contain"
            alt=""
            src="/image-40@2x.png"
          />
          <img
            className="absolute top-[84.5px] left-[50px] w-[28px] h-8 object-contain"
            alt=""
            src="/image-41@2x.png"
          />
        </div>

      </div>

      <div className="h-[237px] flex-1 relative min-w-[226px] max-w-full text-3xs">
        <img
          className="absolute top-[40.6px] left-[188px] rounded-[50%] w-[38.4px] h-[35.4px] object-contain"
          alt=""
          src="/team-member-two@2x.png"
        />
        <div className="absolute top-[76px] left-[164px] w-[20.4px] h-[12.2px] text-4xs">
          <div className="absolute top-[-0.4px] left-[8.3px] inline-block min-w-[28px]">
            Jack Williams
          </div>
          {/* <b className="absolute top-[6.1px] left-[-0.3px] inline-block text-foundation-green-normal min-w-[27px]">
            Manager
          </b> */}
        </div>

        <img
          className="absolute top-[138px] left-[122px] w-[123px] h-[2.7px]"
          alt=""
          src="/line-62.svg"
        />

        
        <img
          className="absolute top-[138px] left-[184px] w-[108px] h-[2.7px] object-contain"
          alt=""
          src="/line-66.svg"
        />


        <img
          className="absolute top-[119px] left-[179px] w-0 h-[9px] object-contain"
          alt=""
          src="/line-65.svg"
        />
        <img
          className="absolute top-[61px] left-[185.7px] w-[14.2px] h-[13.1px] object-contain"
          alt=""
          src="/gold@2x.png"
        />


        <img
          className="absolute top-[127px] left-[210px] w-[3.7px] h-[9.6px] object-contain"
          alt=""
          src="/arrow-1.svg"
        />
        <img
          className="absolute top-[127px] left-[128px] w-[3.7px] h-[9.6px] object-contain"
          alt=""
          src="/arrow-1.svg"
        />
        <img
          className="absolute top-[127px] left-[292px] w-[3.7px] h-[9.6px] object-contain"
          alt=""
          src="/arrow-1.svg"
        />


<img
          className="absolute top-[142px] left-[192px] rounded-[50%] w-[35px] h-9 object-contain"
          alt=""
          src="/team-member-one@2x.png"
        />
        {/* <p className="left-[4px] mt-130 text-sm">Team Leader: Inbound</p> */}
<img
          className="absolute top-[142px] left-[106px] rounded-[50%] w-9 h-[35px] object-contain"
          alt=""
          src="/team-hierarchy@2x.png"
        />
        {/* <p className="left-[4px] mt-130 text-sm">Team Leader: Inbound</p> */}
<img
          className="absolute top-[142px] left-[274px] rounded-[50%] w-9 h-[35px] object-contain"
          alt=""
          src="/team-hierarchy@2x.png"
        />
        {/* <p className="left-[4px] mt-130 text-sm">Team Leader: Inbound</p> */}


        {/* <div className="absolute top-[197px] left-[4px] font-semibold flex items-center justify-center w-[114px] h-[11px] min-w-[114px]">
          Team Leader: Inbound
        </div> */}

        {/* <div className="absolute top-[197px] left-[123px] font-semibold text-foundation-green-normal flex items-center justify-center w-[113px] h-[11px] min-w-[113px]">
          Team Leader: Inbound
        </div>
        <div className="absolute top-[198px] left-[238px] font-semibold text-foundation-green-normal flex items-center justify-center w-[109px] h-3 min-w-[109px]">
          Team Leader: Inbound
        </div> */}

        <b className="absolute top-[12.5px] left-[120px] text-lg flex items-center justify-center w-[183px]">
          Team Organization
        </b>
        <img
          className="absolute top-[179px] left-[114px] w-[15px] h-[15px] object-contain"
          alt=""
          src="/image-43@2x.png"
        />
        <img
          className="absolute top-[180px] left-[198px] w-[13px] h-[13px] object-contain"
          alt=""
          src="/image-43@2x.png"
        />
        <img
          className="absolute top-[180px] left-[287px] w-[11px] h-3.5 object-contain"
          alt=""
          src="/image-44@2x.png"
        />
      </div>
      
      <div className="h-[234px] w-[101px] relative">
        <b className="absolute top-[13px] left-[-4px] inline-block min-w-[90px]">
          Team Size
        </b>

        <div className="absolute top-[102px] left-[10px] w-[82px] h-[23px] text-left text-3xs">
          <div className="absolute top-[0px] left-[0px] box-border text-center w-[82px] h-[23] bg-gray-200 border-[0.5px] border-solid border-black">
            
           <p>55 FTE</p>
          
          </div>
          
        </div>

      </div>

    </div>
  );
};

User.propTypes = {
  className: PropTypes.string,
};

export default User;
