import React from 'react'
import style from './assignment_2.module.css'

const ShowTable = (props) =>{
    return(
        <div className={style.area}>
            <table className={style.table}>
                <thead>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Rating</th>
                </thead>
            <tbody>
                {
                    props.data.map((item,i) =>(
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.department}</td>
                            <td>{item.rating}</td>                        
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
    );
}

export default ShowTable;