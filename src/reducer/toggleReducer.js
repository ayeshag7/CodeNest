export const toggleReducer = (state, action) => {
    const {type, payload} = action;
    switch(type){
        case "TOGGLE_STATE":
            return {toggle: payload.toggleState}
        default:
            throw new Error("No such case found!")
    }
};
