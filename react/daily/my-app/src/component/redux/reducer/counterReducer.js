const intitalState = 0


const handleCounter = (state = intitalState, action) => {
	switch(action.type){
		case "Increase": 
			return state + 1;
			
		case "Decrease":
			return state - 1;
			
		default:
			return state
			
	}
}