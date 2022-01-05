import React from 'react'


const Student = ({studentName, studentClass}) =>{

        
    return(        
        <div style={{diplay:'none', maxWidth:'100%'}}>
            <div>
            <h1>{studentName}</h1>
            <p>{studentClass}</p>    
            </div>        
        </div>
        
    )

}


export default Student;