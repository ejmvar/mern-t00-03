const { createStore, applyMiddleware, compose } = require("redux");
const { default: thunk } = require("redux-thunk");

const { reducers } = require("../reducers");

export const store = createStore(
    reducers,
    compose(applyMiddleware(thunk)

        // FIXME: "remove Redux-DevTools-extension" for PRODUCTION
        , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
)