import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaMoon, FaSun } from 'react-icons/fa';
import CryptoJS from 'crypto-js';
import { useAdminContext } from "../contexts/AdminContextProvider";


export default function Admin_Login() {
    const navigate = useNavigate();

    const { setIsAdminLoggedIn } = useAdminContext();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/admin-registrations');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            const filteredData = data.map(({ email, password, first_name, last_name }) => ({ email, password, first_name, last_name }));
            setFilteredData(filteredData);
            return filteredData; // Return the filtered data for immediate use
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Rethrow the error to handle it in handleLogin
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const filteredData = await fetchData(); // Wait for fetchData to complete and get the data

            const foundUser = filteredData.find(user => user.email === username);

            if (foundUser) {
                // Decrypt the stored password
                const decryptedPassword = CryptoJS.AES.decrypt(foundUser.password, 'DBBDRSSR54321').toString(CryptoJS.enc.Utf8);

                // Compare the decrypted password with the user-entered password
                if (password === decryptedPassword) {
                    console.log("Decrypted Password: ", decryptedPassword);
                    console.log("----  Right User ----");
                    console.log("my user: ", foundUser);
                    // Redirect or perform other actions upon successful login
                    navigate('/Admin_Dashboard', { state: { foundUser } });
                    // Use local storage to transfer variable value from one to another
                    localStorage.setItem('userEmail', foundUser.email);
                    localStorage.setItem('userFName', foundUser.first_name);
                    localStorage.setItem('userLName', foundUser.last_name);
                    console.log("This is my email: ", foundUser.email);
                    setIsAdminLoggedIn(true);
                } else {
                    console.log("----  Wrong Password  ----");
                    alert("Wrong Password !!! Try Again");
                }
            } else {
                console.log("User not found");
                alert("User not found");
            }
        } catch (error) {
            console.error('Error during login process:', error);
            alert("An error occurred during the login process. Please try again.");
        }
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <div className="flex items-center justify-end p-4">
                <button onClick={toggleTheme} className="text-xl bg-transparent hover:bg-transparent">
                    {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
                </button>
            </div>
            <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"></script>
            <div className={`flex items-center justify-center min-h-screen px-5 py-5 min-w-screen ${isDarkMode ? 'bg-gray-700' : 'bg-white'} `}>
                <div className="w-3/4 overflow-hidden text-gray-500 bg-white shadow-xl rounded-3xl dark:bg-gray-800 dark:text-gray-200" style={{ marginTop: '-80px' }}>
                    <div className="w-full md:flex border border-black">
                        <div className="hidden w-1/2 px-10 py-10 bg-red-500 md:block">
                            <img src="https://pathwayport.com/saasland/images/login@4x.png" alt="SVG Image" />
                        </div>
                        <div className="w-full px-5 py-10 md:w-1/2 md:px-10">
                            <div className="mb-10 text-center">
                                {/* <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200">Admin Login</h1> */}
                                <img src="removebg-preview.png" alt="" />
                                <br />
                            </div>
                            <form>
                                <div>
                                    <div className="flex -mx-3">

                                        <div className="w-full px-3 mb-5">
                                            <label htmlFor="username" className="px-1 text-xs font-semibold">Email</label>
                                            <div className="flex">
                                                <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none">
                                                    <i className="text-lg text-gray-400 mdi mdi-email-outline"></i>
                                                </div>
                                                {/* w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 focus:border-red-500 */}
                                                <input type="text" name="username" className="w-full text-black py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 bg-gray-200 rounded-lg outline-none dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 focus:border-gray-200" placeholder="Enter your email" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5">
                                            <label htmlFor="password" className="px-1 text-xs font-semibold">Password</label>
                                            <div className="relative flex">
                                                <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none">
                                                    <i className="text-lg text-gray-400 mdi mdi-email-outline"></i>
                                                </div>
                                                <input
                                                    type={isPasswordVisible ? "text" : "password"}
                                                    name="password"
                                                    className="w-full py-2 pl-10 pr-3 -ml-10 border-2 text-black border-gray-200 bg-gray-200 rounded-lg outline-none dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 focus:border-gray-200"
                                                    placeholder="Password"
                                                    required
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <button type="button" className="absolute top-3 right-2 bg-transparent hover:bg-transparent" onClick={togglePasswordVisibility}>
                                                    {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" onClick={handleLogin} className="w-full px-4 py-2 font-semibold text-white bg-[#346155] rounded-md hover:bg-[#162e28]">Login</button>
                                </div>
                            </form>
                            <div className="mt-10 text-center text-black dark:text-gray-200">Not Registered? &nbsp;&nbsp;&nbsp;
                                <a href="/admin_reg">
                                    <button className="px-4 py-2 text-sm font-semibold text-white bg-[#346155] rounded-lg hover:underline hover:bg-[#162e28]">
                                        Sign up Here
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
