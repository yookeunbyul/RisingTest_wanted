export const FollowAction = (data) => {
    return{
        type: "FOLLOW",
        data: data,
    }
}

export const UnFollowAction = (data) => {
    return{
        type: "UNFLLOW",
        data: data,
    }
}