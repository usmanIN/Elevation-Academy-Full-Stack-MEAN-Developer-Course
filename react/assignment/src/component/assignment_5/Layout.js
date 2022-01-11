import React from 'react'
import { Link } from 'react-router-dom';

const style = {
    color: "white",
    padding: "10px 0",
    marginBottom: "0"
}

const Layout = () =>{    
    return(
        <div style={style}>            
            <Link to="/assignment_5">Home</Link> &nbsp; 
            <Link to="/assignment_5/student">Student</Link>            
       </div>
    );
}
export default Layout;