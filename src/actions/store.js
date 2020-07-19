const { createStore, applyMiddleware, compose } = require("redux");
const { default: thunk } = require("redux-thunk");


export const store = createStore( // createStore(reducer: Reducer<any, Action<any>>, 
    {}, // STUB: add reducer
    compose(applyMiddleware(thunk))
)
