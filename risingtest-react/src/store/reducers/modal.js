const intialState = {
    isMoOpen: false,
}

const ModalReducer = (state = intialState, action) => {
    switch(action.type){
        case "MODALOPEN": {
            return{
                ...state,
                isMoOpen: true,
            };
        }
        case "MODALCLOSE": {
            return{
                ...state,
                isMoOpen: false,
            };
        }
        default: {
            return{
                ...state,
            };
        }
    }
};

export default ModalReducer;