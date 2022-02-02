import {handleCounter} from './counterReducer'
import { combineReducers} from 'redux'


export const rootReducer = combineReducers( {handleCounter})