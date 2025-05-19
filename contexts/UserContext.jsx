import { createContext, useState } from "react";


export const UserContext = createContext();


export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        // Call your login API here
        // const response = await api.login(email, password);
        // setUser(response.data);
    }

    const register = async (email, password) => {
        // Call your register API here
        // const response = await api.register(email, password);
        // setUser(response.data);
    }

    const logout = async () => {
        // Call your logout API here
        // await api.logout();
    }

    return (
        <UserContext.Provider value={{ login, register, logout, user }}>
            {children}
        </UserContext.Provider>
    )
}