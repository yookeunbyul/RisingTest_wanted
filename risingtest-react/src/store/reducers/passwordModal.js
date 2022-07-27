const intialState = {
    isPWMoOpen: false,
}

const PasswordModalReducer = (state = intialState, action) => {
    switch(action.type){
        case "PWMODALOPEN": {
            return{
                ...state,
                isPWMoOpen: true,
            };
        }
        case "PWMODALCLOSE": {
            return{
                ...state,
                isPWMoOpen: false,
            };
        }
        default: {
            return{
                ...state,
            };
        }
    }
};

export default PasswordModalReducer;