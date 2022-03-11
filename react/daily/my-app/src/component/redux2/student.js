import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import {createStore, combineReducers} from "redux";


const ReducxStudent = () =>{
    return(
        <div>
            <Provider store={store}>
                <Container />
            </Provider>            
        </div>
    )
}

export default ReducxStudent;


const Container = () =>{

    const [data,setData] = React.useState({name:'',course:''});
    const list = useSelector((state) => state.handleData);
    const dispatch = useDispatch();

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(data.name==='' && data.course === '') return;        
        dispatch(addData(data));
        setData({name:'',course:''});
    }

    return(
        <div style={{padding:" 10px 15%"}}>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>                            
                            <td>
                                <input type="text" name="name" value={data.name} onChange={(e) => setData( {...data, name:e.target.value} )} placeholder="Enter the Name"/>
                            </td>
                            <td>
                                <input type="text" name="course" value={data.course} onChange={(e) => setData( {...data, course:e.target.value} )} placeholder="Enter Course" />
                            </td>
                            <td>
                                <input type="submit" />
                            </td>
                        </tr>
                    </tbody>
                </table>                
            </form>

            { list.length > 0 && (
                <table style={{width:"100%", border:"1px solid #ccc"}}>
                    <thead style={{border:"1px solid #ccc"}}>
                        <tr>
                            <th>Name</th>
                            <th>Course</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {
                            list.map((item,index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.course}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>                
                </table>
            )}            
        </div>
    )
}


const addData = (list) => {     
    return {type:'submit', payload:list} 
};

const handleData = (state=[],action) => {
    switch(action.type){
        case 'submit':
            return [...state,action.payload]
        default:
            return state;
    }
}

const root = combineReducers({handleData});
const store = createStore(root);