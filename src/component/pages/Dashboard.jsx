import React from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = ()=>{
    const navigate = useNavigate();
    let data = {
        "name":"Dhiraj"
    }
    return (
        <>
            <h2>Welcome to Dashboard page</h2>
            <button onClick={()=>{
                navigate("/logout",{state:data});
            }}>LogOut</button>
        </>
    )
}
export default Dashboard;