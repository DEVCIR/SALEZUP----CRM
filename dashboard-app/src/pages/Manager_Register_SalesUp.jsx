
import { Button } from "@mui/material";
import UsernameLabel from "../components/Manager_Register/UsernameLabel";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaMoon, FaSun } from 'react-icons/fa';
import bcrypt from "bcryptjs";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import axios from "axios";


const Manager_Register_SalesUp = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (password !== confirmpassword) {
    //     console.error("Password and confirm password do not match");
    //     return;
    // }
    try {
      const encryptedPassword = CryptoJS.AES.encrypt(password, 'DBBDRSSR54321').toString();
      const formData = {
        first_name: firstname,
        last_name: lastname,
        email: email,
        password: encryptedPassword,
        // password_confirmation: encryptedPassword
      };
      const response = await axios.post("http://localhost:8000/api/admin-registrations", formData);
      console.log("Registration successful:", response.data);
      navigate('/manager_login')
    } catch (error) {
      console.error("Error registering user:", error);
    }
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const togglePasswordVisibility1 = () => {
    setIsPasswordVisible1(!isPasswordVisible1);
  };

  const handleLoginButton = async (e) => {
    e.preventDefault()
    navigate('/manager_login')
  }

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className={"flex flex-row items-center justify-center py-0 pr-2.5 pl-[9px] box-border w-[40%] ml-auto mr-auto"}
      >
        <div className="flex flex-row items-center justify-center flex-1 ml-auto mr-auto">
          <form className="self-stretch shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border flex flex-col items-start justify-start pt-1.5 px-6 pb-16 gap-[48.1px] max-w-full z-[2] border-t-[3.5px] border-solid border-silver mq450:gap-[24px] mq750:pt-5 mq750:pb-[72px] mq750:box-border">
            <div className="w-[450px] h-[610.5px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border hidden max-w-full border-t-[3.5px] border-solid border-silver" />
            <div className="self-stretch flex flex-col items-end justify-start gap-[25px]">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
                <img
                  className="h-[55px] w-[226px] relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/whatsapp-image-20240405-at-2112-6@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[13.1px]">
                <div className="w-[212px] relative text-base font-medium font-inter text-gray text-left inline-block z-[1]">
                  Username
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-[15.2px] px-3 pb-[16.6px] relative z-[1]">
                  <input
                    className="h-full border border-gray-200 bg-gray-200 w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5.99px] max-w-full overflow-hidden max-h-full"
                    placeholder="Enter you Name"
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[13.1px]">
                <div className="w-[212px] relative text-base font-medium font-inter text-gray text-left inline-block z-[1]">
                  Email
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-[15.2px] px-3 pb-[16.6px] relative z-[1]">
                  <input
                    className="h-full border border-gray-200 bg-gray-200 w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5.99px] max-w-full overflow-hidden max-h-full"
                    placeholder="Enter you Email"
                    type="text"
                    value={email} onChange={(e) => setEmail(e.target.value)} required
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[13.1px]">
                <div className="w-[212px] relative text-base font-medium font-inter text-gray text-left inline-block z-[1]">
                  Password
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-[15.2px] px-3 pb-[16.6px] relative z-[1]">
                  <input
                    className="h-full border border-gray-200 bg-gray-200 w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5.99px] max-w-full overflow-hidden max-h-full"
                    placeholder="Enter you Password"
                    type="text"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute text-black top-2 right-4 bg-transparent hover:bg-transparent"
                    onClick={togglePasswordVisibility}>
                    {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-1 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[7.1px] max-w-full">
                  <div className="w-[360.3px] flex flex-row items-start justify-start py-0 px-[17px] box-border max-w-full">
                    <img
                      className="h-[8.9px] flex-1 relative max-w-full overflow-hidden z-[1]"
                      loading="lazy"
                      alt=""
                      src="/by-clicking-create-account-you-agree-to-ourterms-and-privacy-policy.svg"
                    />
                  </div>
                  <Button
                    className="w-full h-[47.8px] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
                    disableElevation
                    variant="contained"
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
                    Create Account
                  </Button>
                </div>
              </div>
              <div className="mx-auto text- mt-3">
                Already Registered ? <Link to="/admin_login" className="text-[#346155] font-bold">Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Manager_Register_SalesUp;
