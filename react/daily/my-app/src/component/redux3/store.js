import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
// import { watchAgeUp } from './sagas/saga';
//applyMiddleware,


//import createSagaMiddleware from 'redux-saga';
// const sagaMiddleware = createSagaMiddleware();
// ,applyMiddleware(sagaMiddleware)

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
//sagaMiddleware.run(watchAgeUp)
export default store;

