import api from "./api"



// // NOTE: basic construct of "action" def (const+data)
// export const create = (data) => {
//     return {
//         type: 'create',
//         payload: data
//     }
// }

// NOTE:  then, from Components, I'll dispatch:
// dispatch(create({fullName:""}))
// const dispatch = useDispatch(function)

// NOTE: a better way: define all actions types

export const ACTION_TYPES = {
    CREATE: "CREATE",
    DELETE: "DELETE",
    UPDATE: "UPDATE",
    LIST: "LIST",
    PRELOAD: "PRELOAD",
}

// export const List = () => {
//     return dispatch => {
//         // ... operations
//     }
// }

// and define "commands" for each action (specifying real code, reqs, etc)
// NOTE: List === FetchAll
export const List = () => dispatch => {
    // ... operations
    // get api request

    api.FeriadoApi().List()
        .then(
            resp => {
                dispatch({
                    type: ACTION_TYPES.LIST, payload: resp.data // []
                })
            }
        )
        .catch(err => console.error("API List:", err)

        )
        .finally(

        )
}




// TODO: borrar

// const mapStateToProps = (state) => ({
//     wwwwww
// })

// const mapDispatchToProps = {

// }
