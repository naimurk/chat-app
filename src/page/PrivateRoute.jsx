import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {currentUser}=useContext(AuthContext)
    if(!currentUser){
        return <Navigate to={"/login"}></Navigate>
    }
    return children;
    
};

export default PrivateRoute;