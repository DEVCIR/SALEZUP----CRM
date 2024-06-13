import Container from "../components/Sales_Agents/Container";
import Separator from "../components/Sales_Agents/Separator";
import GroupComponent from "../components/Sales_Agents/GroupComponent";
import React, { useState, useEffect } from 'react';

const Add_New_Agent = () => {


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
    start_date: startDate
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
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <section className="flex flex-col items-start justify-start pt-0 px-0 pb-10 gap-8 max-w-full text-left text-2xl text-black font-nunito">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Add New Agent</h1>
            <div className="text-xl font-medium">Manager Sale Agents Add New Agent</div>
          </div>
          <form
            className="flex-1 shadow-lg rounded-2xl border bg-white flex flex-col pt-7 px-14 pb-16 gap-8 border-t-4 border-silver"
            onSubmit={register_sales_agent}
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-medium">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter your First Name"
                    className="p-2 border rounded bg-gray-100  border-gray-100"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter your Last Name"
                    className="p-2 border rounded bg-gray-100  border-gray-100"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-medium">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"
                    className="p-2 border rounded bg-gray-100  border-gray-100"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="p-2 border rounded bg-gray-100  border-gray-100"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-medium">Campaign</label>
                  <input
                    type="text"
                    value={campaign}
                    onChange={(e) => setCampaign(e.target.value)}
                    placeholder="Enter your Campaign"
                    className="p-2 border rounded bg-gray-100  border-gray-100"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium">Manager</label>
                  <input
                    type="text"
                    value={manager}
                    onChange={(e) => setManager(e.target.value)}
                    placeholder="Enter your manager"
                    className="p-2 border rounded bg-gray-100  border-gray-100"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium">Select Team</label>
                <input
                  type="text"
                  value={team}
                  onChange={(e) => setTeam(e.target.value)}
                  placeholder="Select Team"
                  className="p-2 border rounded bg-gray-100  border-gray-100"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl font-bold">Commission Set-up</h2>
              <div className="flex flex-row gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-medium">Commission Opportunity</label>
                  <input
                    type="text"
                    value={comission_opurtunity}
                    onChange={(e) => setcomission_opurtunity(e.target.value)}
                    placeholder="Enter Amount"
                    className="p-2 border rounded bg-gray-100  border-gray-100"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium">Frequency</label>
                  <div className="flex flex-col gap-1">
                    <label>
                      <input
                        type="checkbox"
                        value="Month"
                        checked={selectedFrequency === 'Month'}
                        onChange={handleFrequencyChange}
                      />{' '}
                      Month
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        value="Quarter"
                        checked={selectedFrequency === 'Quarter'}
                        onChange={handleFrequencyChange}
                      />{' '}
                      Quarter
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        value="Year"
                        checked={selectedFrequency === 'Year'}
                        onChange={handleFrequencyChange}
                      />{' '}
                      Year
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium">Target</label>
                  <div className="flex flex-col gap-1">
                    <label>
                      <input
                        type="checkbox"
                        value="Revenue"
                        checked={selectedTarget === 'Revenue'}
                        onChange={handleTargetChange}
                      />{' '}
                      Revenue
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        value="Units"
                        checked={selectedTarget === 'Units'}
                        onChange={handleTargetChange}
                      />{' '}
                      Units
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium">Target Value</label>
                  <input
                    type="text"
                    value={target_value}
                    onChange={(e) => settarget_value(e.target.value)}
                    placeholder="Enter target value"
                    className="p-2 border rounded bg-gray-100  border-gray-100"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 py-3 px-6 bg-darkslategray text-black rounded-lg hover:bg-darkslategray/70"
            >
              Add to Team & Invite Agent
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Add_New_Agent;
