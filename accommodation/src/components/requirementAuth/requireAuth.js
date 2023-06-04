import { useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    const userData = localStorage.getItem("userData")
  
    const [data,setData] = useState(JSON.parse(userData));

    return (
        
             
                data?.email? <Outlet />
                : <Navigate to="" state={{ from: location }} replace />
    );
}

export default RequireAuth;