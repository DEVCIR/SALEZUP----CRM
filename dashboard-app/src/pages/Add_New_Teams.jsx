import FrameComponent2 from "../components/team/Team_Component_2";
import { Button } from "@mui/material";
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const Add_New_Teams = ({ className = "" }) => {


  const [campaignName, setCampaignName] = useState('');
  const [teamnName, setTeamName] = useState('');
  const [teamnLead, setTeamLead] = useState('');


  console.log("1", campaignName)
  console.log("2", teamnName)
  console.log("3", teamnLead)



  const register_teams = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!selectedOption.label || !checkedTeams || !selectedTeam.value) {
      alert('Please fill in all fields');
      return;
    }

    const payload = {
      name: selectedOption.label,
      team_name: checkedTeams,
      team_lead: selectedTeam.value
    };

    console.log("Payload to be sent:", payload);

    try {
      const response = await fetch('http://localhost:8000/api/campaign', {
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
      setCampaignName('');
      setTeamName('');
      setTeamLead('');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };


  const [team, setTeam] = useState('');
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    // Fetching teams data from the API
    axios.get('http://localhost:8000/api/team_leaders')
      .then(response => {
        setTeams(response.data);
      })
      .catch(error => {
        console.error('Error fetching the teams:', error);
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
    label: team.name
  }));


  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: '1', label: '3 Mobile' },
    { value: '2', label: 'Lipton' },
    { value: '3', label: 'Coca Cola' },
  ];

  const handleCampaignChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(selectedOption)
  };

  const [checkedTeams, setCheckedTeams] = useState([]);
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://localhost:8000/api/teams')
      .then(response => {
        // Assuming the API returns an array of team objects with 'id' and 'name' properties
        const teams = response.data.map(team => ({
          id: team.id,
          name: team.team_name
        }));
        setTeamList(teams);
        console.log(teams)
      })
      .catch(error => {
        console.error('Error fetching team data:', error);
      });
  }, []);

  const handleTeamCheckboxChange = (teamId, teamName) => {
    setCheckedTeams((prevSelectedTeams) => {
      const teamIndex = prevSelectedTeams.findIndex(team => team.value === teamId);

      if (teamIndex !== -1) {
        // If team is already selected, remove it
        const updatedTeams = [...prevSelectedTeams];
        updatedTeams.splice(teamIndex, 1);
        return updatedTeams;
      } else {
        // If team is not selected, add it
        return [...prevSelectedTeams, { value: teamId, label: teamName }];
      }
    });
  };

  useEffect(() => {
    console.log(JSON.stringify(checkedTeams));
  }, [checkedTeams]);

  return (

    <div className="w-full relative bg-darkslategray overflow-hidden flex flex-row flex-wrap items-start justify-start pt-[19px] px-0 pb-0 box-border leading-[normal] tracking-[normal] [row-gap:20px]">
      <div className="h-[1180px] w-[1434px] relative bg-darkslategray hidden max-w-full" />
      <main className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[710px] max-w-full mq750:min-w-full">
        <section className="self-stretch rounded-tl-21xl rounded-tr-none rounded-b-none bg-white flex flex-col items-start justify-start pt-[22px] pb-[236px] pr-[33px] pl-[47px] box-border gap-[70px] max-w-full z-[1] text-left text-13xl text-black font-nunito mq750:gap-[17px] mq750:pb-[99px] mq750:box-border mq1125:gap-[35px] mq1125:pl-[23px] mq1125:pt-5 mq1125:pb-[153px] mq1125:box-border">
          <form onSubmit={register_teams}>
          <div className="w-[1093px] h-[1159px] relative rounded-tl-21xl rounded-tr-none rounded-b-none bg-white hidden max-w-full" />
          
          <div   className={`self-stretch  flex flex-col items-start justify-start pt-0 px-0 pb-[81px] box-border gap-[40px] max-w-full text-left text-13xl text-black font-nunito mq750:gap-[20px] mq450:pb-[53px] mq450:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[6px]">
        <a className="[text-decoration:none] w-[134px] relative leading-[38px] font-bold text-[inherit] inline-block z-[2] mq450:text-lgi mq450:leading-[23px] mq1050:text-7xl mq1050:leading-[30px] text-4xl">
          Teams
        </a>
        <div className="relative text-xl font-medium z-[2]">{`Manager > Teams > Add New Teams`}</div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-xl font-inter">
        <div className="flex-1 shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border flex flex-col items-start justify-start pt-[9px] px-[26px] pb-[52px] gap-[31px] max-w-full z-[2] border-t-[3.5px] border-solid border-silver-100 mq750:gap-[15px]">
          <div className="htaya h-[250.5px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border hidden max-w-full border-t-[3.5px] border-solid border-silver-100" />
          <h3 className="m-0 relative text-xl font-semibold font-inherit z-[3] mq450:text-base">
            Add New Team
          </h3>
          <div className="w-[931px] flex flex-col items-end justify-start gap-[21px] max-w-full text-base text-gray-100">
            <div className="flex flex-row items-start self-stretch justify-start max-w-full">
              <div className="w-[666px] flex flex-row items-end justify-start gap-[15px] max-w-full mq750:flex-wrap">
               
              <div className="self-stretch relative font-medium  text-black text-xl top-[-20px]  z-[3]">Campaign</div>
              <div className="self-stretch flex flex-row left-[-124px] top-[20px] pt-[15.3px] px-3 pb-[16.5px] relative z-[3] text-3xs text-black">
                     
              <input
              type="text"
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
              placeholder="Enter campaign name"
              
            />
                   </div>



                        <div className="self-stretch relative font-medium  text-black text-xl top-[-20px] z-[3]">Team Name</div>
                        {/* <div className="self-stretch flex flex-row left-[-124px] top-[20px] pt-[15.3px] px-3 pb-[16.5px] relative z-[3] text-3xs text-black">

                          <input
                            type="text"
                            value={teamnName}
                            onChange={(e) => setTeamName(e.target.value)}
                            placeholder="Enter team name"

                          />

                        </div> */}

                        <div className="self-stretch flex flex-col left-[-124px] top-[20px] pt-[15.3px] px-3 pb-[16.5px] relative z-[3] text-3xs text-black">
                          {teamList.map(team => (
                            <label key={team.id}>
                              <input
                                type="checkbox"
                                value={team.id}
                                checked={checkedTeams.some(selected => selected.value === team.id)}
                                onChange={() => handleTeamCheckboxChange(team.id, team.name)}
                              />
                              {team.name}
                            </label>
                          ))}
                        </div>

                        <div className="self-stretch relative font-medium  text-black text-xl top-[-20px]  z-[3]">Team Lead</div>

                        <div className="self-stretch flex flex-row left-[-124px] top-[20px] pt-[15.3px] px-3 pb-[16.5px] relative text-3xs text-black w-48 z-20">

                          <Select
                            value={selectedTeam}
                            onChange={handleChange}
                            options={teamOptions}
                            placeholder="Select TeamLead"
                            isClearable
                            className="z-20 w-48 p-2 bg-gray-100 rounded"
                          />
                        </div>


                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-[162px] h-10 z-[3]"
                      startIcon={<img width="20px" height="20px" src="/teams/plus.svg" />}
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "14",
                        background: "#013a2b",
                        border: "#013a2b solid 1px",
                        borderRadius: "8px",
                        "&:hover": { background: "#013a2b" },
                        width: 162,
                        height: 40,
                      }}
                    >
                      Add New Team
                    </Button>





                  </div>

                </div>

              </div>
            </div>

          </form>

        </section>


      </main>

      <div className="h-[170px] w-[931px] relative shadow-[0px_9px_5.4px_-2px_rgba(0,_0,_0,_0.13)] rounded-[7.81px] bg-whitesmoke-100 hidden max-w-full" />
      <div className="h-px w-[932px] relative box-border hidden max-w-full border-t-[1px] border-solid border-silver-200" />
      <div className="h-px w-[932px] relative box-border hidden max-w-full border-t-[1px] border-solid border-silver-200" />
      <div className="h-px w-[932px] relative box-border hidden max-w-full border-t-[1px] border-solid border-silver-200" />
    </div>
  );
};

export default Add_New_Teams;