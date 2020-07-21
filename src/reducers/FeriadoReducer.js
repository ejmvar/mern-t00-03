// import { ACTION_TYPES } from "../actions/FeriadoActions";
const { ACTION_TYPES, Update } = require("../actions/FeriadoActions");


const initState = {
    list: []
}
export const FeriadoReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LIST:
            console.log("FeriadoReducer.List action.type:", action.type);

            return {
                ...state,
                list: [...action.payload]
            }
        case ACTION_TYPES.UPDATE:
            console.log("FeriadoReducer.Update action.type:", action.type);

            return {
                ...state,
                list: state.list.map(x => x.id == action.payload.id ? action.payload : x) // NOTE: {id,data)} into list
            }


        default:
            return state;
    }
}