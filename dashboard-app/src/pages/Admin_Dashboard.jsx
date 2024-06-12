"use client";
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RiHome2Fill, RiBarChart2Fill, RiFileList3Fill, RiSettings3Fill, RiQuestionFill } from 'react-icons/ri';
import NewSidebar from '../components/NewSidebar';
import Team from './Team';
import Commision_Management from './Commission_Management';
import Individual from './Individual';
import Leaderboard from './Leaderboard';
import SaleAgents from './Sales_Agent';
import TeamLeaders from './Teamleaders';
import DashboardManager from './Main_Dashboard';
// import { Sidebar } from "flowbite-react";
// import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

export default function Admin_Dashboard() {
    const [currentPage, setCurrentPage] = useState('Individual');
    const location = useLocation();
    const loggedInUserEmail = location.state ? location.state.loggedInUserEmail : null;
    const name = loggedInUserEmail ? loggedInUserEmail.split('@')[0] : '';
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPageContent = () => {
        switch (currentPage) {
            case 'Home':
                return <div className='h-fit'>adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores facere illo distinctio neque ut exercitationem nam, voluptatum earum quaerat culpa voluptate doloremque minima aut. Consequuntur dolorem voluptatum sed quis, ad tenetur vero illo maxime atque possimus harum, repudiandae natus sit minima culpa hic, assumenda itaque deserunt. Iste, nulla expedita adipisci tenetur illum eius eveniet voluptatum, repellat deleniti recusandae, veritatis repudiandae! Error dolores debitis modi reiciendis optio rerum commodi natus ipsa quo velit aliquid nulla, eligendi ducimus. Quaerat, quos id.
                </div>;
            
            case 'Commission Management':
                return <div className='bg-white'><Commision_Management/></div>;
            case 'Individual':
                return <div className='bg-white'><Individual/></div>;
            case 'Leaderboard':
                return <div className='bg-white'><Leaderboard/></div>;
            case 'SalesAgent':
                return <div className='bg-white'><SaleAgents/></div>;
            case 'Teams':
                return <div className='bg-white'><Team/></div>;
            case 'TeamLeaders':
                return <div className='bg-white'><TeamLeaders/></div>;
            case 'Main_Dashboard':
                return <div><DashboardManager /></div>;
            default:
                return <div>Page not found.</div>;
        }
    };

    return (
        <div className="flex bg-[#072D20] ahsan">
            {/* Aside Menu */}
            <NewSidebar setCurrentPage={setCurrentPage} />
            {/* Main Content Area */}
            <main className="basis-[80%] mt-10 p-4 bg-gray-200 w-[81%] h-fit rounded-tl-3xl">{renderPageContent()}</main>
        </div>
    );
};



