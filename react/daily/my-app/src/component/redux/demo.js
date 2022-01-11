1. ACTION : 


export const addStudent = (data) => {

    return {
        type: 'ADD_STUDENT',
        payload: data
    }
}
export const deleteStudent = (data) => {

    return {
        type: 'DELETE_STUDENT',
        payload: data
    }
}

2. REDUCER :

const studentStuff = ( state, action ) => {
    switch (action.type) {
        case "ADD_STUDENT" :
            return state + action.payload          // adding student

        case "DELETE_STUDENT" :
            return state - action.payload          // delete student
        
        default: return state
    }
}


rootReducer :
const rootReducer = combineReducers( {
    studentStuff,
    parentStuff
 } )



3. STORE :
import { createStore } from 'redux'

const store = createStore(rootReducer)



//

<Provider store={store}>
    <App/ >
</Provider>
