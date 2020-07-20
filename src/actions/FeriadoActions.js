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

// NOTE: format day/month from string to number
const formatData = data => ({
    ...data,
    mes: parseInt(data.mes),
    dia: parseInt(data.dia),
})

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
                console.log("FeriadoApi.List resp:", resp);
                dispatch({
                    type: ACTION_TYPES.LIST,
                    payload: resp.data // []
                })
            }
        )
        .catch(err => console.error("FeriadoApi.List:", err)

        )
        .finally(
            () => console.info("FeriadoApi.List finished:")
        )
}




// TODO: borrar

// const mapStateToProps = (state) => ({
//     wwwwww
// })

// const mapDispatchToProps = {

// }