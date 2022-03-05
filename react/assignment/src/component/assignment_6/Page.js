import React from "react";
import Layout from './Layout';
import Home from './Home';
import style from './assignment_2.module.css';

import { record } from "./Reducer";
import { Provider } from "react-redux";

const Assignment_6 = () => {
        
    return(
        <>
        <Provider store={record}>
            <Layout />      
        
            <div className={style.MainContent}>
                
               <Home />
           </div>
        </Provider>
        
        </>
    )
}

export default Assignment_6