import React, { useContext, useEffect, useState } from "react";
import {useParams ,useNavigate } from "react-router-dom";
import {DataContext} from './DataRecord';
import style from './assignment_2.module.css'
import Layout from './Layout';

const EditStudent = () =>{
    const params =  useParams()['id'];
    const [record, setRecord] = useContext(DataContext);  
    const navigate = useNavigate();
    let [data, setData] = useState({name: '',age:'',course: '',batch: ''});
            
    useEffect( () => {        
        setData(record[params]);
    },[record,params]);


    let handleData  = (e) =>{                
        setData({...data,[e.target.name]:e.target.value})
    }

    let handleSubmit = (e) =>{
        e.preventDefault();        
                
        if(!Object.values(data).every(x => x.length > 0)){
            alert("Every Value Must be Filled");
        }else{            
            record[params] = data;        
            setRecord(record);        
            navigate("/assignment_6/student");
        }  


    }

    
    let handleRedirect = () =>{
        navigate("/assignment_6/student");
    }


    return(
        <>
        <Layout />
        
            <form onSubmit={handleSubmit} className={style.form}>
                <h1>Update Detail</h1>
                <input type="text" value={data.name} name="name" onChange={handleData}/>
                <input type="text" value={data.age} name="age" onChange={handleData}/>
                <input type="text" value={data.course} name="course" onChange={handleData}/>
                <input type="text" value={data.batch} name="batch" onChange={handleData}/>
                <div className={style.flex} >
                <input type="submit" value="Update"/><button onClick={handleRedirect}>Cancel</button>
                </div>
            </form>
        </>        
    )
}
export default EditStudent

