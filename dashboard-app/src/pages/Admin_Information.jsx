import React, { useState, useEffect } from "react";
import CryptoJS from 'crypto-js';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useStateContext } from "../contexts/ContextProvider";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";


const Page4 = ({ email }) => {
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

  const [adminData, setAdminData] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');

    if (userEmail) {
      console.log("Retrieved email from local storage: ", userEmail);
    } else {
      console.log("No email found in local storage");
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`https://crmapi.devcir.co/api/admin-registrations/email/${userEmail}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        console.log(data)
        // Decrypt password if it exists
        if (data.password) {
          const bytes = CryptoJS.AES.decrypt(data.password, 'DBBDRSSR54321');
          const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
          data.password = decryptedPassword;
        }
        setAdminData(data);
        setFormData(data); // Set form data initially
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (userEmail) {
      fetchData();
    }
  }, [email]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleUpdateClick = async () => {
    try {
      // Encrypt the password in the form data
      const encryptedPassword = CryptoJS.AES.encrypt(formData.password, 'DBBDRSSR54321').toString();
      const updatedFormData = { ...formData, password: encryptedPassword };

      const response = await fetch(`https://crmapi.devcir.co/api/admin-registrations/${adminData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedFormData)

      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Decrypt the updated password and set it to adminData
      const bytes = CryptoJS.AES.decrypt(updatedFormData.password, 'DBBDRSSR54321');
      const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
      const updatedAdminData = { ...updatedFormData, password: decryptedPassword };

      setAdminData(updatedAdminData);
      setEditMode(false);

      // window.location.reload();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`https://crmapi.devcir.co/api/admin-registrations/${adminData.id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setAdminData(null);
      setEditMode(false);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="relative flex dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
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
        </div>
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
            <div className="container mx-auto">
              <table className="mt-8 border border-solid table-auto w-[90%] mx-auto">
                <thead>
                  <tr className="text-white bg-[#305b4c] dark:bg-[#072D20]">
                    <th className="px-4 py-2 border-r-2 border-[#072D20]">First Name</th>
                    <th className="px-4 py-2 border-r-2 border-[#072D20]">Last Name</th>
                    <th className="px-4 py-2 border-r-2 border-[#072D20]">Email</th>
                    <th className="px-4 py-2 border-r-2 border-[#072D20]">Password</th>
                    <th className="px-4 py-2 border-r-2 border-[#072D20]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {adminData && (
                    <tr className="p-4 text-center text-black bg-black/65">
                      <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-100/10">{adminData.first_name}</td>
                      <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-100/10">{adminData.last_name}</td>
                      <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-100/10">{adminData.email}</td>
                      <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-100/10">{adminData.password}</td>
                      <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-100/10">
                        <label htmlFor="my-modal" onClick={handleEditClick} className="bg-[#072D20] btn border border-white">
                          Edit Admin
                        </label>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              {/* {editMode && ( */}
              {editMode && adminData && (

                <div className="update-div">

                  <input class="modal-state" id="my-modal" type="checkbox" />
                  <div class="modal" >

                    <label class="modal-overlay" for="my-modal"></label>
                    <div class="modal-content flex flex-col gap-6 dark:bg-[#B2BEBA]">
                      <label for="my-modal" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                      <div>
                        <div className="flex flex-col gap-8 ">
                          <h2 className="mt-8 text-xl text-center dark:text-gray-800 text-[#B2BEBA]"><b>Updating Admin</b></h2>
                          <label className="font-semibold form-label dark:text-gray-800">First Name:
                            <input type="text" className="dark:text-black text-[#B2BEBA] p-2 ml-4 font-normal bg-transparent rounded border dark:border-black" name="first_name" value={formData.first_name} onChange={handleInputChange} /> </label>
                          <label className="font-semibold form-label dark:text-gray-800">Last Name:
                            <input type="text" className="dark:text-black text-[#B2BEBA] p-2 ml-4 font-normal bg-transparent rounded border dark:border-black" name="last_name" value={formData.last_name} onChange={handleInputChange} />  </label>
                          <label className="font-semibold form-label dark:text-gray-800">Email:
                            <input type="text" className="dark:text-black text-[#B2BEBA] p-2 ml-4 font-normal bg-transparent rounded border dark:border-black" name="email" value={formData.email} onChange={handleInputChange} />  </label>
                          {/* <label className="font-bold text-md">Password :
                        <input type="password" className="p-2 ml-4 font-normal" name="password" value={formData.password} onChange={handleInputChange} />  </label> */}
                          <div className="flex flex-row items-center">
                            <label htmlFor="password" className="font-semibold form-label dark:text-gray-800">Password :</label>
                            <div className="relative flex">
                              <input
                                type={isPasswordVisible ? 'text' : 'password'}
                                className="dark:text-black text-[#B2BEBA] p-2 ml-4 font-normal bg-transparent rounded border dark:border-black"
                                name="password"
                                value={formData.password}// Update value to reflect formData
                                onChange={handleInputChange} />
                              <button
                                type="button"
                                className="absolute top-3 right-2"
                                onClick={togglePasswordVisibility}>
                                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                              </button>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <button className="btn btn-block btn-primary bg-[#26473c] hover:bg-[#072D20]" onClick={handleUpdateClick}>Update</button>
                            <button className="btn btn-error btn-block bg-[#843a3b] hover:bg-red-800" onClick={handleDeleteClick} >Delete</button>
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
};


export default Page4;