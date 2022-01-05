import React, {Component} from 'react'
import UpdateComponent from './withCounter'

class Counter extends Component{
    render(){
        return(
            <button onClick={this.props.increment}>Counter {this.props.count}</button>
        )
    }

}
export default UpdateComponent(Counter); // Example of HOC Component