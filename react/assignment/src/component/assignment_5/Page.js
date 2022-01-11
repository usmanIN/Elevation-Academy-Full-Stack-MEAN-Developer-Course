import React from "react";
import Layout from './Layout';
import Home from './Home';
import style from './assignment_2.module.css';

const Assignment_5 = () => {
    return(
        <>
        <Layout />      
        
         <div className={style.MainContent}>
                <Home />
            </div>
        </>
    )
}

export default Assignment_5