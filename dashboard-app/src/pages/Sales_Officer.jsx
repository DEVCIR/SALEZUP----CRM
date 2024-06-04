import React, { useState, useEffect } from "react";
import { FaPlusCircle, FaMoon, FaSun } from 'react-icons/fa';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useStateContext } from "../contexts/ContextProvider";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";

export default function Page2() {
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

    const [mySalesOfficer, setMySalesOfficer] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const handle_New_Officer = async (e) => {
        e.preventDefault();
        console.log("The is new user");
        try {
            const password = formData.password;
            const encryptedPassword = CryptoJS.AES.encrypt(password, 'DBBDRSSR54321').toString();
            const dataToSend = { ...formData, password: encryptedPassword };
            const response = await axios.post('https://crmapi.devcir.co/api/sales-officers', dataToSend);
            console.log(response.data);
            // Fetch the updated list of sales officers
            const updatedResponse = await axios.get('https://crmapi.devcir.co/api/sales-officers');
            const decryptedData = updatedResponse.data.filter(agent => agent.status === 'approved').map(agent => {
                const bytes = CryptoJS.AES.decrypt(agent.password, 'DBBDRSSR54321');
                const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
                return { ...agent, password: decryptedPassword };
            });
            setMySalesOfficer(decryptedData);
            // Clear form data after successful addition
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                status: 'approved'
            });
            setShowPopup(false);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    //--------------------------------------------------------------------//
    const [selectedRow, setSelectedRow] = useState(null);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        status: 'approved'
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://crmapi.devcir.co/api/sales-officers');
                const decryptedData = response.data.filter(agent => agent.status === 'approved').map(agent => {
                    const bytes = CryptoJS.AES.decrypt(agent.password, 'DBBDRSSR54321');
                    const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
                    return { ...agent, password: decryptedPassword };
                });
                setMySalesOfficer(decryptedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleEditClick = (rowData) => {
        setSelectedRow(rowData);
        setFormData({ ...rowData });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const [isUpdating, setIsUpdating] = useState(false);

    const handleSave = () => {
        if (!selectedRow || isUpdating) return;
        setIsUpdating(true); // Set isUpdating to true when update operation starts
        // Encrypt the password
        const encryptedPassword = CryptoJS.AES.encrypt(formData.password, 'DBBDRSSR54321').toString();
        // Update the formData object with the encrypted password
        const encryptedFormData = { ...formData, password: encryptedPassword };
        axios.put(`https://crmapi.devcir.co/api/sales-officers/${selectedRow.id}`, encryptedFormData)
            .then(response => {
                console.log('Record updated successfully:', response.data);
                // Update the data in mySalesOfficer state
                setMySalesOfficer(mySalesOfficer.map(agent =>
                    agent.id === selectedRow.id ? { ...agent, ...formData } : agent
                ));
                setSelectedRow(null); // Clear selectedRow state
                if (formData.status) {
                    window.location.reload(); // Reload page only if status is updated
                }
            })
            .catch(error => {
                console.error('Failed to update record:', error);
            })
            .finally(() => {
                setIsUpdating(false);
                // Reset isUpdating to false after update operation completes
            });
    };

    const handleDelete = () => {
        if (!selectedRow) return;
        axios.delete(`https://crmapi.devcir.co/api/sales-officers/${selectedRow.id}`)
            .then(response => {
                console.log('Record deleted successfully');
                setMySalesOfficer(mySalesOfficer.filter(agent => agent.id !== selectedRow.id));
                setSelectedRow(null); // Clear selectedRow state
            })
            .catch(error => {
                console.error('Failed to delete record:', error);
            });
    };

    const togglePasswordVisibility1 = () => {
        setIsPasswordVisible1(prevState => !prevState);
    };

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
                            <label htmlFor="modal-1" className="flex mt-8 mr-6 items-center p-4 ml-auto  bg-gray-400 hover:bg-[#305b4c] hover:text-white hover:border-white/40 dark:text-white dark:hover:bg-gray-600 dark:bg-[#305b4c]  border-2 rounded-md cursor-pointer w-72 border-black/40  e hover:border-2 ">
                                <span htmlFor="modal-1" className="ml-8 font-bold " >Add New Sales Officer</span>
                                <FaPlusCircle className="w-6 h-6 ml-4" />
                            </label>
                            {/* Render your table with mySalesOfficer data */}
                            <div className="flex h-screen">
                                <div className="container mx-auto">
                                    <table className="w-[90%] mx-auto mt-16 border border-solid table-auto">
                                        <thead>
                                            <tr className="text-white bg-[#305b4c] dark:bg-[#072D20]">
                                                <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">First Names</th>
                                                <th className="px-4 py-2 border-b-2 border-r-2 border-[#072D20] dark:border-white">Last Name</th>
                                                <th className="px-4 py-2 border-b-2 border-r-2 border-[#072D20] dark:border-white">Email</th>
                                                <th className="px-4 py-2 border-b-2 border-r-2 border-[#072D20] dark:border-white">Password</th>
                                                <th className="px-4 py-2 border-b-2 border-r-2 border-[#072D20] dark:border-white">Status</th>
                                                <th className="px-4 py-2 border-b-2 border-r-2 border-[#072D20] dark:border-white">Actions</th>
                                            </tr>
                                        </thead>
                                        {mySalesOfficer.map((item, index) => (
                                            <tr className="bg-black/65" key={index}>
                                                <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-100/10">{item.first_name}</td>
                                                <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-100/10">{item.last_name}</td>
                                                <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-100/10">{item.email}</td>
                                                <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-100/10">{item.password}</td>
                                                {/* <td className="px-4 py-2 text-center text-white border-2 border-white">{item.status}</td> */}
                                                <td className={`px-4 py-2 text-center dark:border-white  text-white border-2 border-[#072D20] ${item.status === 'pending' ? 'bg-red-600 text-white font-bold' : 'bg-green-700 text-white font-bold'}`}>{item.status}</td>
                                                <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-100/10">
                                                    <label htmlFor="my-modal" className="bg-[#072D20] btn border border-white" onClick={() => handleEditClick(item)}>Update</label>
                                                </td>
                                            </tr>
                                        ))}
                                    </table>
                                </div>
                            </div>
                            <article>
                                {/* <label className="btn btn-primary" htmlFor="modal-1">Open Modal</label> */}
                                <input className="modal-state" id="modal-1" type="checkbox" />
                                <div className="modal">
                                    <label className="modal-overlay" htmlFor="modal-1"></label>
                                    <div className="flex flex-col w-full gap-5 modal-content p-7 dark:bg-[#B2BEBA]">
                                        <label htmlFor="modal-1" className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</label>
                                        <div className="flex flex-col gap-2">
                                            <h2 className="text-2xl font-semibold text-center text-[#B2BEBA] dark:text-gray-800">Add New Sales Officer</h2>
                                            <p className="max-w-xs mx-auto text-sm text-content text-[#B2BEBA] dark:text-gray-800">Enter new Sales Officer Data</p>
                                        </div>
                                        <section>
                                            <form onSubmit={handle_New_Officer}>
                                                <div className="form-group">
                                                    <div className="form-field">
                                                        <label className="font-semibold form-label text-[#B2BEBA] dark:text-gray-800">First Name</label>
                                                        <input placeholder="Type here" type="text" className="max-w-full input dark:bg-[#B2BEBA] dark:text-gray-800" value={formData.first_name} onChange={handleChange} name="first_name" />
                                                        <label className="form-label">
                                                            <span className="form-label-alt">Please enter your first name</span>
                                                        </label>
                                                    </div>
                                                    <div className="form-field">
                                                        <label className="font-semibold form-label text-[#B2BEBA] dark:text-gray-800">Last Name</label>
                                                        <input placeholder="Type here" type="text" className="max-w-full input dark:bg-[#B2BEBA] dark:text-gray-800" value={formData.last_name} onChange={handleChange} name="last_name" />
                                                        <label className="form-label">
                                                            <span className="form-label-alt">Please enter your last name</span>
                                                        </label>
                                                    </div>
                                                    <div className="form-field">
                                                        <label className="font-semibold form-label text-[#B2BEBA] dark:text-gray-800">Email address</label>
                                                        <input placeholder="Type here" type="email" className="max-w-full input dark:bg-[#B2BEBA] dark:text-gray-800" value={formData.email} onChange={handleChange} name="email" />
                                                        <label className="form-label">
                                                            <span className="form-label-alt">Please enter a valid email.</span>
                                                        </label>
                                                    </div>
                                                    <div className="form-field">
                                                        <label htmlFor="password" className="font-semibold form-label text-[#B2BEBA] dark:text-gray-800">
                                                            <span>Password</span>
                                                        </label>
                                                        <div className="form-control">
                                                            <input
                                                                placeholder="Type here"
                                                                type={isPasswordVisible1 ? 'text' : 'password'}
                                                                className="max-w-full input dark:bg-[#B2BEBA] dark:text-gray-800"
                                                                value={formData.password}
                                                                onChange={handleChange}
                                                                name="password" />
                                                            <button
                                                                type="button"
                                                                className="absolute top-3 right-2 bg-transparent hover:bg-transparent"
                                                                onClick={togglePasswordVisibility1}>
                                                                {isPasswordVisible1 ? <FaEyeSlash className="dark:text-gray-800 text-white" /> : <FaEye className="dark:text-gray-800 text-white" />}
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="pt-5 form-field">
                                                        <div className="justify-between form-control">
                                                            <button type="submit" className="w-full btn btn-primary bg-[#26473c] hover:bg-[#072D20] dark:bg-gray-800 dark:hover:bg-gray-600">Register Sales Officer</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </section>
                                    </div>
                                </div>
                            </article>
                            {selectedRow && (
                                <div className="update-div">
                                    <input class="modal-state" id="my-modal" type="checkbox" />
                                    <div class="modal" >
                                        <label class="modal-overlay" for="my-modal"></label>
                                        <div class="modal-content flex flex-col gap-6 dark:bg-[#B2BEBA]">
                                            <label for="my-modal" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                                            <div>
                                                <div className="flex flex-col gap-8 ">
                                                    <h2 className="mt-8 text-xl text-center"><b>Updating : </b>{selectedRow.first_name}</h2>
                                                    <label className="font-bold text-md">First Name:
                                                        <input type="text" className="p-2 ml-4 font-normal border border-gray-300" name="first_name" value={formData.first_name} onChange={handleInputChange} /> </label>
                                                    <label className="font-bold text-md">Last Name:
                                                        <input type="text" className="p-2 ml-4 font-normal border border-gray-300" name="last_name" value={formData.last_name} onChange={handleInputChange} />  </label>
                                                    <label className="font-bold text-md">Email:
                                                        <input type="text" className="p-2 ml-4 font-normal border border-gray-300" name="email" value={formData.email} onChange={handleInputChange} />  </label>
                                                    <div className="flex flex-row items-center">
                                                        <label htmlFor="password" className="font-bold text-md">Password :</label>
                                                        <div className="relative flex">
                                                            <input
                                                                type={isPasswordVisible ? 'text' : 'password'}
                                                                className="p-2 ml-4 font-normal border border-gray-300"
                                                                name="password"
                                                                value={formData.password}// Update value to reflect formData
                                                                onChange={handleInputChange} />
                                                            <button
                                                                type="button"
                                                                className="absolute top-3 right-2 "
                                                                onClick={togglePasswordVisibility}>
                                                                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* <label className="font-bold text-md">Status:
                            <input type="text" className="p-2 ml-4 font-normal" name="status" value={formData.status} onChange={handleInputChange} />  </label> */}
                                                    <label className="font-bold text-md">Status:
                                                        <select className="p-2 ml-4 font-normal border border-gray-300" name="status" value={formData.status} onChange={handleInputChange}>
                                                            <option value="approved">Approved</option>
                                                            <option value="pending">Pending</option>
                                                        </select>
                                                    </label>
                                                    <div className="flex gap-3">
                                                        <button className="btn btn-block btn-primary bg-[#26473c] hover:bg-[#072D20] dark:bg-[#072D20] dark:hover:bg-[#26473c]" onClick={handleSave}>Update</button>
                                                        <button className="btn btn-error btn-block bg-[#843a3b] hover:bg-red-800 dark:bg-red-800 dark:hover:bg-[#843a3b]" onClick={handleDelete}>Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>

        </div>
    );
}