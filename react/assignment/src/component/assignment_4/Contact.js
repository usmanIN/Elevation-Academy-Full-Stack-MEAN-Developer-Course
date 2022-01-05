import React from 'react'
import { Outlet,Link } from 'react-router-dom';

const ShowTable = (props) =>{
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/list">Student</Link>
            <Outlet />            
        </div>
    );
}

export default ShowTable;