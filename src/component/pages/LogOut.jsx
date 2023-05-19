import React from "react";
import { useLocation } from "react-router-dom";
const LogOut = ()=>{
    const location = useLocation();
    return (
        <>
            <h2>Welcome to LogOut page</h2>
            <h2>{location.state.name} loggoed out !!</h2>
        </>
    )
}
export default LogOut;