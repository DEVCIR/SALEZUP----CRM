import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Button } from ".";
import { userProfileData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar.jpg";
import { useNavigate } from 'react-router-dom';
import { useAdminContext } from "../contexts/AdminContextProvider";

const UserProfile = () => {
  const { currentColor } = useStateContext();
  const navigate = useNavigate();
  const userFname = localStorage.getItem('userFName');
  const userLname = localStorage.getItem('userLName');
  const userEmail = localStorage.getItem('userEmail');
  const { setIsAdminLoggedIn } = useAdminContext();

  const handleLogoutClick = () => {
    console.log("user loging out ");
    setIsAdminLoggedIn(false);
    navigate('/admin_login')
  };
  return (
    <div className="nav-item absolute top-16 border-2 border-[#42464D] bg-white dark:bg-[#42464D] p-4 md:p-8 rounded-lg md:w-96">
      <div className="flex items-center justify-between ">
        <p className="text-md md:text-lg font-semibold dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex items-center flex-col md:flex-row gap-2 pb-6 mt-6 border-b-1">
        <img
          className="w-12 h-12 md:w-24 md:h-24 rounded-full"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="text-md md:text-xl font-semibold dark:text-white ">
            {" "}
            {userFname + " " + userLname}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {" "}
            Administrator{" "}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {" "}
            {userEmail}
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer dark:hover:bg-[#42464D]"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="p-3 hidden md:block text-xl rounded-lg hover:bg-light-gray"
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
          className="w-full p-2 font-bold text-white bg-green-900 rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;