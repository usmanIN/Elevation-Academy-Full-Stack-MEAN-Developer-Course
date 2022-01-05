import React from 'react';

class Welcome extends React.Component{
    render() {
        return(            
            <div>
                {this.props.firstName} {this.props.lastName}
            </div>
            // React.createElement(
            //     'div',
            //     {
            //         id: 'hello',
            //         className: 'content'
            //     },
            //     React.createElement('div',null,"Output From Class.Component")
            // )
        )
    }   
}

export default Welcome