import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, LineController } from 'chart.js';
import 'tailwindcss/tailwind.css';
import { useStateContext } from "../contexts/ContextProvider";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";
import { useAdminContext } from "../contexts/AdminContextProvider";
import { useNavigate } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  LineController);

export default function Main_Dashboard() {
  const { isAdminLoggedIn } = useAdminContext();
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

  if (!isAdminLoggedIn) {
    console.log("admin is not logged in");
    navigate('/admin_login');
  }

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
            <div className="flex min-h-screen p-4 justify-center dark:bg-[#1a1a1a6b]">
              <div className="max-w-sm sm:max-w-2xl md:max-w-5xl flex flex-col lg:max-w-7xl p-4 rounded-lg">
                <header className="flex items-center justify-between mb-4">
                </header>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
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
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
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
                        { name: 'John Doene', earnings: 18000, image: 'https://s3-alpha-sig.figma.com/img/62b2/de86/3e5c02d1c4d27a7ec3537a08183734bc?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DMYG1PgxzsvNT6usLqPgm~WZIyOqVLPhSKWICK6oTG72-22VvbioUrAgmR8ow4VGwGYOsjor3t3S2ucB81pYNEGPL489dm2SR3w2Ua~QEEv8b3qG-rqAIreHu2cdc3zZu7YSThVsVLuXR7MgUwlHGgKqM0JhZ~s~ehfaBdZxKog8N8Buyusk4GooeEXeLg4NiIZPFPTwfzB7SesiJx27I9LOsevEjpyQLS7IC-nOqaDqkRKyxqDJBmQiOvA1WqV7Xgfw5V9kNynR5Pog3QNeMCUMPPDI3NgFw1qYOXU3X-07i203tUwZ4nyf0PCzqz-M~GDt03IS--xxi3M8vbhZMQ__', rank: 1 },
                        { name: 'Jane Smith', earnings: 17500, image: 'https://s3-alpha-sig.figma.com/img/d0b7/bdd7/10448a702ae55f979910bb4ae3034622?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qP9bp-tqbulFuRBqBE5awnaaUivhUTT9rw0hU3j9ys3loBhClM~DLNdsZdX8qzz3xkfUy2Xql6FDNw476BoN0LlLUhHzthQRGuAe0dDLMMcManrcP4yWyKpqDq9XqSqcMOle~6DJTE~zForuadOMqJwuaRftePO2FrYgTH-h5CLgoK5KH4ak7XD4bLzmy88AKbcnOVF4PHIMRL-HA6~weHc7aRxT~oMyLQnnTyhDOkSv47wMMY2zLY2g5IBkVYHIFrDhk6kIJQWrRc~UJUgSK0OTU8cdGavMFp-3Q3Jt7qTgCH0b1sVRne7ahk5Jp1QNIzx2rgNAadgx08GdhK3j2Q__', rank: 2 },
                        { name: 'Paul White', earnings: 16000, image: 'https://s3-alpha-sig.figma.com/img/7fb0/cfc1/0e87bd1e664d7d447307e274003434cd?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mNFxjuoUImt4OAcHE6hkAcZoJozVXPysCuuV~TJWkvVxSYvqyjPnntWg3LkjaK5JIKH5EJBQ3N~ChFQFFVnEyV2hVnQlhIhKQte9SAx6CNDlgayz2Eobzg0GMpK4VP1A8kP-voBZAZKX3PB5kmrs7JwNDeYhwxr9Z6Uo8UN9uOZ1zQz9pVeEMnr0c~-1YCOiGOpbHDWpDZdttXYdlTqjdwyw-ys2lANbQS-0G4wpfUBWTQHM3~taI1EU8TvYi7~e-H7xd1epvLLRSw24Xpu-XMzsfi~KJgjc1UWNMToeSuRcoYd6e9BDcmziZXlPvwy25a58cvKvfwQ1TguA1ryFuQ__', rank: 3 },
                        { name: 'Mari Green', earnings: 19000, image: 'https://s3-alpha-sig.figma.com/img/d0b7/bdd7/10448a702ae55f979910bb4ae3034622?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qP9bp-tqbulFuRBqBE5awnaaUivhUTT9rw0hU3j9ys3loBhClM~DLNdsZdX8qzz3xkfUy2Xql6FDNw476BoN0LlLUhHzthQRGuAe0dDLMMcManrcP4yWyKpqDq9XqSqcMOle~6DJTE~zForuadOMqJwuaRftePO2FrYgTH-h5CLgoK5KH4ak7XD4bLzmy88AKbcnOVF4PHIMRL-HA6~weHc7aRxT~oMyLQnnTyhDOkSv47wMMY2zLY2g5IBkVYHIFrDhk6kIJQWrRc~UJUgSK0OTU8cdGavMFp-3Q3Jt7qTgCH0b1sVRne7ahk5Jp1QNIzx2rgNAadgx08GdhK3j2Q__', rank: 4 },
                        { name: 'Mark Stone', earnings: 13000, image: 'https://s3-alpha-sig.figma.com/img/5c73/c6c2/83004abb594407a237b5d29e77e8f61b?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q4fgf~rWT-OPUnDBVaEoFQymxt9hjMjTsHNIPgq~0a510osCJZ8jgYeFGdwSQF14JLTBTeLee9IHbQrqrGHenvVtJdvrXv5KjAj3Ymla6S-SaGZZ-IHzMsmWyK8BRz1zbp3Ce7roCk23rgTaWuTTXT0mENzThVka~ZMx12mCQ-hJYfTPegEQDwiZ-ONmtnQdhyzzaOV9MLxa9lqKtClxqUIZjXfLfQYTRzbdgOEBEywsL4DYg3cvWBm4gFRgsMvvgFx4VsdKrGrEbUzSFE3aBZheG1r7FLYbVwOvvQQFmpimeRJ03ht7peWe4vUULO2h8Di22AtxSbyVi3goHzUH4w__', rank: 5 },
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
                          <span className="w-[400px] h-6 overflow-hidden bg-gray-200 rounded-full">
                            <div
                              className="h-6 border-2 border-black rounded-full "
                              style={{
                                width: `${(user.earnings / 20000) * 100}%`,
                                backgroundImage: 'linear-gradient(to right, #DAF1DE, #072D20)'
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
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}