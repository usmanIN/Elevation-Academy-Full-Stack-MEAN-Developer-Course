import React, { Component } from 'react'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Assignment_1 from './assignment_1/Header'
import Assignment_2 from './assignment_2/Page';
import Assignment_3 from './assignment_3/Page';
import PageNotFound from './PageNotFound';

class Parent extends Component{

    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigate to='/assignment_1'/>} />
                    <Route path='/assignment_1' element={<Assignment_1 />} />
                    <Route path='/assignment_2' element={<Assignment_2 />} />   
                    <Route path='/assignment_3' element={<Assignment_3 />} />                    
                    <Route path='/*' element={<PageNotFound />} />                    
                    {/* <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <h2>There's nothing here!</h2>
        </main>
      }
    /> */}
                </Routes>            
            </BrowserRouter>

        
        );
    }
}

export default Parent;