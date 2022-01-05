import React, { createContext ,useState} from 'react'

export const StudentContext = createContext();
export const  StudentProvider = (props) =>{
    const [students, setStudents] = useState([
            {
            "ID": "1",
            "Name": "Senpai",
            "Gender": "1",
            "Class": "32",
            "Info": "An average student. \n \n Average grades, average looks, average life... \n \n I'm not sure what you see in him."
            },
            {
            "ID": "2",
            "Name": "Yui Rio",
            "Gender": "0",
            "Class": "11",
            "Info": "Est laboris tempor non sit consectetur laborum nulla id."
            },
            {
            "ID": "3",
            "Name": "Yuna Hina",
            "Gender": "0",
            "Class": "12",
            "Info": "Excepteur id duis nisi cillum."
            },
            {
            "ID": "4",
            "Name": "Koharu Hinata",
            "Gender": "0",
            "Class": "21",
            "Info": "Irure quis amet elit ipsum non."
            },
            {
            "ID": "5",
            "Name": "Mei Mio",
            "Gender": "0",
            "Class": "22",
            "Info": "Nulla proident ad laborum magna velit excepteur commodo."
            },
            {
            "ID": "6",
            "Name": "Saki Miyu",
            "Gender": "0",
            "Class": "31",
            "Info": "Kokona Haruka's best friend and closest confidant. Kokona is likely to discuss personal matters with this girl."
            }
    ]);

    return(
        <StudentContext.Provider value={[students,setStudents]}>
            {props.children}
        </StudentContext.Provider>
    )
}