import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const FrameComponent = ({ className = "" }) => {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [startDate, setStartDate] = useState('');
  const [team, setTeam] = useState('');

  const [selectedTarget, setSelectedTarget] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [checkboxes, setCheckboxes] = useState(['Revenue', 'Units']);

  const [admins, setAdmins] = useState([]);
  const [manager, setManager] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (inputValue.trim()) {
      setCheckboxes([...checkboxes, inputValue]);
      setInputValue('');
    }
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const deleteCheckbox = (index) => {
    const newCheckboxes = checkboxes.filter((_, i) => i !== index);
    setCheckboxes(newCheckboxes);
  };

  const [selectedFrequency, setSelectedFrequency] = useState('');

  const [comission_opurtunity, setcomission_opurtunity] = useState('');
  const [target_value1, settarget_value1] = useState('');

  const handleTargetChange = (event) => {
    setSelectedTarget(event.target.value);
  };


  const handleFrequencyChange = (event) => {
    setSelectedFrequency(event.target.value);
  };


  const [campaign, setCampaign] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/campaign');
        const campaigns = response.data.map(campaign => ({
          value: campaign.id,
          label: campaign.name,
        }));
        setOptions(campaigns);
      } catch (error) {
        console.error('Error fetching campaign options:', error);
      }
    };

    fetchCampaigns();
  }, []);

  const handleCampaignChange = (selectedOption) => {
    setCampaign(selectedOption);
  };

  console.log("1",firstName)
  console.log("2",lastName)
  console.log("3",email)
  console.log("4",startDate)
  console.log("5",campaign)
  console.log("6",manager)
  console.log("7",team)
  console.log("9",comission_opurtunity)
  console.log("10",target_value1)
  console.log("11",selectedTarget)
  console.log("12",selectedFrequency)

  const register_team_leaders = async (e) => {
    e.preventDefault();
  
    // Validation checks
    if (!firstName || !lastName || !email || !startDate || !campaign || !manager || !selectedTeam || !comission_opurtunity || !target_value1 || !selectedTarget || !selectedFrequency) {
      alert('Please fill in all fields');
      return;
    }
  
    const payload = {
      name: firstName,
      surname: lastName,
      email: email,
      team_id: selectedTeam.value,
      manager: manager.value,
      commission: comission_opurtunity,
      target: selectedTarget,
      target_value: target_value1,
      frequency: selectedFrequency,
      campaign: campaign,
      start_date: startDate
    };
  
    console.log("Payload to be sent:", payload);
  
    try {
      const response = await fetch('http://localhost:8000/api/team_leaders', {
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
      settarget_value1('');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const [teams, setTeams] = useState([]);

  const handleAdminChange = (selectedOption) => {
    setManager(selectedOption);
  };



  useEffect(() => {
    axios.get('http://localhost:8000/api/teams')
      .then(response => {
        setTeams(response.data);
      })
      .catch(error => {
        console.error('Error fetching the teams:', error);
      });

    axios.get('http://localhost:8000/api/admin-registrations')
      .then(response => {
        setAdmins(response.data);
      })
      .catch(error => {
        console.error('Error fetching the admins:', error);
      });
  }, []);

  const [selectedTeam, setSelectedTeam] = useState(null);
  const handleChange = (selectedOption) => {
    setSelectedTeam(selectedOption);
    console.log('Selected team:', selectedOption);
    console.log('Selected team:', selectedTeam);
  };

  const teamOptions = teams.map(team => ({
    value: team.id,
    label: team.team_name
  }));

  const adminOptions = admins.map(admin => ({
    value: admin.id,
    label: admin.first_name
  }));















  return (
    



<>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <section className="flex flex-col items-start justify-start pt-0 px-0 pb-10 gap-8 max-w-full text-left text-2xl text-black font-nunito">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Add New Team Leader</h1>
            
          </div>
          <form
            className="flex-1 shadow-lg rounded-2xl border bg-white flex flex-col pt-7 px-14 pb-16 gap-8 border-t-4 border-silver"
            onSubmit={register_team_leaders}
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
                  <Select
                    value={campaign}
                    onChange={handleCampaignChange}
                    options={options}
                    placeholder="Select your Campaign"
                    className="p-2 border rounded bg-gray-100 border-gray-100"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium">Manager</label>
                  
                  <Select
                    value={manager}
                    onChange={handleAdminChange}
                    options={adminOptions}
                    placeholder="Select Manager"
                    isClearable
                    className="p-2 border rounded bg-gray-100  border-gray-100"
                  />


                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium">Select Team</label>
                <Select
                  value={selectedTeam}
                  onChange={handleChange}
                  options={teamOptions}
                  placeholder="Select Team"
                  isClearable
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
                  



<div>
      <div className="flex flex-col gap-1 h-40 p-4">
        {checkboxes.map((checkbox, index) => (
          <div key={index} className="flex items-center text-sm justify-between">
            <label>
              <input
                type="checkbox"
                value={checkbox}
                checked={selectedTarget === checkbox}
                onChange={handleTargetChange}
              />{' '}
              {checkbox}
            </label>
            <button
              onClick={() => deleteCheckbox(index)}
              className="bg-red-500 text-white text-sm rounded-sm p-1 ml-2"
            >
              Delete
            </button>
          </div>
        ))}

        <button onClick={openModal} className="bg-green-500 mt-10 text-white rounded-sm text-sm">Add</button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-5 rounded-sm">
            <h2 className="text-sm mb-4">Add Item</h2>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            />
            <button onClick={closeModal} className="bg-blue-500 text-white text-sm rounded-sm p-2 mr-2">Add</button>
            <button onClick={() => setIsModalOpen(false)} className="bg-red-500 text-white text-sm rounded-sm p-2">Close</button>
          </div>
        </div>
      )}
    </div>

                  



                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium">Target Value</label>
                  <input
                    type="text"
                    value={target_value1}
                    onChange={(e) => settarget_value1(e.target.value)}
                    placeholder="Enter target value"
                    className="p-2 border rounded bg-gray-100  border-gray-100"
                  />
                </div>
              </div>
            </div>





            <button
              type="submit"
              className="mt-4 py-3 px-6 bg-darkslategray text-white bg-green-800 rounded-lg hover:bg-darkslategray/70"
            >
              Add to Team & Invite Agent
            </button>
          </form>
        </section>
      </div>
    </>

  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
