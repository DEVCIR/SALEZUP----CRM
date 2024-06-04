import React, { useState, useEffect } from "react";
import { FaPlusCircle, FaMoon, FaSun } from 'react-icons/fa';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import bcrypt from "bcryptjs";
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';



import { useStateContext } from "../contexts/ContextProvider";

import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";


export default function Page5() {


  const [mySalesOfficer, setMySalesOfficer] = useState([]);

  const [prizevalueData, setPrizeValueData] = useState('');

  const [badgeName, setBadgeName] = useState('');
  const [textValue, setTextValue] = useState('');
  const [imagePath, setImagePath] = useState(null);
  const [status, setStatus] = useState('activated');
  const [badgeDescription, setBadgeDescription] = useState('');
  const [badges, setBadges] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);


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



  const handlePrizeValue = (e) => {
    setPrizeValueData(e.target.value);

  }

  const handleTextAreaChange = (event) => {
    setTextValue(event.target.value);
  };

  const handle_New_Badge = async (e) => {
    e.preventDefault();

    console.log(badgeName);
    console.log(imagePath);
    console.log(badgeDescription); // Log the badge description
    console.log(status);

    const newData = {
      badge_name: badgeName,
      image_path: imagePath,
      description: badgeDescription, // Use badgeDescription state
      status: status
    };

    try {
      await axios.post('https://crmapi.devcir.co/api/badges', newData);
      window.location.reload();
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };


  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePath(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleImageUpdate = () => {
  //   setFormData({ ...formData, image_path: imagePath });
  //   setImagePath(imagePath);
  // };

  const handleImageUpdate = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const imagePath = reader.result;
      setFormData({ ...formData, image_path: imagePath });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };


  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };


  const togglePasswordVisibility = () => {
    {/* Prize Value */ }

    <div class="flex flex-col">

      <label class="leading-loose">   <b> Prize Value  </b>  </label>

      <select
        class="block px-4 py-2 border focus:ring-black focus:border-black w-full sm:text-sm border-gray-600 rounded-md focus:outline-none text-black"
        value={prizevalueData}
        onChange={handlePrizeValue}
        required
      >

        <option value="">Select a prize value</option>
        <option value="Prize 1">Value 1</option>
        <option value="Prize 2">Value 2</option>
        <option value="Prize 3">Value 3</option>
        <option value="Prize 4">Value 4</option>
        <option value="Prize 5">Value 5</option>
      </select>
    </div>

    {/* Prize Value */ }
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

    badge_name: '',
    image_path: '',
    description: '',
    // status: 'activated'
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://crmapi.devcir.co/api/badges');
        setBadges(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  const handleEditClick = (rowData) => {
    setSelectedRow(rowData);
    // Set form data state with selected row data
    setFormData({
      badge_name: rowData.badge_name,
      image_path: rowData.image_path,
      description: rowData.description,
      status: rowData.status
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };



  const handleSave = () => {
    if (!selectedRow) return;

    // Prepare the updated data
    const updatedData = {
      badge_name: formData.badge_name,
      image_path: formData.image_path,
      description: formData.description,
      status: formData.status
    };

    // Make a PUT request to update the data
    axios.put(`https://crmapi.devcir.co/api/badges/${selectedRow.id}`, updatedData)
      .then(response => {
        console.log('Record updated successfully:', response.data);
        // Update the corresponding row in the UI
        setBadges(badges.map(badge =>
          badge.id === selectedRow.id ? { ...badge, ...updatedData } : badge
        ));
        setSelectedRow(null); // Clear selectedRow state
      })
      .catch(error => {
        console.error('Failed to update record:', error);
      });
  };


  const handleDescriptionChange = (event) => {
    setBadgeDescription(event.target.value);
  };

  const handleDelete = () => {
    if (!selectedRow) return;

    axios.delete(`https://crmapi.devcir.co/api/badges/${selectedRow.id}`)
      .then(response => {
        console.log('Record deleted successfully');
        setMySalesOfficer(mySalesOfficer.filter(agent => agent.id !== selectedRow.id));
        setSelectedRow(null);
        window.location.reload()
      })
      .catch(error => {
        console.error('Failed to delete record:', error);
      });
  };


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
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


            <div className="mt-12">

              <label htmlFor="modal-1" className="flex mt-8 mr-6 items-center p-4 ml-auto  bg-gray-400 hover:bg-[#305b4c] hover:text-white hover:border-white/40 dark:text-white dark:hover:bg-gray-600 dark:bg-[#305b4c]  border rounded-md cursor-pointer w-72 border-black/40 hover:border-2">
                <span htmlFor="modal-1" className="ml-8 text-lg font-bold">Add New Badge</span>
                <FaPlusCircle className="w-6 h-6 ml-8" />
              </label>

              {/* Render your table with mySalesOfficer data */}
              <div className="flex h-screen">
                <div className="container mx-auto">
                  <table className="w-[90%] mx-auto mt-8 border border-solid table-auto">
                    <thead>
                      <tr className="text-white bg-[#305b4c] dark:bg-[#072D20]">
                        <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Badge Name</th>
                        <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Image Path</th>
                        <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Badge Description</th>
                        <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Badge Status</th>
                        <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white" >Created At</th>
                        <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Action</th>
                      </tr>
                    </thead>

                    {badges.filter(item => item.status === 'activated').map((item, index) => (
                      <tr className="bg-black/65" key={index}>

                        <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-100/10">{item.badge_name}</td>

                        <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-100/10"><img src={item.image_path} alt="Uploaded" className="w-32 h-32 ml-auto mr-auto" /></td>




                        <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-100/10">{item.description}</td>
                        <td className={`px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-100/10`}>{item.status}</td>

                        {/* <td className="px-4 py-2 text-center text-white border-2 border-white">{item.created_at}</td> */}

                        <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-100/10">{formatDate(item.created_at)}</td>

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
                  <div className="flex flex-col w-full gap-5 overflow-hidden modal-content p-7 bg-[#B2BEBA]">
                    <label htmlFor="modal-1" className="absolute btn btn-sm btn-circle btn-ghost text-black hover:text-white right-2 top-2">✕</label>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-2xl font-semibold text-center dark:text-gray-800">Add New Badge</h2>
                      <p className="max-w-xs mx-auto text-sm text-content dark:text-gray-800">Enter Badge Details</p>
                    </div>
                    <section>

                      <form onSubmit={handle_New_Badge}>
                        <div className="form-group">
                          <div className="form-field">
                            <label className="font-semibold form-label text-black">Badge Name</label>
                            <input placeholder="Type here" type="text" className="max-w-full input bg-transparent text-gray-800" value={badgeName} onChange={(e) => setBadgeName(e.target.value)} name="first_name" />
                            <label className="form-label">
                              <span className="form-label-alt text-black">Enter badge name</span>
                            </label>
                          </div>

                          <div className="form-field">
                            <label className="font-semibold form-label text-black">Image Path</label>

                            <input type="file" accept="image/*" onChange={handleImageUpload} className="bg-transparent" />
                            <label className="form-label text-black">
                            </label>
                          </div>

                          <div className="form-field">
                            <label className="font-semibold form-label text-black">Badge Description</label>
                            <textarea
                              value={badgeDescription}
                              onChange={handleDescriptionChange}
                              rows={3}
                              cols={45}
                              placeholder="Type description"
                              className="border rounded-xl p-1 border-black bg-transparent dark:bg-[#B2BEBA] dark:text-gray-800 text-black"
                            />
                            <label className="form-label">
                              <span className="form-label-alt text-black">Please enter a description.</span>
                            </label>
                          </div>


                          <div className="form-field" >
                            <label htmlFor="status">Status:</label>
                            <select id="status" value={status} onChange={handleStatusChange} className="bg-transparent dark:text-gray-800 border dark:border-gray-800">
                              <option value="activated">Activated</option>
                              <option value="deactivated">Deactivated</option>
                            </select>
                          </div>


                          <div className="pt-5 form-field">
                            <div className="justify-between form-control">
                              <button type="submit" className="w-full btn btn-primary bg-[#26473c] hover:bg-[#072D20] dark:bg-gray-800 dark:hover:bg-gray-600">Create Badge</button>
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
                          <h2 className="mt-8 text-xl text-center"><b>Updating: </b>{selectedRow.badge_name}</h2>
                          <label className="font-bold text-md text-black">Badge Name:
                            <input type="text" className="p-2 ml-4 font-normal border border-gray-300" name="badge_name" value={formData.badge_name} onChange={handleInputChange} />
                          </label>

                          {/* <label className="font-bold text-md">Image Path:
            <input type="text" className="p-2 ml-4 font-normal" name="image_path" value={formData.image_path} onChange={handleInputChange} />
        </label> */}

                          <div className="form-field">
                            <label className="font-semibold form-label">Image Path</label>
                            <input type="file" accept="image/*" onChange={handleImageUpdate} />
                            <label className="form-label"></label>


                          </div>


                          <label className="font-bold text-md">Badge Description:
                            <input type="text" className="p-2 ml-4 font-normal border border-gray-300" name="description" value={formData.description} onChange={handleInputChange} />
                          </label>

                          {/* <label className="font-bold text-md">Status:
            <input type="text" className="p-2 ml-4 font-normal" name="status" value={formData.status} onChange={handleInputChange} />
        </label> */}

                          <label className="font-bold text-md">Status:
                            <select className="p-2 ml-4 font-normal border border-gray-300" name="status" value={formData.status} onChange={handleInputChange}>
                              <option value="approved">activated</option>
                              <option value="pending">deactivated</option>
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