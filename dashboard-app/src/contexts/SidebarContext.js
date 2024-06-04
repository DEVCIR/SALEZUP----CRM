import { createContext, useContext, useState } from "react";

const sidebarContext = createContext();


export const SidebarContextProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpened] = useState(true);

    const changeSidebarState = () => {
        setIsSidebarOpened(prevState => (!prevState));
    };

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <sidebarContext.Provider
            value={{
                isSidebarOpen,
                changeSidebarState,
            }}
        >
            {children}
        </sidebarContext.Provider>
    );
};

export const useSidebarContext = () => useContext(sidebarContext);

export default sidebarContext;