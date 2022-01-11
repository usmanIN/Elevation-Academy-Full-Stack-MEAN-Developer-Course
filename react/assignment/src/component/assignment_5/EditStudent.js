import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import {DataContext} from './DataRecord';

const EditStudent = () =>{
    const params =  useParams()['id'];
    const [record, setRecord] = useContext(DataContext);  
    
    let [data, setData] = useState({name: '',age:'',course: '',batch: ''});
    let {name,age,course,batch} = !(params)?data:record[params];

    let handleSubmit = (e) =>{
        e.preventDefault();
    
    }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text" />
                <input type="submit" />
            </form>
        </>        
    )
}
export default EditStudent

