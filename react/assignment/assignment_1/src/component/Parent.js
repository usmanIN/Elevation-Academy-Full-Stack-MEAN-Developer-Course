import React, { Component } from 'react'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Header from './assignment_1/Header'
import Page from './assignment_2/Page';
import PageNotFound from './PageNotFound';

class Parent extends Component{

    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigate to='/assignment_1'/>} />
                    <Route path='/assignment_1' element={<Header />} />
                    <Route path='/assignment_2' element={<Page />} />                    
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