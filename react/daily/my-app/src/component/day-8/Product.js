import React from 'react';
import {Link, useLocation, Outlet , NavLink} from 'react-router-dom';

const Product = () => {
    const location = useLocation();
    return(
        <div>
            <h1>Products</h1>
            {location.state}
            <NavLink style={({isActive})=>{return { backgroundColor: isActive?'red':'green'}}} 
            to='/product/mobile' className='btn btn-primary' >Mobile</NavLink>
            {/* <Link to='' className='btn btn-outline-primary'>Mobile</Link> */}
            {/* <Link to='' className='btn btn-outline-primary'>Laptop</Link> */}
            <Outlet />
        </div>
    )
}

export default Product;