import React, { useState } from 'react'

export const Record = () =>{

    let [record, setRecord] = useState([]);
    const [studentName, setStudentName] = useState('');
    const [studentClass, setStudentClass] = useState('');
    const [studentAge, setStudentAge] = useState('');

    const handleData = () => {
        
        setRecord({name:studentName,class:studentClass, age:studentAge})
        
    }
    return(
     <div style={{backgroundColor: "red",padding:"10px"}}>
         
         <input type="text" name="studentName" onChange={e => e.target.studentName}/>
         <input type="text" name="studentClass" onChange={e => e.target.studentClass}/>
         <input type="text" name="studentAge" onChange={e => e.target.studentAge}/>
         <button onClick={() => handleData()}>Save</button>
     </div>   
    )
}