import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import {Button1} from "."
import { userProfileData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar.jpg";

import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const { currentColor } = useStateContext();

  const navigate = useNavigate();

  const userFname = localStorage.getItem('userFName');

  const userLname = localStorage.getItem('userLName');

  const userEmail = localStorage.getItem('userEmail');



  const handleLogoutClick = () => {
    console.log("user loging out ");

    navigate('/admin_login')

    
  };


  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D]  p-8 rounded-lg w-96">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex items-center gap-5 pb-6 mt-6 border-color border-b-1">
        <img
          className="w-24 h-24 rounded-full"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="text-xl font-semibold dark:text-white ">
            {" "}
            {userFname+" "+userLname}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {" "}
            Administrator{" "}
          </p>
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
            {" "}
           {userEmail}
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="p-3 text-xl rounded-lg hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
          onClick={handleLogoutClick}
          className="w-full p-3 font-bold tracking-wider text-white bg-green-800 rounded-md hover:bg-black hover:text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;