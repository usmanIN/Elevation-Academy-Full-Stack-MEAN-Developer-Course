import React, { useContext } from "react";
import {DataContext} from './DataRecord';
import style from './assignment_2.module.css'
import {Link} from 'react-router-dom';
import Layout from './Layout';


const Student = () =>{
    
    const [record] = useContext(DataContext);      
    return(
        <>
        <Layout />
        <div className={style.MainContent}>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Action</th>
                    </tr>    
                </thead>
            <tbody>
                {
                    record.map((item,i) =>(
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.course}</td>                        
                            <td>{item.batch}</td>
                            <td><Link to={`/assignment_5/student/${i}`}>Edit</Link></td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
        </>        
    )
}
export default Student