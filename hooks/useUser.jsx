import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const useUser = () => {
    const context = useContext(UserContext); // to grab all the values from the context (login, register, logout, user)

   if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    // this will throw an error if the context is not used within the provider, this is a good practice to avoid errors in the app

    return context;
}