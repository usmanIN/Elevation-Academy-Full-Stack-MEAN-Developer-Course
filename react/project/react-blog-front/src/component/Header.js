import React, { useContext } from 'react';
import {Link} from "react-router-dom";

import {ContentAPI} from './context/contentAPI';

// let menubar = [
//     {   id:1,   name:"Home",       link:""         },
//     {   id:2,   name:"Bollywood",   link:"bollywood"   },
//     {   id:3,   name:"Technology",  link:"technology"  },
//     {   id:4,   name:"Hollywood",   link:"hollywood"   },
//     {   id:5,   name:"Fitness",     link:"fitness"     },
//     {   id:6,   name:"Food",        link:"food"        }
// ];


function Header(){

    const [record] = useContext(ContentAPI);

    let categories = record.map( (item) => item.category.toLowerCase());
    let unique = Array.from(new Set(categories));    
    unique =  unique.map((item)  => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
    
    return(
        <>
        {
        <div className="container-fluid large-screen">
            <div className="container text-center">
                <Link to="/" className='main-title' ><div className='main-title-sm'>The</div>Siren</Link>                
            </div>            
            <nav className="navbar navbar-expand-sm justify-content-center">
                <ul className="navbar-nav">
                <li className="nav-item"><Link to="/" className="nav-link" >Home</Link></li>
                    {
                        unique.map((item,index) => <li className="nav-item" key={index}><Link to={item.toLowerCase()} className="nav-link" >{item}</Link></li>)
                        //unique.map((item,index) => <li className="nav-item" key={index}><Link to={(item.link!=="")?"/"+item.link:"/"} className="nav-link" key="{item.id}" >{item.name}</Link></li>)
                    }                    
                </ul>
            </nav>            
        </div>
        }
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark small-screen">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >The Siren</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ">
                        {
                                unique.map((item,index) => <li className="nav-item" key={index}><Link to={item.toLowerCase()} className="nav-link" >{item}</Link></li>)
                        //    menubar.map((item,index) => <li className="nav-item" key={index}><Link to={(item.link!=="")?"/"+item.link:"/"} className="nav-link" key="{item.id}" >{item.name}</Link></li>)
                        }                    
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Header;