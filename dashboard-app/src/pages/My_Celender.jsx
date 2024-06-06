import React, { useState, useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../contexts/AdminContextProvider";

export default function Page9() {
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

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [competitionData, setCompetitionData] = useState([]);
    const [highlightedDates, setHighlightedDates] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/spiff_competitions')
            .then(response => response.json())
            .then(data => {
                setCompetitionData(data);
                const highlighted = data.flatMap(entry => {
                    const startDate = new Date(entry.start_time);
                    const endDate = new Date(entry.end_time);
                    return [
                        {
                            year: startDate.getFullYear(),
                            month: startDate.getMonth(),
                            day: startDate.getDate(),
                            type: 'start_time'
                        },
                        {
                            year: endDate.getFullYear(),
                            month: endDate.getMonth(),
                            day: endDate.getDate(),
                            type: 'end_time'
                        }
                    ];
                });
                setHighlightedDates(highlighted);
            })
            .catch(error => console.error('Error fetching competition data:', error));
    }, []);

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const generateCalendar = (year, month) => {
        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfWeek = firstDayOfMonth.getDay();
        const calendar = [];
        for (let i = 0; i < firstDayOfWeek; i++) {
            calendar.push(null);
        }
        // for (let day = 1; day <= daysInMonth; day++) {
        //     calendar.push(day);
        // }
        for (let day = 1; day <= daysInMonth; day++) {
            const highlight = highlightedDates.find(dateObj => dateObj.year === year && dateObj.month === month && dateObj.day === day);
            const type = highlight ? highlight.type : null;
            let team = null;
            if (highlight) {
                team = competitionData.find(entry => {
                    const startDate = new Date(entry.start_time);
                    const endDate = new Date(entry.end_time);
                    return (startDate.getFullYear() === year && startDate.getMonth() === month && startDate.getDate() === day) ||
                        (endDate.getFullYear() === year && endDate.getMonth() === month && endDate.getDate() === day);
                });
                team = team ? team.team : null;
            }
            const startDate = highlightedDates.find(dateObj => dateObj.type === 'start_time' && dateObj.year === year && dateObj.month === month && dateObj.day === day);
            const endDate = highlightedDates.find(dateObj => dateObj.type === 'end_time' && dateObj.year === year && dateObj.month === month && dateObj.day === day);
            const sameDate = startDate && endDate && startDate.year === endDate.year && startDate.month === endDate.month && startDate.day === endDate.day;
            console.log('Day:', day, 'Same Date:', sameDate);

            calendar.push({ day, type, team, sameDate });
        }
        return calendar;
    };
    const handlePrevMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
        setCurrentYear((prevYear) => (currentMonth === 0 ? prevYear - 1 : prevYear));
    };
    const handleNextMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
        setCurrentYear((prevYear) => (currentMonth === 11 ? prevYear + 1 : prevYear));
    };
    // const handleGetDataClick = () => {
    //     competitionData.forEach(entry => {
    //         const startDate = new Date(entry.start_time);
    //         const endDate = new Date(entry.end_time);
    //         const startDateLocal = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000);
    //         const endDateLocal = new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000);

    //         const startDateOnly = startDateLocal.toISOString().split('T')[0];
    //         const endDateOnly = endDateLocal.toISOString().split('T')[0];
    //         console.log('Start Date:', startDateOnly);
    //         console.log('End Date:', endDateOnly);
    //         console.log('Type:', entry.type);
    //     });
    // };

    const handleGetDataClick = () => {
        competitionData.forEach(entry => {
            const startDate = new Date(entry.start_time);
            const endDate = new Date(entry.end_time);
            const startDateLocal = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000);
            const endDateLocal = new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000);

            const startDateOnly = startDateLocal.toISOString().split('T')[0];
            const endDateOnly = endDateLocal.toISOString().split('T')[0];
            console.log('Start Date:', startDateOnly);
            console.log('End Date:', endDateOnly);
            console.log('Type:', entry.type);
            console.log('Team:', entry.team); // Added line for team
        });
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
                            <div className="flex items-center justify-center h-screen">
                                <div className="p-4 mx-auto lg:w-7/12 md:w-9/12 sm:w-10/12">
                                    <div className="overflow-hidden dark:bg-[#305b4c] rounded-lg shadow-lg bg-[#DAF1DE]">
                                        <div className="flex items-center justify-between px-6 py-3 bg-[#072D20]">
                                            <button onClick={handlePrevMonth} className="text-white">Previous</button>
                                            <h2 className="text-white">{monthNames[currentMonth]} {currentYear}</h2>
                                            <button onClick={handleNextMonth} className="text-white">Next</button>
                                        </div>
                                        <div className="grid grid-cols-7 gap-2 p-4">
                                            {daysOfWeek.map((day) => (
                                                <div key={day} className="font-semibold text-center">{day}</div>
                                            ))}
                                            {generateCalendar(currentYear, currentMonth).map((cell, index) => {
                                                if (!cell) {
                                                    return <div key={index} className="py-2 text-center border-2 border-[#8EB69B]"></div>;
                                                }
                                                const { day, type, team, sameDate } = cell;
                                                const highlight = sameDate ? 'bg-orange-300' : type === 'start_time' ? 'bg-green-300' : type === 'end_time' ? 'bg-red-300' : '';
                                                return (
                                                    <div key={index} className={`text-center py-2 border-2 border-[#072D20] cursor-pointer ${highlight}`}>
                                                        {type && (
                                                            <div>
                                                                <div>{day}</div>
                                                                {team && <div className="text-xs text-black">{team}</div>}
                                                            </div>
                                                        )}
                                                        {!type && <div>{day}</div>}
                                                    </div>
                                                );
                                            })}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div>
                <h2>Competition Data</h2>
                <table className="w-full mt-8 border border-solid table-auto">
                    <thead>
                        <tr className="text-black bg-[#a3a3a3]">
                            <th className="px-4 py-2 border-b-2 border-r-2 border-black">Type</th>
                            <th className="px-4 py-2 border-b-2 border-r-2 border-black">Prize</th>
                            <th className="px-4 py-2 border-b-2 border-r-2 border-black">Team</th>
                            <th className="px-4 py-2 border-b-2 border-r-2 border-black">Point</th>
                            <th className="px-4 py-2 border-b-2 border-r-2 border-black" >Start Time</th>
                            <th className="px-4 py-2 border-b-2 border-r-2 border-black">End Time</th>
                            <th className="px-4 py-2 border-b-2 border-r-2 border-black">Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {competitionData.map(entry => (
                            <tr key={entry.id}>
                                <td className="px-4 py-2 text-center border border-black">{entry.type}</td>
                                <td className="px-4 py-2 text-center border border-black">{entry.prize}</td>
                                <td className="px-4 py-2 text-center border border-black">{entry.team}</td>
                                <td className="px-4 py-2 text-center border border-black">{entry.point}</td>
                                <td className="px-4 py-2 text-center border border-black">{entry.start_time}</td>
                                <td className="px-4 py-2 text-center border border-black">{entry.end_time}</td>
                                <td className="px-4 py-2 text-center border border-black">{entry.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}

                            {/* <button onClick={handleGetDataClick} className="px-4 py-2 text-white bg-blue-500 rounded-md shadow-md md:px-6 md:py-3 lg:px-8 lg:py-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                   Get Data
            </button> */}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
