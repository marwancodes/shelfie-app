import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import ThemedLoader from "../ThemedLoader";


const UserOnly = ({ children }) => {
    const { user, authChecked } = useUser();
    // This will get the user and authChecked from the UserContext
    const router = useRouter();
    // This will get the router from the expo-router
    
    useEffect(() => {
        if (authChecked && user === null) {
            // If the user is not logged in and the authChecked is true
            // This means that the user is not logged in
            // and the authChecked is true
            router.replace("/login");
            // This will replace the current route with the login route
        }
    }, [user, authChecked]);

    if (!authChecked || !user) {
        return (
            <ThemedLoader/>
        )
    }

    return children;
    // This will return the children of the component
    // This means that the user is logged in
    // and the authChecked is true
}

export default UserOnly;