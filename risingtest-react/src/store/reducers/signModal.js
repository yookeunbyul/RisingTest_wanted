const intialState = {
    isSignMoOpen: false,
}

const SignModalReducer = (state = intialState, action) => {
    switch(action.type){
        case "SIGNMODALOPEN": {
            return{
                ...state,
                isSignMoOpen: true,
            };
        }
        case "SIGNMODALCLOSE": {
            return{
                ...state,
                isSignMoOpen: false,
            };
        }
        default: {
            return{
                ...state,
            };
        }
    }
};

export default SignModalReducer;