import React , { Component } from 'react';

class Counter1 extends Component{

    shouldComponentUpdate(nextProps){        
        return (nextProps.value!== this.props.value) 
    }
    render() {
        return (
            <div>
                <h1>Counter 1</h1>
                <h2>{ this.props.value}</h2>
                <button onClick={this.props.onClick}>Add</button>
            </div>
        )
    }
}

export default Counter1