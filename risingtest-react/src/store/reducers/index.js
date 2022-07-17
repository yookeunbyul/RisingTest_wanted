import { combineReducers } from "redux";
import ModalReducer from './modal';


const RootReducer = combineReducers({
    ModalReducer,
})

export default RootReducer;