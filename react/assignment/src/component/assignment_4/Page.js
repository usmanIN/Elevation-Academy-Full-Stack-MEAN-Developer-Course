import React, { Component } from "react";
import style from './assignment_2.module.css'
import {Link} from 'react-router-dom';

class Assignment_4 extends Component{
    
    render(){
        const data = [
    
            {
            name : "John",
            age : 26,
            course : "MERN",
            batch : "October"
          },
          {
            name : "Doe",
            age : 25,
            course : "MERN",
            batch : "November"
          },
          {
            name : "Biden",
            age : 26,
            course : "MERN",
            batch : "September"
          },
          {
            name : "Barar",
            age : 22,
            course : "Christ",
            batch : "September"
          },
          {
            name : "Elent",
            age : 23,
            course : "MERN",
            batch : "October"
          }
    ]
        return(
            <>
                <div className={style.area}>
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
                    data.map((item,i) =>(
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.course}</td>                        
                            <td>{item.batch}</td>
                            <td><Link to={`edit/${i}`}>Edit</Link></td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
            </>
        )
    }
}

export default Assignment_4