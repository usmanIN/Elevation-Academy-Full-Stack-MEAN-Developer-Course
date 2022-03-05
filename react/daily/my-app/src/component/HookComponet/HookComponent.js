import React, {useEffect, useState} from 'react';

const HookComponent = () =>{

    const [name, setName] = useState({
        firstName:'',
        lastName:'',
    });

    const [item, setItem] =  useState([]);

    const addItem = () =>{
        setItem([...item, {
            id: item.length,
            value: Math.floor(Math.random()*10)+1
        }])
    }
    
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => console.log(json));    
    },[])
    

    // const [ name, setName ] = useState( { firstName : '' , lastName: '' } )
//      const [toggle, setToggle] = useState(1);

    return (
        <>
            <ul>
                
                {
                    item.map( (item,index) => <li key={index}>{item.id} &nbsp; {item.value}</li>)
                }
            </ul>

            {
                // toggle?<h1>USMAN</h1>:<h1>Gani</h1>
            }

            {/* <button onClick={()=>setToggle(!toggle)}>Click</button> */}
            <button onClick={addItem}>Click</button>
            <form>
            <h1>{ JSON.stringify(name) } </h1>
            
            <input type='text' value = {name.firstName} onChange={ 
                (e)=> setName( { ...name, firstName: e.target.value } ) 
            } />

            
            <input type='text' value={name.lastName} onChange={ 
                (e)=> setName( { ...name, lastName: e.target.value } ) 
            } />
            </form>
        </>
        
    )
}

export default HookComponent;