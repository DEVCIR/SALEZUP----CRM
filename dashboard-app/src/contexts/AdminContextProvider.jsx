import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

    return (
        <AdminContext.Provider value={{ isAdminLoggedIn, setIsAdminLoggedIn }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdminContext = () => {
    return useContext(AdminContext);
}