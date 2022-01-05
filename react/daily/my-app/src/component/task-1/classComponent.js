import React ,{Component} from "react";
import './style.css';
export default class ClassComponent extends Component{
    state = { isVisible: false,color: "red"};
    changeState(){
        if(this.state.isVisible){            
            this.setState({  isVisible: false })
        }else{
            this.setState({  isVisible: true })
        }        
    }
    
    render(){
        return(
            <div>                
                <h2 onClick={() => this.changeState()}>To see styling in class Component</h2>        
                <div className={this.state.isVisible?"display":"none"}>
                    <div className='body'>
                        <h1>Eg: class Component</h1>
                        <p style={this.state.design}>External CSS</p>
                        <p style={{color:"blue"}}>Inline CSS</p>
                    </div>  
                </div>
            </div>
        )
    }
}
