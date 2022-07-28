const intialState = {
    follow: "팔로우",
    IsFollow: false,
}

const FollowReducer = (state = intialState, action) => {
    switch(action.type){
        case "FOLLOW": {
            return{
                ...state,
                follow: action.data.follow,
                IsFollow: true,
            };
        }
        case "UNFOLLOW": {
            return{
                ...state,
                follow: action.data.follow,
                IsFollow: false,
            };
        }
        default: {
            return{
                ...state,
            };
        }
    }
};

export default FollowReducer;