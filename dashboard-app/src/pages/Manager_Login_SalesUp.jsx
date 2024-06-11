
import { Button } from "@mui/material";


import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaMoon, FaSun } from 'react-icons/fa';
import CryptoJS from 'crypto-js';
import { useAdminContext } from "../contexts/AdminContextProvider";



const Manager_Login_SalesUp = () => {

  const navigate = useNavigate();

  const { setIsAdminLoggedIn } = useAdminContext();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);


  const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/admin-registrations');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        const filteredData = data.map(({ email, password, first_name, last_name }) => ({ email, password, first_name, last_name }));
        setFilteredData(filteredData);
        return filteredData; // Return the filtered data for immediate use
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to handle it in handleLogin
    }
};
const handleLogin = async (e) => {
  e.preventDefault();

  try {
      const filteredData = await fetchData(); // Wait for fetchData to complete and get the data

      const foundUser = filteredData.find(user => user.email === username);

      if (foundUser) {
          // Decrypt the stored password
          const decryptedPassword = CryptoJS.AES.decrypt(foundUser.password, 'DBBDRSSR54321').toString(CryptoJS.enc.Utf8);

          // Compare the decrypted password with the user-entered password
          if (password === decryptedPassword) {
              console.log("Decrypted Password: ", decryptedPassword);
              console.log("----  Right User ----");
              console.log("my user: ", foundUser);
              // Redirect or perform other actions upon successful login
              navigate('/Admin_Dashboard', { state: { foundUser } });
              // Use local storage to transfer variable value from one to another
              localStorage.setItem('userEmail', foundUser.email);
              localStorage.setItem('userFName', foundUser.first_name);
              localStorage.setItem('userLName', foundUser.last_name);
              console.log("This is my email: ", foundUser.email);
              setIsAdminLoggedIn(true);
          } else {
              console.log("----  Wrong Password  ----");
              alert("Wrong Password !!! Try Again");
          }
      } else {
          console.log("User not found");
          alert("User not found");
      }
  } catch (error) {
      console.error('Error during login process:', error);
      alert("An error occurred during the login process. Please try again.");
  }
};



const togglePasswordVisibility = () => {
  setIsPasswordVisible(prevState => !prevState);
};

const toggleTheme = () => {
  setIsDarkMode(prevMode => !prevMode);
};






  return (

   <div
      className={"flex flex-row items-center justify-center pb-[100px]  pr-2.5 pl-[9px] box-border w-[40%] ml-auto mr-auto"}
    >
      <div className="flex flex-row items-center justify-center flex-1 ml-auto mr-auto">
        <form  className="m-0 mt-24 flex-[0.8933] shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)]  rounded-16xl bg-white box-border flex flex-col items-start justify-start pt-[46px] px-6 pb-[128.2px] gap-[37px] min-w-[292px] max-w-full z-[2] border-t-[3.5px] border-solid border-gray-200 mq450:gap-[18px] mq450:flex-1 mq750:pt-[30px] mq750:pb-[83px] mq750:box-border" action="handleLogin()">
          <div className="w-[450px] h-[610.5px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border hidden max-w-full border-t-[3.5px] border-solid border-gray-200" />
          <div className="flex flex-row items-start self-stretch justify-center px-0 pt-0 pb-5">
            <img
              className="h-[55px] w-[226px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/whatsapp-image-20240405-at-2112-6@2x.png"
            />
          </div>
        
        
        
          <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
           
          <div className="self-stretch flex flex-col items-start justify-start gap-[13.1px]">
              <div className="w-[212px] relative text-base font-medium font-inter text-gray text-left inline-block z-[1]">
                Email
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[15.2px] px-3 pb-[16.6px] relative z-[1]">
              <input
                                                    
                                                  
                                                    className="h-full border border-gray-200 bg-gray-200 w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5.99px] max-w-full overflow-hidden max-h-full"
                                                    placeholder="Enter you Email"
                                                    type="text"
                                                    value={username} 
                                                    onChange={(e) => setUsername(e.target.value)} 
                                                    required
                                                />
                                              
              </div>
            </div>

            
           
            <div className="self-stretch flex flex-col items-start justify-start gap-[13.1px]">
              
              <div className="w-[212px] relative text-base font-medium font-inter text-gray text-left inline-block z-[1]">
                Password
              </div>

              <div className="self-stretch flex flex-row items-start justify-start pt-[15.2px] px-3 pb-[16.6px] relative z-[1]">

              <input
                                                    type={isPasswordVisible ? "text" : "password"}
                                                    name="password"
                                                    className="h-full w-full border-gray-200 bg-gray-200  absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5.99px] max-w-full overflow-hidden max-h-full"
                                                    placeholder="Password"
                                                    required
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <button type="button" className="absolute top-2.5 right-2 bg-transparent hover:bg-transparent" onClick={togglePasswordVisibility}>
                                                    {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                                </button>
              </div>
            </div>


          </div>

         
          




          <div className="self-stretch flex flex-row  items-start justify-start py-0 pr-[7px] pl-px box-border max-w-full">
            
            <Button
              className="h-[47.8px]  flex-1 max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
              type="submit"
              onClick={handleLogin}
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#346155",
                borderRadius: "9.01px",
                "&:hover": { background: "#346155" },
                height: 47.8,
              }}
            >
              Login
            </Button>
          </div>


        </form>

      </div>
    </div>
         

   




  

    
  );
};



export default Manager_Login_SalesUp;
