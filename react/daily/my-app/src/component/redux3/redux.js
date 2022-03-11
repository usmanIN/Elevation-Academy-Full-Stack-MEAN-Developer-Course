import {Provider,useDispatch, useSelector } from "react-redux";
import {createStore, combineReducers, applyMiddleware} from "redux";

import createSagaMiddleware from "redux-saga";
import { put,delay,takeLatest } from "redux-saga/effects";

const ReduxTest = () =>{
    return(
        <div>
            <Provider store={data}>
                <Counter/>
            </Provider>
        </div>
    )
}
export default ReduxTest

const Counter = () =>{
    const data = useSelector((state) => state.handleCounter);
    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={() => dispatch(increse())}>Increment</button>
            {data}
            <button onClick={() => dispatch(decrese())}>Decrement</button>
        </div>
    )
}

const increse = () => {   return {type:"add"}  };
const decrese = () => {   return {type:"sub"}  };

const handleCounter = (state=0,action) =>{
    switch(action.type){
        // case "add":
        //     return state+1;
        case "sub":
            return (state>0)?(state-1):0;
        case "mul":
            return state + action.payload;
        default:
            return state;
    }
}

const root = combineReducers({handleCounter});

function* action(){
    yield delay(1000);
    yield put({ type:'mul',payload:1})
}

function* watch(){
    yield takeLatest('add',action);
}

const sagaMiddle = createSagaMiddleware();
const data = createStore(root,applyMiddleware(sagaMiddle) );//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
sagaMiddle.run(watch);