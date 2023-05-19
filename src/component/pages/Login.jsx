import React from "react";
import { useLocation } from "react-router-dom";
const Login = ()=>{
     const location = useLocation();
     console.log(location)
    return (
        <>
            <h2>Welcome to Login page</h2>
            <h2>{location.state.st} , pathname-={location.pathname.replace("/","")}</h2>
        </>
    )
}
export default Login;