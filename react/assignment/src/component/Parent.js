import React from 'react'
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";

import Assignment_1 from './assignment_1/Header'
import Assignment_2 from './assignment_2/Page';
import Assignment_3 from './assignment_3/Page';

import Assignment_4 from './assignment_4/Page';
import EditDetail from './assignment_4/EditDetail';

import Assignment_5 from './assignment_5/Page';
import { DataProvider } from './assignment_5/DataRecord';
import EditStudent from './assignment_5/EditStudent';
import Student from './assignment_5/Student';

import PageNotFound from './PageNotFound';

const Parent = () =>{    

    let location = window.location.pathname.split("/")[1];
    
    return(                       
        <>
        
        <DataProvider>
            <BrowserRouter>

                <Routes>
                    <Route exact path='/' element={<Navigate to='/assignment_1'/>} />
                    <Route exact path='/assignment_1' element={<Assignment_1 />} />
                    <Route exact path='/assignment_2' element={<Assignment_2 />} />   
                    <Route exact path='/assignment_3' element={<Assignment_3 />} />                                    
                    <Route exact path='/assignment_4' element={<Assignment_4 />} >
                        <Route path='edit/:id'  element={<EditDetail />} />
                    </Route>
                    <Route exact path='/assignment_5' element={<Assignment_5/>} />
                    <Route exact path='/assignment_5/student'   element={ <Student /> } />
                    <Route exact path='/assignment_5/student/:id'  element={ <EditStudent /> } />
                    
                    <Route path='/*' element={<PageNotFound />} />                    
                    
                </Routes>            
            </BrowserRouter>            
        </DataProvider>      
        </>
    );
}

export default Parent;