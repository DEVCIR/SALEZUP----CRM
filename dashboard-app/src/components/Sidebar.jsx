import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// import logo from "./assets/logo.svg"
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-black  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md hover:bg-gray-300/20  dark:hover:bg-gray-400/20  m-2";

  function replaceUnderscoreWithSpace(str) {
    return str.replace(/_/g, ' ');
  }

  return (
    <div className="pb-10 h-screen overflow-auto bg-[#072D20] hover:dark:text-black md:overflow-hidden md:hover:overflow-auto">
      {activeMenu && (
        <>
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="flex items-center gap-3 mt-4 ml-3 text-xl font-extrabold tracking-tight text-white "
            >
              <img src={"/logo-img.jpg"} alt="logo" className="w-[90%] mx-auto rounded" />
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="block p-3 mt-4 text-xl text-black rounded-full  md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="m-3 mt-4 text-gray-400 uppercase dark:text-gray-400">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <p className="text-white dark:text-white hover:text-black dark:hover:text-yellow-200">{link.icon} </p>
                    <span className="capitalize text-white dark:text-white">{replaceUnderscoreWithSpace(link.name)}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
