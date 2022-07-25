const intialState = {
}

const ResumeIdReducer = (state = intialState, action) => {
    switch(action.type) {
        case "IDUPDATE" : {
            return {
                ...state,
                resumeId : action.data.resumeId,
            }
        }
        default : {
            return {
                ...state,
            }
        }
    }
}

export default ResumeIdReducer;