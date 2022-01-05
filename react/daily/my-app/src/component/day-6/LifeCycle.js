import React, {Component} from "react";

class LifeCycle extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: 'Doremon'
        }
        console.log("LifeCycle Construtor");
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCyel getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycle componentDidMount');
    }

    render(){
        console.log('LifeCycle Render');
        return(
            <div>
                LifeCycle Methods || Mounting
            </div>
        )
    }
}

export default LifeCycle