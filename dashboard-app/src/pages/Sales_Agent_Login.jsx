import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaMoon, FaSun } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import CryptoJS from 'crypto-js';


const Sales_Agent_Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const [loggedInUserEmail, setLoggedInUserEmail] = useState('');

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/sales-agents');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            const filteredData = data.map(({ email, password }) => ({ email, password }));
            console.log(filteredData);
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
            console.log("Filtered Data: ", filteredData);

            const foundUser = filteredData.find(user => user.email === username);

            if (foundUser) {
                // Decrypt the stored password
                const decryptedPassword = CryptoJS.AES.decrypt(foundUser.password, 'DBBDRSSR54321').toString(CryptoJS.enc.Utf8);

                // Compare the decrypted password with the user-entered password
                if (password === decryptedPassword) {
                    console.log("Decrypted Password: ", decryptedPassword)
                    console.log(" ----  Right User ----");
                    setLoggedInUserEmail(username);
                    console.log("Logged in User Email:", username);
                    // navigate("/sales_agent_dashboard")

                    navigate("/sales_agent_dashboard", { state: { loggedInUserEmail: username } });
                    // Redirect or perform other actions upon successful login
                } else {
                    console.log("----  Wrong Password  ----");
                    alert("Wrong Password !!! Try Again")
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

    const toggleDarkMode = () => {
        setIsDarkMode(prevState => !prevState);
    };

    return (
        <div className={isDarkMode ? "dark" : ""}>
            {/* Dark mode toggle button */}
            <button
                onClick={toggleDarkMode}
                className={`fixed top-4 right-4 z-50 focus:outline-none ${isDarkMode ? "text-yellow-500" : "text-gray-800"}`}
            >
                {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
            </button>

            <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"></script>


            <div className={`flex items-center justify-center min-h-screen px-5 py-5 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"} min-w-screen`}>
                <div className={`w-3/4 overflow-hidden ${isDarkMode ? "text-gray-400 bg-gray-800" : "text-gray-500 bg-gray-200"} shadow-xl rounded-3xl relative`}>
                    <div className="w-full md:flex">
                        <div className={`hidden w-1/2 px-10 py-10 ${isDarkMode ? "bg-orange-700" : "bg-orange-500"} md:block`}>
                            <img src="https://image.freepik.com/free-vector/login-concept-illustration_114360-739.jpg" alt="SVG Image" />
                        </div>
                        <div className="w-full px-5 py-10 md:w-1/2 md:px-10">
                            <div className="mb-10 text-center">
                                <h1 className={`text-3xl font-bold ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>Sales Agent Login</h1>
                                <br />
                            </div>

                            {/* form */}

                            <form onSubmit={handleLogin}>
                                <div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5">
                                            <label htmlFor="username" className="px-1 text-xs font-semibold">Username</label>
                                            <div className="flex">
                                                <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none">
                                                    <i className="text-lg text-gray-400 mdi mdi-email-outline"></i>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="username"
                                                    className={`w-full py-2 pl-10 pr-3 -ml-10 border-2 ${isDarkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "bg-white border-gray-200"} rounded-lg outline-none focus:border-orange-500`}
                                                    placeholder="johnsmith@example.com"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    required
                                                />
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
                                                    className={`w-full py-2 pl-10 pr-3 -ml-10 border-2 ${isDarkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "bg-white border-gray-200"} rounded-lg outline-none focus:border-orange-500`}
                                                    placeholder="Password"
                                                    value={password}
                                                    required
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <button type="button" className={`absolute top-3 right-2 ${isDarkMode ? "text-gray-100" : "text-black"}`} onClick={togglePasswordVisibility}>
                                                    {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <button type="submit" className={`bg-orange-500 hover:bg-orange-800 text-white font-semibold rounded-md py-2 px-4 w-full`}>
                                        Login
                                    </button>
                                </div>
                            </form>
                            <div className="mt-10 text-black/50 text-center">
                                Not Registered?&nbsp;&nbsp;&nbsp;
                                <a href="/sales_agent_reg" className="hover:underline font-semibold text-white text-sm p-[7px] bg-orange-500 rounded-lg hover:bg-orange-800 focus:bg-orange-500">
                                    Sign up Here
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sales_Agent_Login;


