const { createStore, applyMiddleware, compose } = require("redux");
const { default: thunk } = require("redux-thunk"); // NOTE: async support

// import { reducers } from "../reducers"; // default from "index.js"
const { reducers } = require("../reducers"); // default from "index.js"

export const store = createStore( // createStore(reducer: Reducer<any, Action<any>>, 
    reducers, // {}, // STUB: add reducer
    compose(applyMiddleware(thunk))
)

