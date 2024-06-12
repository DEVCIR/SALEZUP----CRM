import Container from "../components/Sales_Agents/Container";
import Separator from "../components/Sales_Agents/Separator";
import GroupComponent from "../components/Sales_Agents/GroupComponent";
import React, { useState, useEffect } from 'react';

const SaleAgents = () => {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [startDate, setStartDate] = useState('');
  const [campaign, setCampaign] = useState('');
  const [manager, setManager] = useState('');
  const [team, setTeam] = useState('');

  const [selectedTarget, setSelectedTarget] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState('');

  const [comission_opurtunity, setcomission_opurtunity] = useState('');
  const [target_value, settarget_value] = useState('');

  const handleTargetChange = (event) => {
    setSelectedTarget(event.target.value);
  };


  const handleFrequencyChange = (event) => {
    setSelectedFrequency(event.target.value);
  };


 console.log("1",firstName)
 console.log("2",lastName)
 console.log("3",email)
 console.log("4",startDate)
 console.log("5",campaign)
 console.log("6",manager)
 console.log("7",team)
 console.log("9",comission_opurtunity)
 console.log("10",target_value)
 console.log("11",selectedTarget)
 console.log("12",selectedFrequency)
 
 const register_sales_agent = async (e) => {
  e.preventDefault();

  // Validation checks
  if (!firstName || !lastName || !email || !startDate || !campaign || !manager || !team || !comission_opurtunity || !target_value || !selectedTarget || !selectedFrequency) {
    alert('Please fill in all fields');
    return;
  }

  const payload = {
    name: firstName,
    surname: lastName,
    email: email,
    team_id: team,
    teamleader: manager,
    commission: comission_opurtunity,
    target: target_value,
    frequency: selectedFrequency,
    campaign: campaign,
    start_date: startDate,
    active: "Yes"
  };

  console.log("Payload to be sent:", payload);

  try {
    const response = await fetch('http://localhost:8000/api/sales_agents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log("Response from API:", data);

    // Reset the form after successful submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setStartDate('');
    setCampaign('');
    setManager('');
    setTeam('');
    setSelectedTarget('');
    setSelectedFrequency('');
    setcomission_opurtunity('');
    settarget_value('');
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};



//  const register_sales_agent = async (e) => {
//   e.preventDefault();

//   const salesAgentData = {
//     firstName,
//     lastName,
//     email,
//     startDate,
//     campaign,
//     manager,
//     team,
//     selectedTarget,
//     selectedFrequency,
//     comission_opurtunity,
//     target_value,
//   };

//   console.log("Sales Agent Data:", salesAgentData);

//   try {
//     const response = await fetch('http://localhost:8000/api/sales_agents', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(salesAgentData),
//     });

//     if (response.ok) {
//       const result = await response.json();
//       console.log('Success:', result);
//       alert("Agent loaded Successfully")
      
//     } else {
//       const error = await response.json();
//       console.error('Error:', error);
      
//     }
//   } catch (error) {
//     console.error('Network Error:', error);
    
//   }
// };




  return (
<>
<div className="w-full">

<section className="self-stretch flex flex-col items-start justify-start gap-[14px]  max-w-full  text-13xl text-black font-nunito">
          <div className="flex flex-col items-start justify-start gap-[1px] max-w-full">
            <a className="[text-decoration:none] w-[134px]  ml-4 mt-4 relative font-bold text-[inherit] inline-block z-[2] text-3xl">
              Agents
            </a>
            <br></br>
            <div className="relative ml-4 text-xl text-black font-medium z-[2]">{`Manager > Sale Agents > List of current agents/List of pending agents`}</div>
          </div>
          {/* Current Agents div */}
          <Separator />
          {/* Current Agents div */}
        </section>




        <section className="mt-8 self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[43px] box-border gap-[34px] max-w-full text-left text-13xl text-black font-nunito mq1050:pb-7 mq1050:box-border mq750:gap-[17px] mq750:pb-5 mq750:box-border">
          
          <div className="w-96 flex flex-col  ml-4 gap-[6px] max-w-full ">
            <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit z-[2] text-3xl">
              Add New Agent
            </h1>
            <br></br>
            <div className="relative text-xl text-black font-medium z-[2]">{`Manager > Sale Agents > Add New Agent`}</div>
          </div>
          <div className="box-border flex flex-row items-start self-stretch justify-start max-w-full py-0 pl-px pr-0 text-base text-gray font-inter">

            {/* _____________________________________ Add Sales Agent __________________________________________________________ */}
           
            <div className="flex-1 shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-2xl border bg-white  box-border flex flex-col items-end justify-start pt-7 px-[55px] pb-[63px] gap-[85px] max-w-full z-[2] border-t-[3.5px] border-solid border-silver mq1050:gap-[42px] mq1050:pt-5 mq1050:px-[27px] mq1050:pb-[41px] mq1050:box-border mq450:pb-[27px] mq450:box-border mq750:gap-[21px]">
              <div className="w-[1200px] h-[860.5px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border hidden max-w-full border-t-[3.5px] border-solid border-silver" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[13.2px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
                 
                  <div className="w-[401px] flex flex-col items-start justify-start gap-[9px] max-w-full">
                    <div className="w-[212px] relative font-medium inline-block z-[3]">
                      First Name
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-[15.3px] px-3 pb-[16.5px] relative z-[3] text-3xs text-black">
                     
                      <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your First Name"
            />
                     
                    </div>
                  </div>

                  <div className="w-[401px] flex flex-col items-start justify-start gap-[10px] max-w-full">
                    <div className="w-[212px] relative font-medium inline-block z-[3]">
                      Last Name
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-[15.3px] px-[11px] pb-[16.5px] relative z-[3] text-3xs text-black">
                     

<input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your Last Name"
            />
                    </div>
                  </div>


                </div>
                <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
                  <div className="w-[401px] flex flex-col items-start justify-start gap-[19.2px] max-w-full">
                    
                    
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                      <div className="w-[212px] relative font-medium inline-block z-[3]">
                        Email
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start pt-[15.3px] px-3 pb-[16.5px] relative z-[3] text-3xs text-black">
                        {/* <img
                          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5.99px] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/bg.svg"
                        /> */}
                        <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
            />
                      </div>
                    </div>


                    <div className="self-stretch flex flex-row items-start justify-start gap-[23px] mq450:flex-wrap">
                     
                      <div className="flex-1 flex flex-col items-start justify-start gap-[9px] min-w-[123px]">
                        <div className="relative font-medium inline-block min-w-[88px] z-[3]">
                          Start Date
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start pt-[15.3px] px-3 pb-[16.7px] relative z-[3] text-3xs text-black">
                        <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="Enter your Date"
            />
                        </div>
                      </div>


                      <div className="flex-1 flex flex-col items-start justify-start gap-[9px] min-w-[123px]">
                        <div className="w-[90px] flex flex-row items-start justify-start py-0 px-px box-border">
                          <div className="flex-1 relative font-medium z-[3]">
                            Campaign
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start pt-[15.3px] px-3 pb-[16.7px] relative z-[3] text-3xs text-black">
                        <input
              type="text"
              value={campaign}
              onChange={(e) => setCampaign(e.target.value)}
              placeholder="Enter your Campaign"
            />
                          
                        </div>
                      </div>


                    </div>
                  </div>
                  <div className="w-[401px] flex flex-col items-start justify-start gap-[22.2px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                      <div className="w-[212px] relative font-medium inline-block z-[3]">
                        Manager
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start pt-[15.3px] px-3 pb-[16.5px] relative z-[3] text-3xs text-black">
                      <input
              type="text"
              value={manager}
              onChange={(e) => setManager(e.target.value)}
              placeholder="Enter your manager"
            />
                        
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                      <div className="w-[212px] relative font-medium inline-block z-[3]">
                        Select Team
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start pt-[15.3px] px-3 pb-[16.5px] relative z-[3] text-3xs text-black">
                      <input
              type="text"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              placeholder="Select Team"
            />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          

<div className="self-stretch flex flex-row items-start  justify-end pt-0 pb-5 pr-[31px] pl-0 box-border max-w-full text-13xl text-black font-nunito">
                <div className="flex-1 flex flex-col items-start justify-start gap-[45px] max-w-full mq450:gap-[22px]">
                  <h1 className="m-0 w-96 relative text-inherit font-bold font-inherit inline-block max-w-full z-[3] text-3xl">
                    Commission Set-up
                  </h1>
                  <div className="self-stretch h-[159px] relative text-sm font-inter mq1050:h-auto mq1050:min-h-[159]">
                    <div className="absolute top-[0px] left-[0px]  flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border gap-[46px] w-full text-3xs mq1050:flex-wrap mq1050:pt-0.5 mq1050:pr-0.5 mq1050:pb-0.5 mq1050:box-border mq450:gap-[23px]">
                      <div className="flex flex-row items-start justify-start z-[3]">
                        <img
                          className="h-9 w-[268px] relative rounded-[5.99px]"
                          loading="lazy"
                          alt=""
                          src="/bg-7.svg"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="flex flex-row items-start justify-start z-[3]">
                          <img
                            className="h-9 w-[143px] relative rounded-[5.99px]"
                            alt=""
                            src="/bg-8.svg"
                          />
                          <div className="h-0 w-[77px] relative hidden">
                            Enter your Email
                          </div>
                          <div className="relative hidden w-8 h-0 text-xs font-medium text-right text-green-primary">
                            Show
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-px pb-0  pl-0">
                        <div className="flex flex-row items-start justify-start z-[3]">
                          <img
                            className="h-9 w-[143px] relative rounded-[5.99px] "
                            alt=""
                            src="/bg-8.svg"
                          />
                          <div className="h-0 w-[77px] relative hidden">
                            Enter your Email
                          </div>
                          <div className="relative hidden w-8 h-0 text-xs font-medium text-right text-green-primary">
                            Show
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start z-[3]">
                        <img
                          className="h-9 w-[273px] left-[-190px] relative rounded-[5.99px]"
                          alt=""
                          src="/bg-8.svg"
                        />
                        <div className="h-0 w-[77px] relative hidden">
                          Enter your Email
                        </div>
                        <div className="relative hidden w-8 h-0 text-xs font-medium text-right text-green-primary">
                          Show
                        </div>
                      </div>
                      <img
                        className="h-9 w-full  absolute !m-[0] top-[0px] right-[0px]   overflow-hidden z-[4]"
                        alt=""
                        src="/rectangle-1664.svg"
                      />
                      <div className="h-[11px] w-[184px] absolute !m-[0] top-[calc(50%_-_5.5px)] left-[14px] text-mini font-medium text-center flex items-center justify-center z-[5]">
                        Commission Opportunity
                      </div>
                      <div className="h-[11px] w-[102px] absolute !m-[0] top-[calc(50%_-_5.5px)] left-[316px] text-mini font-medium text-center flex items-center justify-center z-[5]">
                        Frequency
                      </div>
                      <div className="h-[11px] w-[57px] absolute !m-[0] top-[calc(50%_-_5.5px)] left-[560px] text-mini font-medium text-center flex items-center justify-center z-[5]">
                        Target
                      </div>
                      <div className="h-[11px] absolute !m-[0] top-[12px] left-[780px] text-mini font-medium text-center flex items-center justify-center min-w-[90px] z-[5]">
                        Target Value
                      </div>
                    </div>


                    <div className="absolute top-[37px] left-[2px] w-[268px] flex flex-row items-start justify-start pt-[10.3px] px-3 pb-[10.7px] box-border z-[3] text-3xs">
                    <input
              type="text"
              value={comission_opurtunity}
              onChange={(e) => setcomission_opurtunity(e.target.value)}
              placeholder="Enter Amount"
            />
                    </div>

                    <div className="absolute top-[37px] bg-white/70 border-2 border-black/70 left-[316px]  w-[143px] flex flex-row items-end justify-start  pb-[34.5px] pr-2.5 pl-[11px] box-border gap-[25px]">
        
<div>           
           <div  className="flex flex-col pt-4">
    
          <label className="space-x-4">
        <input
          type="checkbox"
          value="Month"
          checked={selectedFrequency === 'Month'}
          onChange={handleFrequencyChange}
        
        />
       &nbsp; Month
      </label>
      <label className="pt-2">
        <input
          type="checkbox"
          value="Quarter"
          checked={selectedFrequency === 'Quarter'}
          onChange={handleFrequencyChange}
        />
&nbsp;  Quarter
          </label>
                    <label className="pt-2">
        <input
          type="checkbox"
          value="Year"
          checked={selectedFrequency === 'Year'}
          onChange={handleFrequencyChange}
        />
&nbsp;&nbsp;Year
          </label>
      </div>
    </div>
    </div>
      
                    <div className="absolute top-[37px]  bg-white/70 border-2 border-black/70 left-[525px] w-[143px] flex flex-col items-start justify-start  px-2.5 pb-[12.3px] box-border gap-[23.5px]">
                     
<div>           
           <div  className="flex flex-col ">
    
          <label className="pt-4">
        <input
          type="checkbox"
          value="Revenue"
          checked={selectedTarget === 'Revenue'}
          onChange={handleTargetChange}
        />
      &nbsp; Revenue
      </label>
      <label className="pt-2">
        <input
          type="checkbox"
              value="Units"
          checked={selectedTarget === 'Units'}
          onChange={handleTargetChange}
        />
     &nbsp;Units
          </label>
        
      </div>
    </div>
      <div>


</div>

                      <div className="flex flex-row items-start justify-start py-0 bg-green-800 rounded-md px-[29px] text-[13px] text-white font-nunito">
                        <div className="rounded-4xs bg-darkslategray flex flex-row  items-start justify-start pt-[9px] pb-[8.4px] pr-4 pl-[21px] z-[5]">
                          <div className="h-[17.7px] w-[65px] relative rounded-4xs bg-green-800 rounded-md hidden" />
                          <b className="relative leading-[0%] font-bold inline-block [transform:_rotate(-0.6deg)] min-w-[27.6px] z-[1]">
                            Add
                          </b>
                        </div>
                      </div>
                    </div>
                   
                    <div className="absolute top-[36px] left-[712px] w-[143px] flex flex-row items-start justify-start pt-[9px] px-[17px] pb-2 ">
                      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]   bg-whitesmoke-200  z-[5]  " />
                      
                      
                      <div className="relative inline-block min-w-[45px] whitespace-nowrap z-[6]">
                      <input
              type="text"
              value={target_value}
              onChange={(e) => settarget_value(e.target.value)}
              placeholder="Enter your Manager"
            />
                      </div>

                    </div>

                  </div>
                </div>
              </div>

              <button type="submit" className="cursor-pointer [border:none] pt-7 pb-[27px] pr-[37px] pl-[38px] bg-darkslategray w-[297.1px] rounded-8xs flex flex-row items-start justify-start box-border whitespace-nowrap z-[3] bg-[#013A2B] hover:bg-[#013A2B]">
                <div className="h-[75px] w-[297.1px] relative rounded-8xs bg-darkslategray hidden" />
                <b className="flex-1 relative text-base font-nunito text-white  text-left z-[1]">{`Add to Team & Invite Agent`}</b>
              </button>


            </div>
          </div>



        </section>
        <section className="box-border flex flex-row items-start self-stretch justify-start max-w-full py-0 pl-px pr-0">
          <GroupComponent />
        </section>



</div>



      
    </>
  );
};

export default SaleAgents;
