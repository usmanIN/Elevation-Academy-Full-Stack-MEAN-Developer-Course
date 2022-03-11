import React from 'react';
import { incrementCounter, decreaseCounter } from './actions/counterAction';
import { useDispatch, useSelector } from 'react-redux';
const OurCounter = () =>{

	const myState = useSelector((state) => state.handleMyCounter);
	const dispatch = useDispatch();
	return (
		<div>
			<div>
				
				<button id="increment" onClick={ () => dispatch(incrementCounter()) }> Increment </button>				
				{myState}
				<button id="decrement" onClick={ () => dispatch(decreaseCounter()) }> decrement </button>
			</div>
		</div>
	)
}
export default OurCounter;