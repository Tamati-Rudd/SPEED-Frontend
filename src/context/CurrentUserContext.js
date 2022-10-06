import { createContext, useState } from "react";

export const CurrentUserContext = createContext([]);

/**
 * Context for the user role
 * @param {} param0 
 * @returns 
 */
export const CurrentUserProvider = ({ defaultUser = "User", children }) => {
    const [currentUser, setCurrentUser] = useState(defaultUser);

    return (
        <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
            {children}
        </CurrentUserContext.Provider>
    );
};
