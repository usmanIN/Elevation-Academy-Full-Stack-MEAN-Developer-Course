import {Provider} from 'react-redux';
import OurCounter from './ourCounter';
import store from "./store";

const ReduxParentThree = () =>{
    return (
        <div>
            <Provider store={store}>
                <OurCounter/>
            </Provider>
        </div>
    )
}

export default ReduxParentThree;