import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { useStateContext } from "../contexts/ContextProvider";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";
import { useAdminContext } from "../contexts/AdminContextProvider";

export default function Page1() {
    const navigate = useNavigate();


    const {
        setCurrentColor,
        setCurrentMode,
        currentMode,
        activeMenu,
        currentColor,
        themeSettings,
        setThemeSettings,
    } = useStateContext();

    useEffect(() => {
        const currentThemeColor = localStorage.getItem("colorMode");
        const currentThemeMode = localStorage.getItem("themeMode");
        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);
        }
    }, []);

    useEffect(() => {
        // Fetching competition calender data
        // Fetching competition data
        // Fetching badge data
        fetch('https://crmapi.devcir.co/api/badges')
            .then(response => response.json())
            .then(data => setBadgeData(data))
            .catch(error => console.error('Error fetching badge data:', error));
        // Fetching admin data
        fetch('https://crmapi.devcir.co/api/admin-registrations')
            .then(response => response.json())
            .then(data => setAdminData(data))
            .catch(error => console.error('Error fetching admin data:', error));
        // Fetching sales agent data
        //   fetch('https://crmapi.devcir.co/api/sales-agents')
        //       .then(response => response.json())
        //       console.log(response)
        //       .then(data => setSalesAgentData(data))
        //       .catch(error => console.error('Error fetching sales agent data:', error));
        fetch('https://crmapi.devcir.co/api/sales-agents')
            .then(response => {
                console.log(response); // Logs the raw response object
                return response.json();
            })
            .then(data => {
                console.log(data); // Logs the parsed JSON data
                setSalesAgentData(data);
            })
            .catch(error => console.error('Error fetching sales agent data:', error));
        // Fetching sales officer data
        fetch('https://crmapi.devcir.co/api/sales-officers')
            .then(response => response.json())
            .then(data => setSalesOfficerData(data))
            .catch(error => console.error('Error fetching sales officer data:', error));
    }, []);

    const [adminData, setAdminData] = useState([]);
    const [salesAgentData, setSalesAgentData] = useState([]);
    const [salesOfficerData, setSalesOfficerData] = useState([]);
    const [badgeData, setBadgeData] = useState([]);

    const RenderTable_agent = (data, isSalesData) => {
        const [selectedRow, setSelectedRow] = useState(null);
        //  ---------------------------------- DELETE BUTTON LOGIC ------------------------------------//
        const handleDelete_agent = () => {
            if (!selectedRow) return;

            const id = selectedRow.id;
            fetch(` https://crmapi.devcir.co/api/sales-agents/${id}`, {
                method: 'DELETE'
            })
                .then(response => {
                    if (response.ok) {
                        console.log('Record deleted successfully');
                        window.location.reload();
                    } else {
                        console.error('Failed to delete record');
                    }
                })
                .catch(error => {
                    console.error('Network error:', error);
                });
        };
        // ------------------------------------------- APPROVE BUTTON LOGIC --------------------------------------------//
        const handleApprove_agent = () => {
            if (!selectedRow) return;

            const id = selectedRow.id;
            const updatedData = { ...selectedRow, status: 'approved' }; // Update status to 'approved'
            fetch(` https://crmapi.devcir.co/api/sales-agents/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            })
                .then(response => {
                    if (response.ok) {
                        console.log('Record status updated to approved successfully');
                        window.location.reload();


                    } else {
                        console.error('Failed to update record status');
                    }
                })
                .catch(error => {
                    console.error('Network error:', error);
                });
        };
        const handleEditClick = (id, firstName, rowData) => {
            setSelectedRow({ id, firstName, ...rowData });
        };
        return (
            <>
                <div className="container mx-auto">
                    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                        <div className="overflow-x-auto"></div>
                        <table className="min-w-full">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <thead>
                                <tr className="text-white bg-[#305b4c] dark:bg-[#072D20]">
                                    {/* <th className="px-4 py-2 text-center  text-white bg-[#535454] border-r border-white">ID</th> */}
                                    <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">First Name</th>
                                    <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Last Name</th>
                                    <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Email</th>
                                    <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Password</th>
                                    <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Status</th>
                                    <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        {/* <td className="px-4 py-2 text-center text-black border border-black">{item.id}</td> */}
                                        <td className="px-4 py-2 text-center text-black border border-[#072D20]">{item.first_name}</td>
                                        <td className="px-4 py-2 text-center text-black border border-[#072D20]">{item.last_name}</td>
                                        <td className="px-4 py-2 text-center text-black border border-[#072D20]">{item.email}</td>
                                        <td className="px-4 py-2 text-center text-black border border-[#072D20]">{CryptoJS.AES.decrypt(item.password, 'DBBDRSSR54321').toString(CryptoJS.enc.Utf8)}</td>
                                        {/* {!isSalesData && <td className="px-4 text-center text-black border border-black">{item.status}</td>} */}
                                        {!isSalesData && <td className={`px-4 py-2  text-center text-black border border-[#072D20] ${item.status === 'pending' ? 'bg-red-600 text-white font-bold' : 'bg-green-600 text-white font-bold'}`}>{item.status}</td>}
                                        {!isSalesData && (
                                            <td className="px-4 py-2 text-center border border-[#072D20]">
                                                <label className="bg-[#072D20] btn border border-white" htmlFor="modal-1" onClick={() => handleEditClick(item.id, item.first_name, item)}>
                                                    Edit Details
                                                </label>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Popup or modal */}
                {
                    selectedRow && (
                        <div >
                            <input className="modal-state" id="modal-1" type="checkbox" />
                            <div className=" modal">
                                <label className=" modal-overlay" htmlFor="modal-1"></label>
                                {/* <div className="flex flex-col gap-6 modal-content "> */}
                                <div className="flex flex-col gap-8 overflow-hidden text-[#B2BEBA] modal-content" style={{ maxWidth: '800px', overflowX: 'hidden' }}>
                                    <label htmlFor="modal-1" className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2 text-[#B2BEBA]">✕</label>
                                    <h2 className="text-xl text-center text-[#B2BEBA]"><b>User ID: </b> {selectedRow.id} </h2>
                                    <p className="text-[#B2BEBA]"><b>First Name:</b> {selectedRow.first_name}</p>
                                    <p className="text-[#B2BEBA]"><b>Last Name:</b> {selectedRow.last_name}</p>
                                    <p className="text-[#B2BEBA]"><b>Password:</b> {selectedRow.password}</p>
                                    <p className="text-[#B2BEBA]"><b>Status: </b>{selectedRow.status}</p>
                                    <div className="flex gap-3">
                                        <button className="btn btn-block btn-primary  bg-[#26473c] hover:bg-[#072D20] dark:bg-[#072D20] dark:hover:bg-[#26473c]" onClick={handleApprove_agent}>Approves</button>
                                        <button className="btn btn-error btn-block  bg-[#843a3b] hover:bg-red-800 dark:bg-red-800 dark:hover:bg-[#843a3b]" onClick={handleDelete_agent}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </>
        );
    };
    // _________________________________________________________________________________________________________________________________________________________________
    // badge table starts
    const RenderTable_badges = (data, isSalesData) => {
        const [selectedRow, setSelectedRow] = useState(null);
        // --------------------------------- ACTIVATE BUTTON LOGIC -----------------------------------//
        const handleActivate = () => {
            if (!selectedRow) return;

            const id = selectedRow.id;
            const updatedData = { ...selectedRow, status: 'activated' }; // Update status to 'activated'

            if (selectedRow.status === 'activated') {
                // Show prompt if status is already activated
                window.alert('It is already activated');
                return;
            }

            fetch(` https://crmapi.devcir.co/api/badges/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            })
                .then(response => {
                    if (response.ok) {
                        console.log('Record status updated to activated successfully');
                        window.location.reload();
                    } else {
                        console.error('Failed to update record status');
                    }
                })
                .catch(error => {
                    console.error('Network error:', error);
                });
        };
        //  ---------------------------------- DELETE BUTTON LOGIC ------------------------------------//
        const handleDelete_agent = () => {
            if (!selectedRow) return;

            const id = selectedRow.id;
            fetch(` https://crmapi.devcir.co/api/badges/${id}`, {

                method: 'DELETE'
            })
                .then(response => {
                    if (response.ok) {
                        console.log('Record deleted successfully');
                        window.location.reload();
                    } else {
                        console.error('Failed to delete record');
                    }
                })
                .catch(error => {
                    console.error('Network error:', error);
                });
        };
        const handleEditClick = (id, badge_name, rowData) => {

            setSelectedRow({ id, badge_name, ...rowData });
        };
        // Function to format date as date-month-year
        const formatDate = (dateString) => {
            const date = new Date(dateString);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}-${month}-${year}`;
        };
        return (
            <>
                <div className="container mx-auto">
                    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr className="text-white bg-[#305b4c] dark:bg-[#072D20]">
                                        {/* <th className="px-4 py-2 text-center  text-white bg-[#535454] border-r border-white">ID</th> */}
                                        <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Badge Name</th>
                                        <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Image Path</th>
                                        <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Description</th>
                                        <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Status</th>
                                        <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Created At</th>
                                        <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index}>
                                            {/* <td className="px-4 py-2 text-center text-black border border-black">{item.id}</td> */}
                                            <td className="px-4 py-2 text-center text-black border border-[#072D20]">{item.badge_name}</td>
                                            <td className="px-4 py-2 text-center text-black border border-[#072D20]"><img src={item.image_path} alt="Uploaded" className="w-32 h-32 ml-auto mr-auto" /></td>
                                            <td className="px-4 py-2 text-center text-black border border-[#072D20]">{item.description}</td>
                                            {!isSalesData && <td className={`px-4 py-2  text-center text-black border border-[#072D20] ${item.status === 'pending' ? 'bg-red-600 text-white font-bold' : 'bg-green-600 text-white font-bold'}`}>{item.status}</td>}
                                            {/* {!isSalesData && <td className="px-4 py-2 text-center border border-black">{item.created_at}</td>} */}
                                            {!isSalesData && <td className="px-4 py-2 text-center text-black border border-[#072D20]">{formatDate(item.created_at)}</td>}
                                            {!isSalesData && (
                                                <td className="px-4 text-center border border-[#072D20]">
                                                    <label className="bg-[#072D20] btn border border-white" htmlFor="modal-1" onClick={() => handleEditClick(item.id, item.badge_name, item)}>
                                                        Edit Details
                                                    </label>
                                                </td>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* Popup or modal */}
                {selectedRow && (
                    // badge popup
                    <div >
                        <input className="modal-state" id="modal-1" type="checkbox" />
                        <div className=" modal">
                            <label className="modal-overlay" htmlFor="modal-1"></label>
                            <div className="flex flex-col gap-8 overflow-hidden modal-content bg-[#B2BEBA]" style={{ maxWidth: '800px', overflowX: 'hidden' }}>
                                <label htmlFor="modal-1" className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2 text-[#B2BEBA]">✕</label>
                                <h2 className="text-xl text-center text-black"><b>Badge ID: </b> {selectedRow.id} </h2>
                                <p className="text-black"><b>Badge Name:</b> {selectedRow.badge_name}</p>
                                <p className="text-black"><b>Image Path:</b><img src={selectedRow.image_path} alt="Uploaded" className="w-32 h-32 ml-auto mr-auto" /></p>
                                <p className="text-black"><b>Description:</b> {selectedRow.description}</p>
                                <p className="text-black"><b>Status: </b>{selectedRow.status}</p>
                                <div className="flex gap-3">
                                    <button className="btn btn-block btn-primary  bg-[#26473c] hover:bg-[#072D20] dark:bg-[#072D20] dark:hover:bg-[#26473c]" onClick={handleActivate}>Activate</button>
                                    <button className="btn btn-error btn-block bg-[#843a3b] hover:bg-red-800 dark:bg-red-800 dark:hover:bg-[#843a3b]" onClick={handleDelete_agent}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    // badge popup
                )}
            </>
        );
    };
    //   Badge table ends
    // __________________________________________________________________________________________________________________________________________________________
    const RenderTable = (data, isSalesData) => {
        const [selectedRow, setSelectedRow] = useState(null);
        //  ---------------------------------- DELETE BUTTON LOGIC ------------------------------------//
        const handleDelete = () => {
            if (!selectedRow) return;

            const id = selectedRow.id;
            fetch(`https://crmapi.devcir.co/api/sales-officers/${id}`, {
                method: 'DELETE'
            })
                .then(response => {
                    if (response.ok) {
                        console.log('Record deleted successfully');
                        window.location.reload();
                    } else {
                        console.error('Failed to delete record');
                    }
                })
                .catch(error => {
                    console.error('Network error:', error);
                });
        };
        // ------------------------------------------- APPROVE BUTTON LOGIC --------------------------------------------//
        const handleApprove = () => {
            if (!selectedRow) return; // Check if a row is selected

            const id = selectedRow.id;
            const updatedData = { ...selectedRow, status: 'approved' }; // Update status to 'approved'
            fetch(`https://crmapi.devcir.co/api/sales-officers/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            })
                .then(response => {
                    if (response.ok) {
                        console.log('Record status updated to approved successfully');
                        window.location.reload();
                        window.location.reload();
                    } else {
                        console.error('Failed to update record status');
                    }
                })
                .catch(error => {
                    console.error('Network error:', error);
                });
        };
        const handleEditClick = (id, firstName, rowData) => {

            setSelectedRow({ id, firstName, ...rowData });

        };
        return (
            <>
                <div className="container mx-auto">
                    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                        <div className="overflow-x-auto"></div>
                        <table className="min-w-full">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                {!isSalesData && <col />}
                                {!isSalesData && <col />}
                            </colgroup>
                            <thead>
                                <tr className="text-white bg-[#305b4c] dark:bg-[#072D20]">
                                    {/* <th className="px-4 py-2 text-center  text-white bg-[#535454] border-r border-white">ID</th> */}
                                    <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">First Name</th>
                                    <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Last Name</th>
                                    <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Email</th>
                                    <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Password</th>
                                    {!isSalesData && <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Status</th>}
                                    {!isSalesData && <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Action</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        {/* <td className="px-4 py-2 text-center text-black border border-black">{item.id}</td> */}
                                        <td className="px-4 py-2 text-center text-black border border-[#072D20]">{item.first_name}</td>
                                        <td className="px-4 py-2 text-center text-black border border-[#072D20]">{item.last_name}</td>
                                        <td className="px-4 py-2 text-center text-black border border-[#072D20]">{item.email}</td>
                                        <td className="px-4 py-2 text-center text-black border border-[#072D20]">{CryptoJS.AES.decrypt(item.password, 'DBBDRSSR54321').toString(CryptoJS.enc.Utf8)}</td>
                                        {!isSalesData && <td className={`px-4 text-center text-black border border-[#072D20] ${item.status === 'pending' ? 'bg-red-600 text-white font-bold' : 'bg-green-600 text-white font-bold'}`}>{item.status}</td>}
                                        {!isSalesData && (
                                            <td className="px-4 py-2 text-center border border-[#072D20]">
                                                <label className="bg-[#072D20] btn border border-white" htmlFor="modal-1" onClick={() => handleEditClick(item.id, item.first_name, item)}>
                                                    Edit Details
                                                </label>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Popup or modal */}
                {
                    selectedRow && (
                        <div>
                            <input className="modal-state " id="modal-1" type="checkbox" />
                            <div className="modal ">
                                <label className="modal-overlay" htmlFor="modal-1"></label>
                                <div className="flex flex-col gap-8 overflow-hidden modal-content text-[#B2BEBA]" style={{ maxWidth: '800px', overflowX: 'hidden' }}>
                                    <label htmlFor="modal-1" className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2 text-[#B2BEBA]">✕</label>
                                    <h2 className="text-xl text-center text-[#B2BEBA]"><b>User ID: </b> {selectedRow.id} </h2>
                                    <p className="text-[#B2BEBA]"><b>First Name:</b> {selectedRow.first_name}</p>
                                    <p className="text-[#B2BEBA]"><b>Last Name:</b> {selectedRow.last_name}</p>
                                    <p className="text-[#B2BEBA]"><b>Password:</b> {selectedRow.password}</p>
                                    <p className="text-[#B2BEBA]"><b>Status: </b>{selectedRow.status}</p>
                                    <div className="flex gap-6">
                                        <button className="btn btn-block btn-primary  bg-[#26473c] hover:bg-[#072D20] dark:bg-[#072D20] dark:hover:bg-[#26473c]" onClick={handleApprove}>Approve</button>
                                        <button className="btn btn-error btn-block bg-[#843a3b] hover:bg-red-800 dark:bg-red-800 dark:hover:bg-[#843a3b]" onClick={handleDelete}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </>
        );
    };

    const { isAdminLoggedIn } = useAdminContext();
    if (!isAdminLoggedIn) {
        console.log("admin is not logged in");
        navigate('/admin_login');
        return (
            <div className="flex items-center justify-center h-screen bg-white">
                <h1 className="text-4xl text-green-900 text-bold">Redirecting to Login Page...</h1>
            </div>
        );
    }

    // __________________________________________________________________________________________________________________________________________________
    return (
        <div className={currentMode === "Dark" ? "" : ""}>
            <div className="relative flex dark:bg-main-dark-bg">
                {/* <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
                    <TooltipComponent content="Settings" position="Top">
                        <button
                            type="button"
                            onClick={() => setThemeSettings(true)}
                            style={{ background: currentColor, borderRadius: "50%" }}
                            className="p-3 text-3xl text-w hover:drop-shadow-xl hover:bg-light-gray"
                        >
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div> */}
                {activeMenu ? (
                    <div className="fixed bg-white w-72 sidebar dark:bg-secondary-dark-bg ">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 dark:bg-[#1a1a1a6b]">
                        <Sidebar />
                    </div>
                )}
                <div
                    className={
                        activeMenu
                            ? "dark:bg-[#1a1a1a6b] bg-main-bg min-h-screen md:ml-72 w-full  "
                            : "bg-main-bg dark:bg-[#1a1a1a6b] w-full min-h-screen flex-2 "
                    }
                >
                    <div className="fixed w-full md:static bg-[#072D20] dark:bg-[#072D20] navbar ">
                        <Navbar />
                    </div>
                    <div>
                        {themeSettings && <ThemeSettings />}
                        <div>
                            {/* Content for Page1
            <p>This is Page1 content.</p> */}
                            <div className='w-[90%] mx-auto px-10 py-8 rounded-lg shadow-xl border border-[#072D20] bg-[#DAF1DE] basis-full mt-24'>
                                <h1 className="mb-10 text-3xl font-bold text-center text-black">Main Dashboard</h1>
                                {/* <details className="w-full mb-3 bg-white border-4 cursor-pointer border-gray-400/75"> */}
                                <details className="w-full mb-3 bg-white dark:bg-gray-300 border-4 rounded-md cursor-pointer border-[#072D20] p-5">
                                    <summary className="w-full bg-white dark:bg-gray-300 text-black font-bold flex justify-between px-4 py-3 after:content-['+']">Admin Data</summary>
                                    <div className="px-4 py-3 overflow-x-auto bg-white border-t-2 border-black dark:bg-gray-300">
                                        {RenderTable(adminData, true)}
                                    </div>
                                </details>
                                <details className="w-full mb-3 bg-white dark:bg-gray-300 border-4 rounded-md cursor-pointer border-[#072D20] p-5">
                                    <summary className="w-full font-bold bg-white dark:bg-gray-300 text-black  flex justify-between px-4 py-3 after:content-['+']">Sales Officer Data</summary>
                                    <div className="px-4 py-3 overflow-x-auto bg-white border-t-2 border-black dark:bg-gray-300">
                                        {RenderTable(salesOfficerData, false)}
                                    </div>
                                </details>
                                <details className="w-full mb-3 bg-white dark:bg-gray-300 border-4 rounded-md cursor-pointer border-[#072D20] p-5">
                                    <summary className="w-full font-bold bg-white dark:bg-gray-300 text-black  flex justify-between px-4 py-3  after:content-['+']">Sales Agent Data</summary>
                                    <div className="px-4 py-3 overflow-x-auto bg-white border-t-2 border-black dark:bg-gray-300">
                                        {RenderTable_agent(salesAgentData)}
                                    </div>
                                </details>
                                <details className="w-full mb-3 bg-white dark:bg-gray-300 border-4 rounded-md cursor-pointer border-[#072D20] p-5">
                                    <summary className="w-full font-bold bg-white dark:bg-gray-300 text-black  flex justify-between px-4 py-3  after:content-['+']">Badges Data</summary>
                                    <div className="px-4 py-3 overflow-x-auto bg-white border-t-2 border-black dark:bg-gray-300">
                                        {RenderTable_badges(badgeData)}
                                    </div>
                                </details>
                                {/* competition table  */}

                                {/* <details className="w-full mb-3 bg-white border-4 rounded-md cursor-pointer border-black/60">
                    <summary className="w-full font-bold bg-white text-black text-dark flex justify-between px-4 py-3  after:content-['+']">Competition Data</summary>
                    <div className="px-4 py-3">
                {RenderTable_badges(badgeData)}
                 </div>
                </details> */}

                                {/* competition table  */}
                                <div className="py-4 text-right text-black">Created by <a href="#" className='font-bold text-black'>DevCir</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
            {/* <Footer /> */}
        </div>
    );
}