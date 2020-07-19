App Structure
-------------

● src
+---● actions
|   |
|   |-- api.js (handle all http request)
|   |-- dCandidate.js (Redux actions & action creators)  // FeriadoActions
|   |-- store.js (configure redux store)
|
+---● components
|   |
|   |--DCandidateForm.js (form operations) - child      // FeriadoForm
|   |--DCandidates.js  (list of records) - parent       // FeriadosList
|   |--useForm.js (handles common form opearations)     // FeriadosHandler
|
|---● reducers
|   |
|   |--dCandidate.js                                    // FeriadoReducer
|   |--index.js
|
|-- App.js
|-- index.js
|-- index.css


redux, react-redux, redux-thunk

actions - create, update, delete etc ,data 
reducers
store

component -> dispatch(action) -> reducer -> component