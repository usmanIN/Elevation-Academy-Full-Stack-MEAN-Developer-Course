import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Layout = () =>{    
    return(
        <div>            
            <Link to="/assignment_4">Home</Link> &nbsp; 
            <Link to="/assignment_4/list">Student</Link>            
       </div>
    );
}
export default Layout;