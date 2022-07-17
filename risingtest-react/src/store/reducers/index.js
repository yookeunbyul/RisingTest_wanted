import { combineReducers } from "redux";
import ModalReducer from './modal';
import SignModalReducer from './signModal';


const RootReducer = combineReducers({
    ModalReducer,
    SignModalReducer
})

export default RootReducer;