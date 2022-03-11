import {createStore,combineReducers} from 'redux';

const initialState = [];

const studentReducer = (state = initialState, action) =>{
    switch(action.type){
        case "Add Student":
                return [...state,action.payload];        
        default:
            return state;
    }
}

export const addStudent = (data) =>{
    return {
        type:'Add Student',
        payload: data
    }
}

const rooReducert = combineReducers({studentReducer});

export const store = createStore(rooReducert);
