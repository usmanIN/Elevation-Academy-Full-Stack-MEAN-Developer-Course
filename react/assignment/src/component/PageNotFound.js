import React from "react"
import { Link, Outlet } from "react-router-dom";
const PageNotFound = () =>{
    return(
        <div>
            <h2>Sorry! Page Not Available</h2>
            <Link to="/">Go Back</Link>      
            <Outlet />
        </div>
    )
}

export default PageNotFound;