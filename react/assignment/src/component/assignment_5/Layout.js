import React from 'react'
import { Link } from 'react-router-dom';

const style = { padding: "20px 0",  marginBottom: "10px",  backgroundColor:"#151E41"}
const link = { textDecoration:"none",color:"white",fontSize:"18px", fontWeight:"600"}

const Layout = () =>{    
    return(
        <div style={style}>            
            <Link to="/assignment_5" style={link}>Home</Link> &nbsp; 
            <Link to="/assignment_5/student" style={link}>Student</Link>            
       </div>
    );
}
export default Layout;