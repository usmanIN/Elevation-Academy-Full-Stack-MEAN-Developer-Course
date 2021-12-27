import React, { Component } from 'react'
import FunctionComponent from './FunctionalComponent'
import ClassComponent from './ClassComponent'
import './assignment_1.css';

class Assignment_1 extends Component{
    constructor(props){
        super(props)
        this.state = {
            IsFunctional:true,
            IsClass:true
        }
    }

    changeFunction = () =>{
        this.setState({
            IsFunctional: !this.state.IsFunctional
        })
    }

    changeClass = () =>{
        this.setState({
            IsClass: !this.state.IsClass
        })
    }

    render(){
        return(
            <div className="body">
                <h1>Styling using functional and class component</h1>
                <button onClick={this.changeFunction}>Functional Component</button>
                <button onClick={this.changeClass}>Class Component</button>

                <div className='d-flex'>
                    { this.state.IsFunctional?<FunctionComponent />:null}
                    { this.state.IsClass?<ClassComponent />:null}
                </div>
            </div>
        )
    }
}



export default Assignment_1;