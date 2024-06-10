import React from 'react'
import { links } from "../data/dummy";

function replaceUnderscoreWithSpace(str) {
    return str.replace(/_/g, ' ');
}

const NewSidebar = ({setCurrentPage}) => {
    return (
        <>
            <div class="h-screen basis-[20%] antialiased bg-[#072D20] text-white">
                <div class="fixed flex flex-col top-0 left-0 w-72 bg-[#072D20] h-full">
                    <div class="flex items-center justify-center m-5">
                        <img
                            src={"/logo.png"}
                            alt="SALEZUP Logo"
                            className="mx-auto border-2 border-white w-[200px]"
                        />
                    </div>
                    <div class="flex mx-auto flex-col gap-2 items-center w-fit h-fit justify-center m-4">
                        <img
                            src={"/image.png"}
                            alt="Picture"
                            className="mx-auto w-[100px] h-[100px] rounded-full border-2 border-white bg-gray-100"
                        />
                        <h1 className="font-extrabold text-3xl text-[#00FFCF]">Manager</h1>
                    </div>
                    <div class="overflow-y-auto overflow-x-hidden flex-grow">
                        <ul class="flex flex-col py-4 space-y-1">
                            {links.map((link, index) => (
                                <li key={index} className=''>
                                    <div class="flex flex-row items-center h-8 px-5">
                                        <div class="text-md font-light tracking-wide text-gray-50">{link.title}</div>
                                    </div>
                                    {link.links.map((sublink, index) => (
                                        <li key={index}>
                                            <a onClick={()=>{setCurrentPage(sublink.name)}} class="cursor-pointer relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#222926] text-white border-l-4 border-transparent hover:border-[#00FFCF]">
                                                <span class="inline-flex justify-center items-center ml-4">
                                                    {sublink.icon}
                                                </span>
                                                <span class="ml-2 text-sm tracking-wide truncate">{replaceUnderscoreWithSpace(sublink.name)}</span>
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
        </>
    )
}

export default NewSidebar