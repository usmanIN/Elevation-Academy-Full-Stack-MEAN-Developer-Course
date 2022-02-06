import React, { useContext, useState } from "react";
import {useNavigate } from "react-router-dom";
import {DataContext} from './DataRecord';
import style from './assignment_2.module.css'
import Layout from './Layout';

const AddStudent = () =>{
    
    const [record, setRecord] = useContext(DataContext);  
    const navigate = useNavigate();
    let [data, setData] = useState({name: '',age:'',course: '',batch: ''});
        
    
    let handleData  = (e) =>{                
        setData({...data,[e.target.name]:e.target.value})
    }

    let handleSubmit = (e) =>{
        e.preventDefault();        
        
        if(!Object.values(data).every(x => x.length > 0)){
            alert("Every Value Must be Filled");
        }else{            
            record.push(data);        
            setRecord(record);        
            navigate("/assignment_5/student");
        }  
    }

    let handleRedirect = () =>{
        navigate("/assignment_5/student");
    }


    return(
        <>
        
        <Layout />
        
            <form onSubmit={handleSubmit} className={style.form}>
                <h1>Add Student Detail</h1>
                <input type="text" value={data.name} name="name" onChange={handleData}/>
                <input type="text" value={data.age} name="age" onChange={handleData}/>
                <input type="text" value={data.course} name="course" onChange={handleData}/>
                <input type="text" value={data.batch} name="batch" onChange={handleData}/>
                <div className={style.flex} >
                    <input type="submit" value="Save"/><button onClick={handleRedirect}>Cancel</button>
                </div>
            </form>
        </>        
    )
}
export default AddStudent

