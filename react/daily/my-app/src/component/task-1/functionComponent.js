import React, {useState} from 'react';
import './style.css';
function FunctionComponent(){    
    
    const [status,setStatus] = useState(true);
    const design = {color: "red"};

    return (   
        <div>
            <h2 onClick={ () => setStatus(!status)}>To see styling in functional Component</h2>        
            <div className={(status)?"none":"display"}>
                <div className='body'>
                    <h1>Eg: Function Component</h1>
                    <p style={design}>External CSS</p>
                    <p style={{color:"blue"}}>Inline CSS</p>
                </div>                    
            </div>
        </div>
    )
}

export default FunctionComponent