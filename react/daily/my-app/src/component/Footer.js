import React ,{Component} from "react";


class Footer extends Component{
    constructor(){
        super(); 
        this.state = {
            message: 'Welcome Guest' 
        }
    }
    changeMessage(){
        this.setState(
            {
                message:"Logged In"
            }
        )
    }

    render(){
        return(
            <div>
                {this.state.message}
                <button onClick={ () => this.changeMessage() }>Click Here</button>
            </div>
        )
    }
}

export default Footer;


//State is a plain JavaScript object used by React to represent an information about the component's current situation
