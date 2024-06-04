import React from "react";

import { useStateContext } from "../contexts/ContextProvider";

import { useNavigate } from 'react-router-dom';

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width
}) => {
  const { setIsClicked, initialState } = useStateContext();

  const navigate = useNavigate();


  const handleLogoutClick = () => {
    console.log("user loging out ");

    navigate('/admin_login')


  };

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;