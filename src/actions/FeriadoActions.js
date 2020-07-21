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
                    payload: resp.data
                })
            }
        )
        .catch(err => console.error("FeriadoApi.List:", err)

        )
        // .finally(
        //     () => console.info("FeriadoApi.List finished:")
        // )
}

export const Update = (id, data, onSuccess) => dispatch => {


    // console.log("FeriadoActions.Update id,data:", id, data);


    // ... operations
    // get api request
    data = formatData(data); // NOTE: (dia,mes) to numbers
    api.FeriadoApi().Update(id, data)
        .then(
            resp => {
                console.log("FeriadoApi.List resp:", resp);
                dispatch({
                    type: ACTION_TYPES.UPDATE,
                    payload: { id, ...data } // NOTE: destruct+inmut  {id:id,data:resp.data}
                })
                onSuccess()
            }
        )
        .catch(err => console.error("FeriadoApi.Update:", err))
}