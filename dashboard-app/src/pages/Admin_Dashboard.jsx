"use client";
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RiHome2Fill, RiBarChart2Fill, RiFileList3Fill, RiSettings3Fill, RiQuestionFill } from 'react-icons/ri';
import NewSidebar from '../components/NewSidebar';
// import { Sidebar } from "flowbite-react";
// import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

export default function Admin_Dashboard() {
    const [currentPage, setCurrentPage] = useState('Home');
    const location = useLocation();
    const loggedInUserEmail = location.state ? location.state.loggedInUserEmail : null;
    const name = loggedInUserEmail ? loggedInUserEmail.split('@')[0] : '';
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPageContent = () => {
        switch (currentPage) {
            case 'Home':
                return <div className='h-fit'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id. 
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id.
                </div>;
            case 'Analytics':
                return <div className='bg-yellow-500'>This is the Analytics page content.</div>;
            case 'Reports':
                return <div className='bg-teal-500'>This is the Reports page content.</div>;
            case 'Settings':
                return <div className='bg-orange-300'>This is the Settings page content.</div>;
            case 'Help':
                return <div>This is the Help page content.</div>;
            default:
                return <div>Page not found.</div>;
        }
    };

    return (
        <div className="flex bg-[#072D20]">
            {/* Aside Menu */}
            <NewSidebar />
            {/* Main Content Area */}
            <main className="absolute left-[288px] top-[80px] p-4 bg-gray-200 rounded-tl-3xl h-fit">{renderPageContent()}</main>
        </div>
    );
};



// <aside className="w-64 p-4 text-white bg-[#072D20]">
//                 <div className="text-center mb-4 mt-8">
//                     <img
//                         src="https://s3-alpha-sig.figma.com/img/62b2/de86/3e5c02d1c4d27a7ec3537a08183734bc?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DMYG1PgxzsvNT6usLqPgm~WZIyOqVLPhSKWICK6oTG72-22VvbioUrAgmR8ow4VGwGYOsjor3t3S2ucB81pYNEGPL489dm2SR3w2Ua~QEEv8b3qG-rqAIreHu2cdc3zZu7YSThVsVLuXR7MgUwlHGgKqM0JhZ~s~ehfaBdZxKog8N8Buyusk4GooeEXeLg4NiIZPFPTwfzB7SesiJx27I9LOsevEjpyQLS7IC-nOqaDqkRKyxqDJBmQiOvA1WqV7Xgfw5V9kNynR5Pog3QNeMCUMPPDI3NgFw1qYOXU3X-07i203tUwZ4nyf0PCzqz-M~GDt03IS--xxi3M8vbhZMQ__"
//                         alt="Sales Agent"
//                         className="w-24 h-24 mx-auto rounded-full border-2 border-white"
//                     />
//                     {/* <p className="mt-2">{loggedInUserEmail}</p> */}
//                     <br></br>
//                     <p className="mt-2 text-2xl">Hello,{name}</p>

//                 </div>


//                 <nav>
//                     <ul className='mt-16'>
//                         <li
//                             className={`flex items-center mt-6 font-semibold cursor-pointer hover:text-black px-4 py-2 text-white hover:bg-[#97a5a0] rounded-lg  focus:bg-[#97a5a0] focus:text-black focus:font-semibold dark:text-gray-200 ${currentPage === 'Home' ? 'text-white' : ''
//                                 }`}
//                             onClick={() => handlePageChange('Home')}
//                         >
//                             <RiHome2Fill className="mr-2 text-2xl" />
//                             <span className="text-2xl ml-2">Home</span>

//                         </li>
//                         <br></br>
//                         <li
//                             className={`flex items-center mt-6 font-semibold cursor-pointer hover:text-black px-4 py-2 text-white hover:bg-[#97a5a0] rounded-lg  focus:bg-[#97a5a0] focus:text-black focus:font-semibold dark:text-gray-200 ${currentPage === 'Analytics' ? 'text-white' : ''
//                                 }`}
//                             onClick={() => handlePageChange('Analytics')}
//                         >
//                             <RiBarChart2Fill className="mr-2 text-2xl" />
//                             <span className="text-2xl ml-2">Analytics</span>


//                         </li>
//                         <br></br>
//                         <li
//                             className={`flex items-center mt-6 font-semibold cursor-pointer hover:text-black px-4 py-2 text-white hover:bg-[#97a5a0] rounded-lg  focus:bg-[#97a5a0] focus:text-black focus:font-semibold dark:text-gray-200 ${currentPage === 'Reports' ? 'text-white' : ''
//                                 }`}
//                             onClick={() => handlePageChange('Reports')}
//                         >
//                             <RiFileList3Fill className="mr-2 text-2xl" />
//                             <span className="text-2xl ml-2">Reports</span>

//                         </li>
//                         <br></br>
//                         <li
//                             className={`flex items-center mt-6 font-semibold cursor-pointer hover:text-black px-4 py-2 text-white hover:bg-[#97a5a0] rounded-lg  focus:bg-[#97a5a0] focus:text-black focus:font-semibold dark:text-gray-200 ${currentPage === 'Settings' ? 'text-white' : ''
//                                 }`}
//                             onClick={() => handlePageChange('Settings')}
//                         >
//                             <RiSettings3Fill className="mr-2 text-2xl" />
//                             <span className="text-2xl ml-2">Settings</span>

//                         </li>
//                         <br></br>
//                         <li
//                             className={`flex items-center mt-6 font-semibold cursor-pointer hover:text-black px-4 py-2 text-white hover:bg-[#97a5a0] rounded-lg  focus:bg-[#97a5a0] focus:text-black focus:font-semibold dark:text-gray-200 ${currentPage === 'Help' ? 'text-white' : ''
//                                 }`}
//                             onClick={() => handlePageChange('Help')}
//                         >
//                             <RiQuestionFill className="mr-2 text-2xl" />
//                             <span className="text-2xl ml-2">Help</span>

//                         </li>
//                     </ul>
//                 </nav>


// </aside>