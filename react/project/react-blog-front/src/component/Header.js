import React from 'react';
import {Link} from "react-router-dom";

let menubar = [
    {   id:1,   name:"Home",       link:""         },
    {   id:2,   name:"Bollywood",   link:"bollywood"   },
    {   id:3,   name:"Technology",  link:"technology"  },
    {   id:4,   name:"Hollywood",   link:"hollywood"   },
    {   id:5,   name:"Fitness",     link:"fitness"     },
    {   id:6,   name:"Food",        link:"food"        }
];
function Header(){
    return(
        <div className="container-fluid">
            <div className="container text-center">
                <h1> The Siren</h1>
            </div>            
            <nav className="navbar navbar-expand-sm bg-light justify-content-center">
                <ul className="navbar-nav">
                    {
                        menubar.map((item,index) => <li className="nav-item" key={index}><Link to={(item.link!=="")?"/"+item.link:"/"} className="nav-link" key="{item.id}" >{item.name}</Link></li>)
                    }                    
                </ul>
            </nav>            
        </div>
    )
}
export default Header;