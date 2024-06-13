import React, { useEffect, useState } from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { IoPeopleSharp, IoRocketOutline, IoPerson } from "react-icons/io5";
// import { PiHandCoinsFill } from "react-icons/pi";
import { FaArrowRight, FaGift } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { IoIosHelpCircle } from "react-icons/io";
// import { links } from "../data/dummy";
import { RiArrowDropDownLine } from "react-icons/ri";


function replaceUnderscoreWithSpace(str) {
    return str.replace(/_/g, ' ');
}

const NewSidebar = ({ setCurrentPage }) => {
    const [isLinkExpanded, setIsLinkExpanded] = useState({
        dashboard: false,
        saleAgents: false,
        commissionManagement: false,
        teams: false,
        setContest: false,
        prize: false,
        summary: false,
        help: false,
    });

    const links = [
        {
            parent: "Dashboard",
            name: "dashboard",
            icon: <MdOutlineDashboard />,
        },
        {
            parent: "Sale Agents",
            name: "saleAgents",
            icon: <IoPerson />,
            children: [
                { name: "Current Agents", link: "SalesAgent" },
                { name: "Add New Agent", link: "Add_New_Agent" },
                { name: "Pending Requests", link: "Pending_Request" },
                { name: "Current_Team_Leader", link: "Current_Team_Leader" },
                { name: "Add_New_Team_Leader", link: "Add_New_Team_Leader" },
                { name: "Pending_Request_Team_Leader", link: "Pending_Request_Team_Leader" },
            ],
        },
        {
            parent: "Commission Management",
            name: "CommissionManagement",
            icon: <IoIosHelpCircle />,
            link: "Commission_Management"
        },
        {
            parent: "Teams",
            name: "teams",
            icon: <IoPeopleSharp />,
            children: [
                { name: "Add_New_Teams", link: "Add_New_Teams" },
                { name: "Current_Teams", link: "Current_Teams" },
                { name: "Pending_Teams", link: "Pending_Teams" },
            ],

        },
        {
            parent: "Set Contest",
            name: "setContest",
            icon: <IoRocketOutline />,

        },
        {
            parent: "Prize",
            name: "prize",
            icon: <FaGift />,
        },
        {
            parent: "Summary",
            name: "summary",
            icon: <CgNotes />,
        },
        {
            parent: "Help",
            name: "help",
            icon: <IoIosHelpCircle />,
        },
    ];

    const [isOpen, setIsOpen] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 480) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };
        handleResize();
        // Add resize event listener
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!isOpen) return (
        <div className="bg-[#072D20] fixed z-50 text-white text-2xl cursor-pointer w-fit my-3 p-3 flex items-center rounded-tr-md rounded-br-md" onClick={() => setIsOpen((prev) => !prev)}>
            <FaArrowRight className='inline my-auto' />
        </div>
    );

    return (
        <main className='duration-100 bg-[#072D20]'>
            <div class="h-screen antialiased text-white">
                <div class="flex flex-col w-72 h-full">
                    <div className="text-white text-2xl p-3 cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}>
                        <FaArrowRight className='inline rotate-180' />
                    </div>
                    <div class="flex items-center justify-center m-5">
                        <img
                            src={"/logo.png"}
                            alt="SALEZUP Logo"
                            className="mx-auto border-2 border-white w-[200px]"
                        />
                    </div>
                    <div class="flex mx-auto flex-col gap-2 items-center w-fit h-fit justify-center m-4">
                        <img
                            src={"/person-image.png"}
                            alt="Picture"
                            className="mx-auto w-[100px] h-[100px] rounded-full border-2 border-white bg-white"
                        />
                        <h1 className="font-extrabold text-3xl text-[#00FFCF]">Manager</h1>
                    </div>
                    <div class="overflow-y-auto overflow-x-hidden">
                        <ul class="flex flex-col py-4 space-y-1">
                            {links.map((link, index) => (
                                <li key={index} className='py-1'>
                                    <div
                                        className="flex flex-row items-center cursor-pointer h-8 px-5"
                                        onClick={() => {
                                            if (link.children) {
                                                setIsLinkExpanded({ ...isLinkExpanded, [link.name]: !isLinkExpanded[link.name] });
                                            } else {
                                                setCurrentPage(link.link);
                                            }
                                        }}
                                    >
                                        <span className='mr-2'>{link.icon}</span>
                                        <div className="text-md font-light tracking-wide text-gray-50 flex flex-row justify-between w-full">
                                            <li>
                                                {link.parent}
                                            </li>
                                            <li>
                                                {link.children && <span className="ml-2">{isLinkExpanded[link.name] ? <RiArrowDropDownLine className='inline rotate-180 text-3xl' /> : <RiArrowDropDownLine className='inline text-3xl' />}</span>}
                                            </li>
                                        </div>
                                    </div>
                                    {link.children && link.children.map((sublink, subIndex) => (
                                        <li key={subIndex} className={isLinkExpanded[link.name] ? "block" : "hidden"}>
                                            <a
                                                onClick={() => { setCurrentPage(sublink.link) }}
                                                className="flex bg-[#222926] cursor-pointer relative flex-row items-center h-11 focus:outline-none hover:bg-[#222926] text-white border-l-4 border-transparent hover:border-[#00FFCF]"
                                            >
                                                <span className="ml-12 text-sm tracking-wide truncate">{replaceUnderscoreWithSpace(sublink.name)}</span>
                                            </a>
                                        </li>
                                    ))}
                                </li>
                            ))}

                            <li>
                                <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#222926] text-white border-l-4 border-transparent hover:border-[#00FFCF] pr-6">
                                    <span class="inline-flex justify-center items-center ml-4">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    </span>
                                    <span class="ml-2 text-sm tracking-wide truncate">Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#222926] text-white border-l-4 border-transparent hover:border-[#00FFCF] pr-6">
                                    <span class="inline-flex justify-center items-center ml-4">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </span>
                                    <span class="ml-2 text-sm tracking-wide truncate">Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#222926] text-white border-l-4 border-transparent hover:border-[#00FFCF] pr-6">
                                    <span class="inline-flex justify-center items-center ml-4">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                    </span>
                                    <span class="ml-2 text-sm tracking-wide truncate">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NewSidebar

