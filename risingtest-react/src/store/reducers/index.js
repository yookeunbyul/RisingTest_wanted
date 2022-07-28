import { combineReducers } from "redux";
import ModalReducer from './modal';
import SignModalReducer from './signModal';
import JobGroupReducer from './jobGroup';
import UserReducer from './user';
import JobInfoReducer from "./jobinfo";
import ResumeIdReducer from "./resumeId";
import ResumeModalReducer from "./resumeModal";
import PasswordModalReducer from "./passwordModal";
import FollowReducer from "./follow";


const RootReducer = combineReducers({
    ModalReducer,
    SignModalReducer,
    JobGroupReducer,
    UserReducer,
    JobInfoReducer,
    ResumeIdReducer,
    ResumeModalReducer,
    PasswordModalReducer,
    FollowReducer
})

export default RootReducer;