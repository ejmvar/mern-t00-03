// import { ACTION_TYPES } from "../actions/FeriadoActions";
const { ACTION_TYPES } = require("../actions/FeriadoActions");


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


        default:
            return state;
    }
}