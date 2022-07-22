const intialState = {
}

const JobInfoReducer = (state = intialState, action) => {
    switch(action.type) {
        case "ADDJob" : {
            return {
                ...state,
                jobid : action.data.jobid,
                career : action.data.career,
                skills : action.data.skills,
            }
        }
        default : {
            return {
                ...state,
            }
        }
    }
}

export default JobInfoReducer;