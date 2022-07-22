const intialState = {
}

const JobGroupReducer = (state = intialState, action) => {
    switch(action.type) {
        case "ADD" : {
            return {
                ...state,
                jobList : action.data.jobList,
                userId : action.data.userId,
                password: action.data.password,
            }
        }
        default : {
            return {
                ...state,
            }
        }
    }
}

export default JobGroupReducer;