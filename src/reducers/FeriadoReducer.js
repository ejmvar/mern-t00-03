
const { ACTION_TYPES, Update } = require("../actions/FeriadoActions");

const initState = {
    list: []
}
export const FeriadoReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LIST:
            return {
                ...state,
                list: [...action.payload]
            }
        case ACTION_TYPES.UPDATE:
            console.log("FeriadoReducer.Update action.type: (doSubmit)", action.type);
            console.log("FeriadoReducer.Update state.list: (doSubmit)", state.list);

            return {
                ...state,
                list: state.list.map(x => x._id == action.payload.id ? action.payload : x) // NOTE: {id,data)} into list
            }

        default:
            return state;
    }
}