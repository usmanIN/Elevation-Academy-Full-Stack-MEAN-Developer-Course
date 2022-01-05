import React, { useContext } from 'react'
import { StudentContext } from './StudentContext';

const StudentStatus = () =>{
    const [students, setStudents] = useContext(StudentContext);
    return(

        <div>
            <h1>Total Student: {students.length}</h1>
        </div>
    )
}

export default StudentStatus;