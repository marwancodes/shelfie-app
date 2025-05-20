import { createContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";


export const UserContext = createContext();


export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [authChecked, setAuthChecked] = useState(false); // This will be used to check if the user is authenticated or not

    const login = async (email, password) => {
        // Call your login API here
        try {
            await account.createEmailPasswordSession(
                email,
                password,
            );
            const response = await account.get();
            setUser(response);
        } catch (error) {
            throw Error(error.message);
        }
    }

    const register = async (email, password) => {
        // Call your register API here
        try {
            await account.create(
                ID.unique(),
                email,
                password,
            );
            await login(email, password);
            
        } catch (error) {
            throw Error(error.message);
        }
    }

    const logout = async () => {
        await account.deleteSession('current');
        // This will delete the current session
        setUser(null);
        // This will set the user to null
    }

    const getInitialUserValue = async () => {
        try {
            const response = await account.get();
            setUser(response);
        } catch (error) {
            setUser(null);
        } finally {
            setAuthChecked(true);
            // This will set the authChecked to true
        }
    }

    useEffect(() => {
        getInitialUserValue();
    }, [])

    return (
        <UserContext.Provider value={{ login, register, logout, user, authChecked }}>
            {children}
        </UserContext.Provider>
    )
}