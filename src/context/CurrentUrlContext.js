import { createContext, useState } from "react";

export const CurrentUrlContext = createContext([]);

/**
 * Context for the current URL the user is on
 * @param {} param0 
 * @returns 
 */
export const CurrentUrlProvider = ({ children }) => {
    const [selectedPage, setSelectedPage] = useState("/");

    return (
        <CurrentUrlContext.Provider value={[selectedPage, setSelectedPage]}>
            {children}
        </CurrentUrlContext.Provider>
    );
};
