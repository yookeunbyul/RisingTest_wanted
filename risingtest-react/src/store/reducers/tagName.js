const intialState = {
}

const TagNameReducer = (state = intialState, action) => {
    switch(action.type) {
        case "TAGUPDATE" : {
            return {
                ...state,
                tagName : action.data.tagName,
            }
        }
        default : {
            return {
                ...state,
            }
        }
    }
}

export default TagNameReducer;