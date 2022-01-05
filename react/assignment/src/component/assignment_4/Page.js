import React, { Component } from 'react'
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import List from './List';

class Assignment_4 extends Component{
    constructor(){
        super();
    }    

    render(){

        return(
            <div>
                <BrowserRouter>
                    <Router>
                        <Route path="/" element={<Home />} />
                        <Route path="/list" element={<List />} />
                        <Route path="/contact" element={<Contact />} />
                    </Router>
                </BrowserRouter>
            </div>
        )
    }
}

export default Assignment_4;