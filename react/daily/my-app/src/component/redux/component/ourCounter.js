import React from 'react'
import { increaseCounter, decreaseCounter } from '../actions/counterAction'
import {useDispatch,useSelector} from 'react-redux'

export default OutCounter = () =>{
	const myState = useSelector( (state) => state.handleCounter);
	const dispatch = useDispatch();

	return (

		<div>
			<div className="">
				<button id="increment" onClick={ () => dispatch(increaseCounter()) }> Increment </button>
				<input type="text" id="textArea" value={myState}>
				<button  onClick={ () => dispatch(decreaseCounter()) }id="decrement"> decrement </button>
			</div>
		</div>
	)
}