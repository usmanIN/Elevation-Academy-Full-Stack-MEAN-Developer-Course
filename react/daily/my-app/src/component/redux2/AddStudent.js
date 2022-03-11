import React from 'react';
import {addStudent} from './studentAction';
import { useDispatch, useSelector } from 'react-redux';
const AddStudent = () => {
    const [data, setData] = React.useState({name:'',country:''});
    const myState = useSelector((state) => state.addStudent);
    const dispatch = useDispatch();


    const handleSubmit = (event) =>{
        event.preventDefault();
        if(data.name==='' && data.country==='') return;
        dispatch(addStudent(data));
        setData({name:'',country:''});
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text'
                name="name"
                value={data.name}
                onChange={ (e) => setData({...data,name:e.target.value }) }
                />
            </div>
            <div>
                <input type='text'
                value={data.country}
                onChange= { (e) => setData({...data, country:e.target.value})}
                name="country" />
            </div>
            <input type='submit' />
        </form>

        {console.log(myState)}
    </div>
  )
}
export default AddStudent