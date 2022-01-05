import React, { Component } from 'react'
import PureCompo from './PureCompo';
import RegComponent from './RegComponent';

class ParentComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            fruitName: 'Apple'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                fruitName: 'Mango'
            })
        }, 3000);
    }
    render(){
        return(
            <div>
                <h1>I'm Parent</h1>
                <RegComponent fruit={this.state.fruitName}/>
                <PureCompo fruit={this.state.fruitName}/>
            </div>
        )
        
    }
}

export default ParentComponent;