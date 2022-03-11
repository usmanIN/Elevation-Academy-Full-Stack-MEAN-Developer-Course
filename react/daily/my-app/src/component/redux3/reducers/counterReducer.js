const initialState = 0;
const handleMyCounter = (state = initialState, action)  => {

    switch(action.type) {
        case "INCREMENT":
            return state + 1
        case "DECREASE":
            return state - 1
        default :
            return state
    }
}
export default handleMyCounter;