
import React, { useEffect } from "react";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";


import "./App.css";

import {
  Calendar,
  //  Employees,
  Stacked,
  Pyramid,
  // Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";




import { useStateContext } from "./contexts/ContextProvider";




export default function Only_Dashboard() {

  // All Dashboard //

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






  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        type: 'line',
        label: 'Line Dataset',
        data: [90, 100, 70, 85, 75, 95, 100, 85, 90, 100, 95, 85],
        borderColor: 'gray',
        borderWidth: 2,
        fill: false,
      },
      {
        type: 'bar',
        label: 'Bar Dataset',
        data: [80, 90, 60, 80, 70, 90, 95, 80, 85, 95, 90, 80],
        backgroundColor: '#072D20',
        borderColor: 'darkgreen',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
        ticks: {
          beginAtZero: true,
          max: 100,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };




  return (
    <>



      <div className={currentMode === "Dark" ? "dark" : ""}>
        <div className="relative flex dark:bg-main-dark-bg">
          {/* <div className="fixed hidden right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="hidden p-3 text-3xl text-w hover:drop-shadow-xl hover:bg-light-gray"
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





              {/* 
<div class="ml-auto mr-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">


    <div class="px-0 pt-6 2xl:container">
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div class="md:col-span-2 lg:col-span-1" >
                <div class="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                    <svg class="w-40 m-auto opacity-75" viewBox="0 0 146 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M73.1866 5.7129C81.999 5.7129 90.725 7.44863 98.8666 10.821C107.008 14.1933 114.406 19.1363 120.637 25.3675C126.868 31.5988 131.811 38.9964 135.184 47.138C138.556 55.2796 140.292 64.0057 140.292 72.818C140.292 81.6304 138.556 90.3565 135.184 98.4981C131.811 106.64 126.868 114.037 120.637 120.269C114.406 126.5 107.008 131.443 98.8666 134.815C90.725 138.187 81.999 139.923 73.1866 139.923C64.3742 139.923 55.6481 138.187 47.5066 134.815C39.365 131.443 31.9674 126.5 25.7361 120.269C19.5048 114.037 14.5619 106.64 11.1895 98.4981C7.81717 90.3565 6.08144 81.6304 6.08144 72.818C6.08144 64.0057 7.81717 55.2796 11.1895 47.138C14.5619 38.9964 19.5048 31.5988 25.7361 25.3675C31.9674 19.1363 39.365 14.1933 47.5066 10.821C55.6481 7.44863 64.3742 5.7129 73.1866 5.7129L73.1866 5.7129Z" stroke="#e4e4f2" stroke-width="4.89873"/>
                        <path d="M73.5 23.4494C79.9414 23.4494 86.3198 24.7181 92.2709 27.1831C98.222 29.6482 103.629 33.2612 108.184 37.816C112.739 42.3707 116.352 47.778 118.817 53.7291C121.282 59.6802 122.551 66.0586 122.551 72.5C122.551 78.9414 121.282 85.3198 118.817 91.2709C116.352 97.222 112.739 102.629 108.184 107.184C103.629 111.739 98.222 115.352 92.2709 117.817C86.3198 120.282 79.9414 121.551 73.5 121.551C67.0586 121.551 60.6802 120.282 54.7291 117.817C48.778 115.352 43.3707 111.739 38.816 107.184C34.2612 102.629 30.6481 97.222 28.1831 91.2709C25.7181 85.3198 24.4494 78.9414 24.4494 72.5C24.4494 66.0586 25.7181 59.6802 28.1831 53.7291C30.6481 47.778 34.2612 42.3707 38.816 37.816C43.3707 33.2612 48.778 29.6481 54.7291 27.1831C60.6802 24.7181 67.0586 23.4494 73.5 23.4494L73.5 23.4494Z" stroke="#e4e4f2" stroke-width="4.89873"/>
                        <path d="M73 24C84.3364 24 95.3221 27.9307 104.085 35.1225C112.848 42.3142 118.847 52.322 121.058 63.4406C123.27 74.5592 121.558 86.1006 116.214 96.0984C110.87 106.096 102.225 113.932 91.7515 118.27C81.278 122.608 69.6243 123.181 58.7761 119.89C47.9278 116.599 38.5562 109.649 32.258 100.223C25.9598 90.7971 23.1248 79.479 24.2359 68.1972C25.3471 56.9153 30.3357 46.3678 38.3518 38.3518" stroke="url(#paint0_linear_622:13617)" stroke-width="10" stroke-linecap="round"/>
                        <path d="M73 5.00001C84.365 5.00001 95.5488 7.84852 105.529 13.2852C115.509 18.7218 123.968 26.5732 130.131 36.1217C136.295 45.6702 139.967 56.6112 140.812 67.9448C141.657 79.2783 139.648 90.6429 134.968 101C130.288 111.357 123.087 120.375 114.023 127.232C104.96 134.088 94.3218 138.563 83.0824 140.248C71.8431 141.933 60.3606 140.775 49.6845 136.878C39.0085 132.981 29.4793 126.471 21.9681 117.942" stroke="url(#paint1_linear_622:13617)" stroke-width="10" stroke-linecap="round"/>
                        <path d="M9.60279 97.5926C6.37325 89.2671 4.81515 80.3871 5.01745 71.4595C5.21975 62.5319 7.1785 53.7316 10.7818 45.561C14.3852 37.3904 19.5626 30.0095 26.0184 23.8398C32.4742 17.6701 40.082 12.8323 48.4075 9.6028" stroke="url(#paint2_linear_622:13617)" stroke-width="10" stroke-linecap="round"/>
                        <path d="M73 5.00001C86.6504 5.00001 99.9849 9.10831 111.269 16.7904" stroke="url(#paint3_linear_622:13617)" stroke-width="10" stroke-linecap="round"/>
                        <circle cx="73.5" cy="72.5" r="29" fill="#e4e4f2" stroke="#e4e4f2"/>
                        <path d="M74 82.8332C68.0167 82.8332 63.1666 77.9831 63.1666 71.9998C63.1666 66.0166 68.0167 61.1665 74 61.1665C79.9832 61.1665 84.8333 66.0166 84.8333 71.9998C84.8333 77.9831 79.9832 82.8332 74 82.8332ZM74 80.6665C76.2985 80.6665 78.5029 79.7534 80.1282 78.1281C81.7535 76.5028 82.6666 74.2984 82.6666 71.9998C82.6666 69.7013 81.7535 67.4969 80.1282 65.8716C78.5029 64.2463 76.2985 63.3332 74 63.3332C71.7014 63.3332 69.497 64.2463 67.8717 65.8716C66.2464 67.4969 65.3333 69.7013 65.3333 71.9998C65.3333 74.2984 66.2464 76.5028 67.8717 78.1281C69.497 79.7534 71.7014 80.6665 74 80.6665ZM70.75 67.6665H77.25L79.9583 71.4582L74 77.4165L68.0416 71.4582L70.75 67.6665ZM71.8658 69.8332L70.8691 71.2307L74 74.3615L77.1308 71.2307L76.1341 69.8332H71.8658Z" fill="#6A6A9F"/>
                        <defs>
                        <linearGradient id="paint0_linear_622:13617" x1="45.9997" y1="19" x2="46.0897" y2="124.308" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E323FF"/>
                        <stop offset="1" stop-color="#7517F8"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_622:13617" x1="1.74103e-06" y1="8.70228e-06" x2="6.34739e-08" y2="140.677" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4DFFDF"/>
                        <stop offset="1" stop-color="#4DA1FF"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_622:13617" x1="36.4997" y1="5.07257e-06" x2="36.6213" y2="142.36" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFD422"/>
                        <stop offset="1" stop-color="#FF7D05"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_622:13617" x1="1.74103e-06" y1="8.70228e-06" x2="6.34739e-08" y2="140.677" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4DFFDF"/>
                        <stop offset="1" stop-color="#4DA1FF"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <div>
                        <h5 class="text-xl text-gray-600 text-center">Global Activities</h5>
                        <div class="mt-2 flex justify-center gap-4">
                            <h3 class="text-3xl font-bold text-gray-700">$23,988</h3>
                            <div class="flex items-end gap-1 text-green-500">
                                <svg class="w-3" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z" fill="currentColor"/>
                                </svg>
                                <span>2%</span>
                            </div>
                        </div>
                        <span class="block text-center text-gray-500">Compared to last week $13,988</span>
                    </div>
                    <table class="w-full text-gray-600">
                        <tbody>
                            <tr>
                                <td class="py-2">Tailored ui</td>
                                <td class="text-gray-500">896</td>
                                <td>
                                    <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                        <path d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5" stroke="url(#paint0_linear_622:13631)" stroke-width="2" stroke-linejoin="round"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_622:13631" x1="68" y1="7.74997" x2="1.69701" y2="8.10029" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E323FF"/>
                                        <stop offset="1" stop-color="#7517F8"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                </td>   
                            </tr>
                            <tr>
                                <td class="py-2">Customize</td>
                                <td class="text-gray-500">1200</td>
                                <td>
                                    <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                        <path d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5" stroke="url(#paint0_linear_622:13640)" stroke-width="2" stroke-linejoin="round"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_622:13640" x1="34" y1="5" x2="34" y2="15.9524" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#8AFF6C"/>
                                        <stop offset="1" stop-color="#02C751"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                </td>   
                            </tr>
                            <tr>
                                <td class="py-2">Other</td>
                                <td class="text-gray-500">12</td>
                                <td>
                                    <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                        <path d="M0 6C8.62687 6 6.85075 12.75 17 12.75C27.1493 12.75 25.3731 9 34 9C42.6269 9 42.262 13.875 49 13.875C55.5398 13.875 58.3731 6 67 6" stroke="url(#paint0_linear_622:13649)" stroke-width="2" stroke-linejoin="round"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_622:13649" x1="67" y1="7.96873" x2="1.67368" y2="8.44377" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFD422"/>
                                        <stop offset="1" stop-color="#FF7D05"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                </td>   
                            </tr>
                        </tbody>
                    </table> 
                </div>
            </div>
            <div>
                <div class="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
                    <h5 class="text-xl text-gray-700">Downloads</h5>
                    <div class="my-8">
                        <h1 class="text-5xl font-bold text-gray-800">64,5%</h1>
                        <span class="text-gray-500">Compared to last week $13,988</span>
                    </div>
                    <svg class="w-full" viewBox="0 0 218 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 67.5C27.8998 67.5 24.6002 15 52.5 15C80.3998 15 77.1002 29 105 29C132.9 29 128.6 52 156.5 52C184.4 52 189.127 63.8158 217.027 63.8158" stroke="url(#paint0_linear_622:13664)" stroke-width="3" stroke-linecap="round"/>
                        <path d="M0 67.5C27.2601 67.5 30.7399 31 58 31C85.2601 31 80.7399 2 108 2C135.26 2 134.74 43 162 43C189.26 43 190.74 63.665 218 63.665" stroke="url(#paint1_linear_622:13664)" stroke-width="3" stroke-linecap="round"/>
                        <defs>
                        <linearGradient id="paint0_linear_622:13664" x1="217.027" y1="15" x2="7.91244" y2="15" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4DFFDF"/>
                        <stop offset="1" stop-color="#4DA1FF"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_622:13664" x1="218" y1="18.3748" x2="5.4362" y2="18.9795" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E323FF"/>
                        <stop offset="1" stop-color="#7517F8"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <table class="mt-6 -mb-2 w-full text-gray-600">
                        <tbody>
                            <tr>
                                <td class="py-2">From new users</td>
                                <td class="text-gray-500">896</td>
                                <td>
                                    <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                        <path d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5" stroke="url(#paint0_linear_622:13631)" stroke-width="2" stroke-linejoin="round"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_622:13631" x1="68" y1="7.74997" x2="1.69701" y2="8.10029" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E323FF"/>
                                        <stop offset="1" stop-color="#7517F8"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                </td>   
                            </tr>
                            <tr>
                                <td class="py-2">From old users</td>
                                <td class="text-gray-500">1200</td>
                                <td>
                                    <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                        <path d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5" stroke="url(#paint0_linear_622:13640)" stroke-width="2" stroke-linejoin="round"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_622:13640" x1="34" y1="5" x2="34" y2="15.9524" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#8AFF6C"/>
                                        <stop offset="1" stop-color="#02C751"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                </td>   
                            </tr>
                        </tbody>
                    </table>   
                </div>
            </div>
            <div>
                <div class="lg:h-full py-8 px-6 text-gray-600 rounded-xl border border-gray-200 bg-white">
                    <svg class="w-40 m-auto" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.9985 2.84071C31.2849 2.84071 34.539 3.488 37.5752 4.74562C40.6113 6.00324 43.3701 7.84657 45.6938 10.1703C48.0176 12.4941 49.861 15.2529 51.1186 18.289C52.3762 21.3252 53.0235 24.5793 53.0235 27.8657C53.0235 31.152 52.3762 34.4061 51.1186 37.4423C49.861 40.4785 48.0176 43.2372 45.6938 45.561C43.3701 47.8848 40.6113 49.7281 37.5752 50.9857C34.539 52.2433 31.2849 52.8906 27.9985 52.8906C24.7122 52.8906 21.4581 52.2433 18.4219 50.9857C15.3857 49.7281 12.627 47.8848 10.3032 45.561C7.97943 43.2372 6.1361 40.4785 4.87848 37.4423C3.62086 34.4061 2.97357 31.152 2.97357 27.8657C2.97357 24.5793 3.62086 21.3252 4.87848 18.289C6.13611 15.2529 7.97943 12.4941 10.3032 10.1703C12.627 7.84656 15.3857 6.00324 18.4219 4.74562C21.4581 3.488 24.7122 2.84071 27.9985 2.84071L27.9985 2.84071Z" stroke="#e4e4f2" stroke-width="3"/>
                        <path d="M27.301 2.50958C33.0386 2.35225 38.6614 4.13522 43.26 7.57004C47.8585 11.0049 51.1637 15.8907 52.641 21.437C54.1182 26.9834 53.6811 32.8659 51.4002 38.133C49.1194 43.4001 45.1283 47.7437 40.0726 50.4611C35.0169 53.1785 29.1923 54.1108 23.541 53.1071C17.8897 52.1034 12.7423 49.2225 8.93145 44.9305C5.12062 40.6384 2.86926 35.1861 2.54159 29.4558C2.21391 23.7254 3.82909 18.0521 7.12582 13.3536" stroke="url(#paint0_linear_622:13696)" stroke-width="5" stroke-linecap="round"/>
                        <path d="M13.3279 30.7467C13.3912 29.48 13.8346 28.5047 14.6579 27.8207C15.4939 27.124 16.5896 26.7757 17.9449 26.7757C18.8696 26.7757 19.6612 26.9404 20.3199 27.2697C20.9786 27.5864 21.4726 28.0234 21.8019 28.5807C22.1439 29.1254 22.3149 29.746 22.3149 30.4427C22.3149 31.2407 22.1059 31.9184 21.6879 32.4757C21.2826 33.0204 20.7949 33.3877 20.2249 33.5777V33.6537C20.9596 33.8817 21.5296 34.287 21.9349 34.8697C22.3529 35.4524 22.5619 36.1997 22.5619 37.1117C22.5619 37.8717 22.3846 38.5494 22.0299 39.1447C21.6879 39.74 21.1749 40.2087 20.4909 40.5507C19.8196 40.88 19.0089 41.0447 18.0589 41.0447C16.6276 41.0447 15.4622 40.6837 14.5629 39.9617C13.6636 39.2397 13.1886 38.1757 13.1379 36.7697H15.7219C15.7472 37.3904 15.9562 37.8907 16.3489 38.2707C16.7542 38.638 17.3052 38.8217 18.0019 38.8217C18.6479 38.8217 19.1419 38.6444 19.4839 38.2897C19.8386 37.9224 20.0159 37.4537 20.0159 36.8837C20.0159 36.1237 19.7752 35.579 19.2939 35.2497C18.8126 34.9204 18.0652 34.7557 17.0519 34.7557H16.5009V32.5707H17.0519C18.8506 32.5707 19.7499 31.969 19.7499 30.7657C19.7499 30.221 19.5852 29.7967 19.2559 29.4927C18.9392 29.1887 18.4769 29.0367 17.8689 29.0367C17.2736 29.0367 16.8112 29.2014 16.4819 29.5307C16.1652 29.8474 15.9816 30.2527 15.9309 30.7467H13.3279ZM25.6499 37.9477C26.8659 36.9344 27.8349 36.092 28.5569 35.4207C29.2789 34.7367 29.8806 34.0274 30.3619 33.2927C30.8433 32.558 31.0839 31.836 31.0839 31.1267C31.0839 30.4807 30.9319 29.974 30.6279 29.6067C30.3239 29.2394 29.8553 29.0557 29.2219 29.0557C28.5886 29.0557 28.1009 29.271 27.7589 29.7017C27.4169 30.1197 27.2396 30.696 27.2269 31.4307H24.6429C24.6936 29.9107 25.1433 28.758 25.9919 27.9727C26.8533 27.1874 27.9426 26.7947 29.2599 26.7947C30.7039 26.7947 31.8123 27.181 32.5849 27.9537C33.3576 28.7137 33.7439 29.7207 33.7439 30.9747C33.7439 31.9627 33.4779 32.9064 32.9459 33.8057C32.4139 34.705 31.8059 35.4904 31.1219 36.1617C30.4379 36.8204 29.5449 37.6184 28.4429 38.5557H34.0479V40.7597H24.6619V38.7837L25.6499 37.9477Z" fill="currentColor"/>
                        <path d="M36.1948 28.8842C36.1948 29.4438 36.2557 29.8634 36.3775 30.1432C36.4992 30.423 36.6967 30.5628 36.9699 30.5628C37.5097 30.5628 37.7796 30.0033 37.7796 28.8842C37.7796 27.7717 37.5097 27.2155 36.9699 27.2155C36.6967 27.2155 36.4992 27.3537 36.3775 27.6302C36.2557 27.9067 36.1948 28.3247 36.1948 28.8842ZM38.456 28.8842C38.456 29.6347 38.3293 30.2024 38.0758 30.5875C37.8257 30.9693 37.457 31.1602 36.9699 31.1602C36.5091 31.1602 36.1504 30.9644 35.8936 30.5727C35.6402 30.181 35.5135 29.6182 35.5135 28.8842C35.5135 28.1371 35.6352 27.5742 35.8788 27.1957C36.1257 26.8172 36.4894 26.6279 36.9699 26.6279C37.4472 26.6279 37.8142 26.8238 38.0709 27.2155C38.3276 27.6071 38.456 28.1634 38.456 28.8842ZM40.5395 31.7774C40.5395 32.3402 40.6003 32.7615 40.7221 33.0413C40.8439 33.3178 41.043 33.456 41.3195 33.456C41.596 33.456 41.8001 33.3194 41.9317 33.0462C42.0634 32.7697 42.1292 32.3468 42.1292 31.7774C42.1292 31.2145 42.0634 30.7982 41.9317 30.5283C41.8001 30.2551 41.596 30.1185 41.3195 30.1185C41.043 30.1185 40.8439 30.2551 40.7221 30.5283C40.6003 30.7982 40.5395 31.2145 40.5395 31.7774ZM42.8056 31.7774C42.8056 32.5245 42.6789 33.0906 42.4254 33.4757C42.1753 33.8575 41.8067 34.0484 41.3195 34.0484C40.8521 34.0484 40.4917 33.8526 40.2383 33.4609C39.9881 33.0693 39.8631 32.5081 39.8631 31.7774C39.8631 31.0302 39.9849 30.4674 40.2284 30.0889C40.4753 29.7104 40.839 29.5211 41.3195 29.5211C41.7869 29.5211 42.1506 29.7153 42.4106 30.1037C42.6739 30.4888 42.8056 31.0467 42.8056 31.7774ZM41.5318 26.7316L37.5278 33.9497H36.8021L40.8061 26.7316H41.5318Z" fill="white"/>
                        <path d="M23.5776 18.4198H25.5424V22.8407H23.5776V18.4198ZM30.4545 16.455H32.4193V22.8407H30.4545V16.455ZM27.0161 13.5078H28.9809V22.8407H27.0161V13.5078Z" fill="#6A6A9F"/>
                        <defs>
                        <linearGradient id="paint0_linear_622:13696" x1="5.54791e-07" y1="42.0001" x2="54.6039" y2="41.9535" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E323FF"/>
                        <stop offset="1" stop-color="#7517F8"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <div class="mt-6">
                        <h5 class="text-xl text-gray-700 text-center">Ask to customize</h5>
                        <div class="mt-2 flex justify-center gap-4">
                            <h3 class="text-3xl font-bold text-gray-700">28</h3>
                            <div class="flex items-end gap-1 text-green-500">
                                <svg class="w-3" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z" fill="currentColor"/>
                                </svg>
                                <span>2%</span>
                            </div>
                        </div>
                        <span class="block text-center text-gray-500">Compared to last week 13</span>
                    </div>
                    <table class="mt-6 -mb-2 w-full text-gray-600">
                        <tbody>
                            <tr>
                                <td class="py-2">Tailored ui</td>
                                <td class="text-gray-500">896</td>
                                <td>
                                    <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                        <path d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5" stroke="url(#paint0_linear_622:13631)" stroke-width="2" stroke-linejoin="round"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_622:13631" x1="68" y1="7.74997" x2="1.69701" y2="8.10029" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E323FF"/>
                                        <stop offset="1" stop-color="#7517F8"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                </td>   
                            </tr>
                            <tr>
                                <td class="py-2">Customize</td>
                                <td class="text-gray-500">1200</td>
                                <td>
                                    <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                        <path d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5" stroke="url(#paint0_linear_622:13640)" stroke-width="2" stroke-linejoin="round"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_622:13640" x1="34" y1="5" x2="34" y2="15.9524" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#8AFF6C"/>
                                        <stop offset="1" stop-color="#02C751"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                </td>   
                            </tr>
                            <tr>
                                <td class="py-2">Other</td>
                                <td class="text-gray-500">12</td>
                                <td>
                                    <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                        <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                        <path d="M0 6C8.62687 6 6.85075 12.75 17 12.75C27.1493 12.75 25.3731 9 34 9C42.6269 9 42.262 13.875 49 13.875C55.5398 13.875 58.3731 6 67 6" stroke="url(#paint0_linear_622:13649)" stroke-width="2" stroke-linejoin="round"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_622:13649" x1="67" y1="7.96873" x2="1.67368" y2="8.44377" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFD422"/>
                                        <stop offset="1" stop-color="#FF7D05"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                </td>   
                            </tr>
                        </tbody>
                    </table>   
                </div>
            </div>
        </div>
    </div>
</div> */}




              <div className="flex min-h-screen p-4 justify-center dark:bg-[#1a1a1a6b]">



                <div className="w-full p-4 rounded-lg">
                  <header className="flex items-center justify-between mb-4">


                  </header>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-100 dark:bg-[#B2BEBA] p-4 rounded-lg text-center">
                      <h3 className="text-gray-600 dark:text-black">Weekly Earnings</h3>
                      <p className="text-2xl font-bold">$2500</p>
                      <p className="text-green-500 dark:text-[#072D20]">+12.5% increase in last week</p>
                      <div className="relative pt-2">
                        <div className="w-full h-2 bg-gray-300 rounded ">
                          <div
                            className="h-2 bg-yellow-400 rounded dark:bg-yellow-500"
                            style={{ width: '60%' }}
                          ></div>
                        </div>
                        <p className="mt-2 text-sm text-gray-600 dark:text-black">60%</p>
                      </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-[#B2BEBA] p-4 rounded-lg text-center">
                      <h3 className="text-gray-600 dark:text-black">Monthly Earnings</h3>
                      <p className="text-2xl font-bold">$9000</p>
                      <p className="text-green-500 dark:text-[#072D20]">+7% increase in last month</p>
                      <div className="relative pt-2">
                        <div className="w-full h-2 bg-gray-300 rounded">
                          <div
                            className="h-2 bg-yellow-500 rounded dark:bg-yellow-500"
                            style={{ width: '70%' }}
                          ></div>
                        </div>
                        <p className="mt-2 text-sm text-gray-600 dark:text-black">70%</p>
                      </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-[#B2BEBA] p-4 rounded-lg text-center">
                      <h3 className="text-gray-600 dark:text-black">Yearly Earnings</h3>
                      <p className="text-2xl font-bold">$100000</p>
                      <p className="text-green-500 dark:text-[#072D20]">+20% increase in last year</p>
                      <div className="relative pt-2">
                        <div className="w-full h-2 bg-gray-300 rounded">
                          <div
                            className="h-2 bg-yellow-500 rounded dark:bg-yellow-500"
                            style={{ width: '80%' }}
                          ></div>
                        </div>
                        <p className="mt-2 text-sm text-gray-600 dark:text-black">80%</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-100 dark:bg-[#B2BEBA] p-4 rounded-lg">
                      <h3 className="text-gray-600 dark:text-black">Total Earnings</h3>

                      {/* card */}

                      <div className="p-6 bg-gray-100 dark:bg-[#B2BEBA]">
                        <div className="flex flex-col  bg-[#072D20] text-white p-6 rounded-lg mb-4">
                          <div className="text-4xl font-bold">$9000</div>
                          <div className="text-lg">Total Commission</div>
                          <div className="text-sm">Compared to $27,000 last month</div>
                          <div className="px-2 py-1 mt-2 text-xs bg-green-700 rounded">▲ 2.5%</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="flex flex-col items-center">
                            <div className="relative">
                              <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                                <span className="text-2xl font-bold">78%</span>
                              </div>
                              <svg className="w-24 h-24">
                                <circle cx="50%" cy="50%" r="40%" strokeWidth="10" stroke="#d1d5db" fill="none"></circle>
                                <circle cx="50%" cy="50%" r="40%" strokeWidth="10" stroke="#16a34a" fill="none" strokeDasharray="251.2" strokeDashoffset="55.26" transform="rotate(-90 50 50)"></circle>
                              </svg>
                            </div>
                            <div className="text-xl">$8500</div>
                            <div className="text-sm">Commission</div>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="relative">
                              <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                                <span className="text-2xl font-bold">15%</span>
                              </div>
                              <svg className="w-24 h-24">
                                <circle cx="50%" cy="50%" r="40%" strokeWidth="10" stroke="#d1d5db" fill="none"></circle>
                                <circle cx="50%" cy="50%" r="40%" strokeWidth="10" stroke="#A5B85A" fill="none" strokeDasharray="251.2" strokeDashoffset="213.52" transform="rotate(-90 50 50)"></circle>
                              </svg>
                            </div>
                            <div className="text-xl">$500</div>
                            <div className="text-sm">SPIFFS</div>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="relative">
                              <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                                <span className="text-2xl font-bold">6%</span>
                              </div>
                              <svg className="w-24 h-24">
                                <circle cx="50%" cy="50%" r="40%" strokeWidth="10" stroke="#d1d5db" fill="none"></circle>
                                <circle cx="50%" cy="50%" r="40%" strokeWidth="10" stroke="#EBBD38" fill="none" strokeDasharray="251.2" strokeDashoffset="236.128" transform="rotate(-90 50 50)"></circle>
                              </svg>
                            </div>
                            <div className="text-xl">$100</div>
                            <div className="text-sm">Adjustments</div>
                          </div>
                        </div>
                      </div>

                      {/* card */}

                      <p className="text-3xl font-bold">$9000</p>
                      <p className="text-gray-600 dark:text-black">Comparison with $45000 last year</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg dark:bg-[#B2BEBA]">
                      <h3 className="text-gray-600 dark:text-black">Current Week</h3>
                      <p className="text-3xl font-bold">$8500</p>
                      <p className="text-gray-600 dark:text-black">Day by Day Report</p>
                      <p className="text-gray-600 dark:text-black">Detailed Report below</p>


                      {/* card */}

                      <div className="flex flex-col  bg-[#072D20] text-white p-6 rounded-lg mb-4 mt-10">
                        <div className="text-4xl font-bold">$85000</div>
                        <div className="text-lg">Total Commission</div>
                        <div className="text-sm">Compared to $27,000 last month</div>
                        <div className="px-2 py-1 mt-2 text-xs bg-green-700 rounded">▲ 2.5%</div>
                      </div>


                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center">
                          <div className="relative">
                            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                              <span className="text-2xl font-bold">78%</span>
                            </div>
                            <svg className="w-24 h-24">
                              <circle cx="50%" cy="50%" r="40%" strokeWidth="10" stroke="#d1d5db" fill="none"></circle>
                              <circle cx="50%" cy="50%" r="40%" strokeWidth="10" stroke="#16a34a" fill="none" strokeDasharray="251.2" strokeDashoffset="55.26" transform="rotate(-90 50 50)"></circle>
                            </svg>
                          </div>
                          <div className="text-xl">$8500</div>
                          <div className="text-sm">Commission</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="relative">
                            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                              <span className="text-2xl font-bold">15%</span>
                            </div>
                            <svg className="w-24 h-24">
                              <circle cx="50%" cy="50%" r="40%" strokeWidth="10" stroke="#d1d5db" fill="none"></circle>
                              <circle cx="50%" cy="50%" r="40%" strokeWidth="10" stroke="#A5B85A" fill="none" strokeDasharray="251.2" strokeDashoffset="213.52" transform="rotate(-90 50 50)"></circle>
                            </svg>
                          </div>
                          <div className="text-xl">$500</div>
                          <div className="text-sm">SPIFFS</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="relative">
                            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                              <span className="text-2xl font-bold">6%</span>
                            </div>
                            <svg className="w-24 h-24">
                              <circle cx="50%" cy="50%" r="40%" strokeWidth="10" stroke="#d1d5db" fill="none"></circle>
                              <circle cx="50%" cy="50%" r="40%" strokeWidth="10" stroke="#EBBD38" fill="none" strokeDasharray="251.2" strokeDashoffset="236.128" transform="rotate(-90 50 50)"></circle>
                            </svg>
                          </div>
                          <div className="text-xl">$100</div>
                          <div className="text-sm">Adjustments</div>
                        </div>
                      </div>

                      {/* card */}


                    </div>
                  </div>
                  <div className="bg-gray-100 dark:bg-[#B2BEBA] p-4 rounded-lg mb-6">
                    <h3 className="mb-4 text-gray-600 dark:text-black">Commission Ranking</h3>

                    {/* Chart */}

                    <Bar data={data} options={options} />

                    {/* Chart */}
                    {/* <Line data={lineChartData} options={lineChartOptions} /> */}
                  </div>
                  <div className="bg-[#679b89] p-4 rounded-lg mb-6">
                    <h3 className="mb-4 text-black">SPFT Summary</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <h4 className="text-lg font-bold">SPFT Rank</h4>
                        <p className="text-3xl">3<sup>rd</sup></p>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">Points</h4>
                        <p className="text-3xl">850</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">Cash Earned</h4>
                        <p className="text-3xl">$500</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 text-xl font-semibold">Points Ranking</h3>
                    <div className="bg-gray-100 dark:bg-[#B2BEBA] p-4 rounded-lg">
                      <div className="flex justify-between mb-4">
                        <span className="text-gray-600 dark:text-black">Rank</span>
                        <div className="flex space-x-2">
                          <button className="bg-[#B2BEBA] text-[#072D20] p-1 rounded">Week</button>
                          <button className="bg-[#B2BEBA] p-1 rounded text-[#072D20]">Month</button>
                          <button className="bg-[#B2BEBA] p-1 rounded text-[#072D20]">Year</button>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {[
                          { name: 'Jack Williams', earnings: 18000, image: 'https://s3-alpha-sig.figma.com/img/62b2/de86/3e5c02d1c4d27a7ec3537a08183734bc?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DMYG1PgxzsvNT6usLqPgm~WZIyOqVLPhSKWICK6oTG72-22VvbioUrAgmR8ow4VGwGYOsjor3t3S2ucB81pYNEGPL489dm2SR3w2Ua~QEEv8b3qG-rqAIreHu2cdc3zZu7YSThVsVLuXR7MgUwlHGgKqM0JhZ~s~ehfaBdZxKog8N8Buyusk4GooeEXeLg4NiIZPFPTwfzB7SesiJx27I9LOsevEjpyQLS7IC-nOqaDqkRKyxqDJBmQiOvA1WqV7Xgfw5V9kNynR5Pog3QNeMCUMPPDI3NgFw1qYOXU3X-07i203tUwZ4nyf0PCzqz-M~GDt03IS--xxi3M8vbhZMQ__', rank: 1 },
                          { name: 'Elisa Sanchez', earnings: 17500, image: 'https://s3-alpha-sig.figma.com/img/d0b7/bdd7/10448a702ae55f979910bb4ae3034622?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qP9bp-tqbulFuRBqBE5awnaaUivhUTT9rw0hU3j9ys3loBhClM~DLNdsZdX8qzz3xkfUy2Xql6FDNw476BoN0LlLUhHzthQRGuAe0dDLMMcManrcP4yWyKpqDq9XqSqcMOle~6DJTE~zForuadOMqJwuaRftePO2FrYgTH-h5CLgoK5KH4ak7XD4bLzmy88AKbcnOVF4PHIMRL-HA6~weHc7aRxT~oMyLQnnTyhDOkSv47wMMY2zLY2g5IBkVYHIFrDhk6kIJQWrRc~UJUgSK0OTU8cdGavMFp-3Q3Jt7qTgCH0b1sVRne7ahk5Jp1QNIzx2rgNAadgx08GdhK3j2Q__', rank: 2 },
                          { name: 'Mario Fernandez', earnings: 16000, image: 'https://s3-alpha-sig.figma.com/img/7fb0/cfc1/0e87bd1e664d7d447307e274003434cd?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mNFxjuoUImt4OAcHE6hkAcZoJozVXPysCuuV~TJWkvVxSYvqyjPnntWg3LkjaK5JIKH5EJBQ3N~ChFQFFVnEyV2hVnQlhIhKQte9SAx6CNDlgayz2Eobzg0GMpK4VP1A8kP-voBZAZKX3PB5kmrs7JwNDeYhwxr9Z6Uo8UN9uOZ1zQz9pVeEMnr0c~-1YCOiGOpbHDWpDZdttXYdlTqjdwyw-ys2lANbQS-0G4wpfUBWTQHM3~taI1EU8TvYi7~e-H7xd1epvLLRSw24Xpu-XMzsfi~KJgjc1UWNMToeSuRcoYd6e9BDcmziZXlPvwy25a58cvKvfwQ1TguA1ryFuQ__', rank: 3 },
                          { name: 'Eddie Jones', earnings: 9000, image: 'https://s3-alpha-sig.figma.com/img/d0b7/bdd7/10448a702ae55f979910bb4ae3034622?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qP9bp-tqbulFuRBqBE5awnaaUivhUTT9rw0hU3j9ys3loBhClM~DLNdsZdX8qzz3xkfUy2Xql6FDNw476BoN0LlLUhHzthQRGuAe0dDLMMcManrcP4yWyKpqDq9XqSqcMOle~6DJTE~zForuadOMqJwuaRftePO2FrYgTH-h5CLgoK5KH4ak7XD4bLzmy88AKbcnOVF4PHIMRL-HA6~weHc7aRxT~oMyLQnnTyhDOkSv47wMMY2zLY2g5IBkVYHIFrDhk6kIJQWrRc~UJUgSK0OTU8cdGavMFp-3Q3Jt7qTgCH0b1sVRne7ahk5Jp1QNIzx2rgNAadgx08GdhK3j2Q__', rank: 4 },
                          { name: 'Marcus J. Schneider', earnings: 3000, image: 'https://s3-alpha-sig.figma.com/img/5c73/c6c2/83004abb594407a237b5d29e77e8f61b?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q4fgf~rWT-OPUnDBVaEoFQymxt9hjMjTsHNIPgq~0a510osCJZ8jgYeFGdwSQF14JLTBTeLee9IHbQrqrGHenvVtJdvrXv5KjAj3Ymla6S-SaGZZ-IHzMsmWyK8BRz1zbp3Ce7roCk23rgTaWuTTXT0mENzThVka~ZMx12mCQ-hJYfTPegEQDwiZ-ONmtnQdhyzzaOV9MLxa9lqKtClxqUIZjXfLfQYTRzbdgOEBEywsL4DYg3cvWBm4gFRgsMvvgFx4VsdKrGrEbUzSFE3aBZheG1r7FLYbVwOvvQQFmpimeRJ03ht7peWe4vUULO2h8Di22AtxSbyVi3goHzUH4w__', rank: 5 },
                        ].map((user) => (
                          <div key={user.rank} className="flex items-center justify-between">
                            <span className="flex items-center space-x-3">
                              <img
                                className="w-8 h-8 rounded-full"
                                src={user.image}
                                alt={user.name}
                              />
                              <span>{user.name}</span>
                            </span>
                            <span className="w-1/2 h-6 overflow-hidden bg-gray-200 rounded-full">
                              <div
                                className="h-6 border-2 border-black rounded-full "
                                style={{
                                  width: `${(user.earnings / 20000) * 100}%`,
                                  backgroundImage: 'linear-gradient(to right, #B2BEBA 40%, #072D20 80%)'

                                }}
                              ></div>
                            </span>
                            <span className="ml-4">${user.earnings}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>




              {/* <Routes>
<Route path="/My_Dashboard" element={<Main_Dashboard />} />
<Route path="/home" element={<Page1 />} />
<Route path="/Sales_Officer" element={<Page2 />} /> 
<Route path="/Sales_Agent" element={<Page3 />} /> 
<Route path="/Badge" element={<Page5/>} /> 
<Route path="/Create_Spiff_Competition" element={<Page6/>} /> 
<Route path="/Competition_Celender" element={<Page7/>} /> 
<Route path="/Teams" element={<Page8/>}/>
<Route path="/My_Celender" element={<Page9/>}/>  
<Route path="/Competition_Overview" element={<Page10/>}/>  
<Route path="/kanban" element={<Kanban />} />
<Route path="/Admin_Configuration" element={<Page4 />} /> 
<Route path="/calendar" element={<Calendar />} />
<Route path="/line" element={<Line />} />
<Route path="/area" element={<Area />} />
<Route path="/bar" element={<Bar />} />
<Route path="/pie" element={<Pie />} />
<Route path="/financial" element={<Financial />} />
<Route path="/color-mapping" element={<ColorMapping />} />
<Route path="/pyramid" element={<Pyramid />} />
<Route path="/stacked" element={<Stacked />} /> 
</Routes> */}

              {/* <div>

    <p>This is Wajid Ahmed</p>
</div> */}



















            </div>
            <Footer />
          </div>
        </div>

      </div>













    </>

  )
}