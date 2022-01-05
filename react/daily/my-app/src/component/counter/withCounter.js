import React, {Component} from 'react'

const UpdateComponent = (OriginalComponent) =>{
    class NewComponent extends Component {

        constructor(props){
            super(props)
            this.state = {
                counter: 0
            }
        }
    
        increment = () => {
            this.setState({
                counter:this.state.counter+1
            })
        }

        
        render(){
            return <OriginalComponent  count ={ this.state.counter } increment={this.increment} />
        }

    }

    return NewComponent;
}


export default UpdateComponent;