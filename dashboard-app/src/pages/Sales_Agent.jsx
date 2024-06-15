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




        



</div>



      
    </>
  );
};

export default SaleAgents;
