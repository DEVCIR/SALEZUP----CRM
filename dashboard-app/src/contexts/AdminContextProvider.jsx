import { createContext, useContext, useState, useEffect } from "react";

const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
        const storedLoggedIn = localStorage.getItem('isAdminLoggedIn');
        return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
    });

    useEffect(() => {
        localStorage.setItem('isAdminLoggedIn', JSON.stringify(isAdminLoggedIn));
    }, [isAdminLoggedIn]);

    return (
        <AdminContext.Provider value={{ isAdminLoggedIn, setIsAdminLoggedIn }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdminContext = () => {
    return useContext(AdminContext);
}