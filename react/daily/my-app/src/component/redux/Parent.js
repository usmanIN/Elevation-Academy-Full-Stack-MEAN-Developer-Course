
// npm i react-rduct redux

import React from 'react'

import { Provider } from 'react-redux'
import {store} from './store'
import {OutCounter} from './component/ourCounter';

const Reducx = () => {

	return (
		<Provider store={store}>
			<div>
				<OutCounter/>
			</div>
		</Provider>
		)
}
export default Reducx;