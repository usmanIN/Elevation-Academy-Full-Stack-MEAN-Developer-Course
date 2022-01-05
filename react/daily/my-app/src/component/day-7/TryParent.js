import React, {Component} from 'react';
import Counter1 from './counter1';
class TryParent extends Component{
    constructor(props){
        super(props)

        this.state = {
            counter1: 0,
            counter2: 0,
        }
        
    }

    increase1 = () =>{
        this.setState({
            counter1: this.state.counter1+1
        })
    }
    render(){
        return (
            <div>
                <Counter1 value={this.state.counter1} onClick={this.increase1} />
            </div>
        )
    }
}


export default TryParent


// Mouting  - constructor, static getDerivedStateFromProps, render(), componentDidmount
// Updating - static getDerivedStateFromProps, render, shouldComponentUpdate, componentDidUpdate, getSnapshotBeforeUpdate
// UnMouting - componentWillUnmount
