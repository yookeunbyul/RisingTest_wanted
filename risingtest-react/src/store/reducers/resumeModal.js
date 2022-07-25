const intialState = {
    isDeMoOpen: false,
    resumeName: "",
    resumeId: null,
}

const ResumeModalReducer = (state = intialState, action) => {
    switch(action.type){
        case "DEMODALOPEN": {
            return{
                ...state,
                isDeMoOpen: true,
                resumeName : action.data.resumeName,
                resumeId : action.data.resumeId,
            };
        }
        case "DEMODALCLOSE": {
            return{
                ...state,
                isDeMoOpen: false,
            };
        }
        default: {
            return{
                ...state,
            };
        }
    }
};

export default ResumeModalReducer;