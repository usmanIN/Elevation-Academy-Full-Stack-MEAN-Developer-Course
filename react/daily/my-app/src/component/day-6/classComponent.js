import React , {Component} from "react";

class ClassComponent extends Component{
    constructor(){
        super();        
        this.state = {
            status : false
        }
    }

    toggleDiv(){
        this.setState(
            {
                status : true
            }            
        )
    }

    render(){
        return(            
            
            <div>
                <h1> Day-6 Class Component</h1>
                <button onClick ={ () => this.toggleDiv() } > Click Here </button>
            </div>
        )
    }

}

export default ClassComponent;