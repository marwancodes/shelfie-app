import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { Text } from "react-native";


const GuestOnly = ({ children }) => {
    const { user, authChecked } = useUser();
    // This will get the user and authChecked from the UserContext
    const router = useRouter();
    // This will get the router from the expo-router
    
    useEffect(() => {
        if (authChecked && user !== null) {
            // If the user is logged in and the authChecked is true
            // This means that the user is logged in
            // and the authChecked is true
            router.replace("/profile");
            // This will replace the current route with the profile route
        }
    }, [user, authChecked]);

    if (!authChecked || user) {
        return (
            <Text>Loading</Text>
        )
    }

    return children;
    // This will return the children of the component
    // This means that the user is not logged in
    // and the authChecked is true
}

export default GuestOnly;