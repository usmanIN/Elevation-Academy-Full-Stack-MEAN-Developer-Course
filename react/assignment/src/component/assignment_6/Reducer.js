
import {createStore, combineReducers} from 'redux';

const data = [    
    { name: "John",       age: 26,    course: "MERN",     batch: "October"    },
    { name: "Doe",        age: 25,    course: "MERN",     batch: "November"   },
    { name: "Biden",      age: 26,    course: "MERN",     batch: "September"  },
    { name: "Barar",      age: 22,    course: "Christ",   batch: "September"  },
    { name: "Elent",      age: 23,    course: "MERN",     batch: "October"    },
    { name: 'Pratik',     age: 22,    course: 'MERN',     batch: 'April'      },
    { name: 'Rohit',      age: 21,    course: 'MERN',     batch: 'October'    },
    { name: 'Jagdish',    age: 27,    course: 'MERN',     batch: 'Febraury'   },
    { name: 'Rohan',      age: 20,    course: 'MERN',     batch: 'October'    },
    { name: 'Abhishek',   age: 19,    course: 'MERN',     batch: 'August'     },
    { name: 'Tushar',     age: 22,    course: 'MERN',     batch: 'October'    },
    { name: 'Atharva',    age: 24,    course: 'MERN',     batch: 'June'       },
    { name: 'Yash',       age: 22,    course: 'MERN',     batch: 'November'   },
    { name: 'Ashish',     age: 23,    course: 'MERN',     batch: 'July'       }
];


const handleAction = (state = data, action) => {
    switch(action.type){
        case 'Insert':
            return [...state, action.payload];
        case 'Update':
            return [...state, action.payload];
        default:
            return state;        
    }
}

export const rootReducer = combineReducers({handleAction});

export const record = createStore(rootReducer);