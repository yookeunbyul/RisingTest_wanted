import { combineReducers } from "redux";
import ModalReducer from './modal';
import SignModalReducer from './signModal';
import JobGroupReducer from './jobGroup';


const RootReducer = combineReducers({
    ModalReducer,
    SignModalReducer,
    JobGroupReducer
})

export default RootReducer;