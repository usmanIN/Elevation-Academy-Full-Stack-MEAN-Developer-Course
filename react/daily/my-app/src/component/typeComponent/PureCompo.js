import React, { PureComponent } from 'react'


class PureCompo extends PureComponent{
    render(){

        return(

            <div>
                <h3>This is PureCompo {this.props.fruit}</h3>
            </div>
        )
    }
}

export default PureCompo