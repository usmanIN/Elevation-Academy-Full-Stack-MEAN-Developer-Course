import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const Mobile = () => {
    return(
        <div className='row'>
            <div className='col-lg-4'>
                <Link to='/product/mobile/iphone' className='btn btn-primary btn-sm'>Iphone</Link><br/>
                <Link to='/product/mobile/lenovo' className='btn btn-primary btn-sm'>lenovo</Link>                
            </div>
            <div className='col-lg-8'>

            </div>
            
                
                <Outlet/>
        </div>
    )
}

export default Mobile;