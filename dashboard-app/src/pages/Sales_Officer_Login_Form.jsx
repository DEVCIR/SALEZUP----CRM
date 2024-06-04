import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaMoon, FaSun } from 'react-icons/fa'; // Import eye icons for password visibility
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';

const Sales_Officer_Login_Form = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch('https://crmapi.devcir.co/api/sales-officers');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const filteredData = data.map(({ email, password }) => ({ email, password }));
            setFilteredData(filteredData);
            return filteredData; // Return the filtered data for immediate use
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const filteredData = await fetchData();
            const foundUser = filteredData.find(user => user.email === username);

            if (foundUser) {
                // Decrypt the stored password
                const decryptedPassword = CryptoJS.AES.decrypt(foundUser.password, 'DBBDRSSR54321').toString(CryptoJS.enc.Utf8);
                // Compare the decrypted password with the user-entered password
                if (password === decryptedPassword) {
                    console.log("Decrypted Password: ", decryptedPassword)
                    console.log(" ----  Right User ----");
                    // Redirect or perform other actions upon successful login
                    navigate('/sales_officer');
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

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };


    return (
        <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-700' : 'bg-gray-200'}`}>
            <div className="flex items-center justify-end p-4">
                <button onClick={toggleTheme} className="text-xl">
                    {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
                </button>
            </div>

            <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"></script>


            <div className="flex items-center justify-center min-h-screen px-5 py-5 min-w-screen ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}">
                <div className="w-3/4 overflow-hidden text-gray-500 bg-gray-200 shadow-xl rounded-3xl dark:bg-gray-800 dark:text-gray-200" style={{ marginTop: '-100px' }}>
                    <div className="w-full md:flex">
                        <div className="hidden w-1/2 px-10 py-10 bg-blue-500 md:block">
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" alt="SVG Image"></img>

                        </div>
                        <div className="w-full px-5 py-10 md:w-1/2 md:px-10">
                            <div className="mb-10 text-center">
                                <h1 className="text-3xl font-bold text-gray-900">Sales Officer Login</h1>
                                <br />

                            </div>

                            {/* form */}

                            <form onSubmit={handleLogin}>
                                <div>

                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5">
                                            <label htmlFor="username" className="px-1 text-xs font-semibold">Username</label>
                                            <div className="flex">
                                                <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none"><i className="text-lg text-gray-400 mdi mdi-email-outline"></i></div>
                                                <input type="text" name="username" className="w-full py-2 pl-10 pr-3 -ml-10 bg-white border-2 border-gray-200 rounded-lg outline-none dark:text-black dark:bg-white focus:border-blue-500" placeholder="johnsmith@example.com" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5">
                                            <label htmlFor="password" className="px-1 text-xs font-semibold">Password</label>
                                            <div className="relative flex">
                                                <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none"><i className="text-lg text-gray-400 mdi mdi-email-outline"></i></div>

                                                <input
                                                    type={isPasswordVisible ? "text" : "password"}
                                                    name="password"
                                                    className="w-full py-2 pl-10 pr-3 -ml-10 bg-white border-2 border-gray-200 rounded-lg outline-none dark:bg-white focus:border-blue-500"
                                                    placeholder="Password"
                                                    value={password}
                                                    required
                                                    onChange={(e) => setPassword(e.target.value)} />
                                                <button type="button" className="absolute top-3 right-2" onClick={togglePasswordVisibility}>
                                                    {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                                </button>

                                            </div>
                                        </div>
                                    </div>





                                    <div class="mb-4 flex items-center">
                                        <input type="checkbox" id="remember" name="remember" class="text-blue-500" />
                                        <label for="remember" class="text-gray-600 ml-2">Remember Me</label>
                                    </div>



                                    <button type="submit" class="bg-blue-500 hover:bg-black text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>







                                </div>

                            </form>

                            <div class="mt-10 text-black text-center">Not Registered ? &nbsp;&nbsp;&nbsp;<a href="/sales_off_reg" class="hover:underline font-semibold text-white text-sm p-[7px]  bg-blue-500 rounded-lg hover:bg-black focus:bg-blue-500">Sign up Here</a>  </div>






                        </div>

                    </div>
                </div>
            </div>




        </div>
    )
};

export default Sales_Officer_Login_Form;
