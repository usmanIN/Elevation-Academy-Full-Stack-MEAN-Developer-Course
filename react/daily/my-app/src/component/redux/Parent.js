
// npm i react-rduct redux

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-reducx'
import store from './store'
import OutCounter from './component/outCounter';

exprot default Reducx = () => {

	return (
		<Provider store={store}>
			<div>
				<OutCounter/>
			</div>
		</Provider>
		)
}