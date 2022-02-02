export const handleCounter = (state = 0, action) => {
	switch(action.type){
		case "Increase": 
			return state + 1;
			
		case "Decrease":
			return ((state - 1)< 0)?0:(state - 1);

		default:
			return state			
	}
}