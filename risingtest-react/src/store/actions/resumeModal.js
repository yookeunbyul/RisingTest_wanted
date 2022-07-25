export const openDeMoAction = (data) => {
    return{
        type: "DEMODALOPEN",
        data: data,
    };
};

export const closeDeMoAction = () => {
    return{
        type: "DEMODALCLOSE",
    };
};