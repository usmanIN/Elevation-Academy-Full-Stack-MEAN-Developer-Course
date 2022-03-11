import {combineReducers} from "redux";
import handleMyCounter from './counterReducer';

const rootReducer = combineReducers({handleMyCounter});
export default rootReducer;