import React from 'react'
import { increaseCounter, decreaseCounter } from '../actions/counterAction'
import {useDispatch,useSelector} from 'react-redux'

export const OutCounter = () =>{
	const myState = useSelector( (state) => state.handleCounter);
	const dispatch = useDispatch();

	return (

		<div>
			<div className="">
				<h1>{myState}</h1>
				<button id="increment" onClick={ () => dispatch(increaseCounter()) }> Increment </button>
				
				<button id="decrement" onClick={ () => dispatch(decreaseCounter()) }> decrement </button>
			</div>
		</div>
	)
}