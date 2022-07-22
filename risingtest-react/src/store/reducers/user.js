const intialState = {
}

const UserReducer = (state = intialState, action) => {
    switch(action.type) {
        case "ADDUSER" : {
            return {
                ...state,
                username : action.data.username,
                userphone : action.data.userphone,
            }
        }
        default : {
            return {
                ...state,
            }
        }
    }
}

export default UserReducer;