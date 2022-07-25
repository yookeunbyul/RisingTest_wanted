import { combineReducers } from "redux";
import ModalReducer from './modal';
import SignModalReducer from './signModal';
import JobGroupReducer from './jobGroup';
import UserReducer from './user';
import JobInfoReducer from "./jobinfo";
import ResumeIdReducer from "./resumeId";


const RootReducer = combineReducers({
    ModalReducer,
    SignModalReducer,
    JobGroupReducer,
    UserReducer,
    JobInfoReducer,
    ResumeIdReducer
})

export default RootReducer;