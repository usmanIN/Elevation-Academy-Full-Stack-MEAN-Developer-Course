import React from 'react'

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
const List = () => {
    return(
        <div>
            {rows.map((row) => console.log(row))}
        </div>
    );
}

export default List;