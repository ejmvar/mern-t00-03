import api from "./api"

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

export const List = () => dispatch => {
    api.FeriadoApi().List()
        .then(
            resp => {
                dispatch({
                    type: ACTION_TYPES.LIST,
                    payload: resp.data
                })
            }
        )
        .catch(err => console.error("FeriadoApi.List:", err)

        )

}

export const Update = (id, data, onSuccess) => dispatch => {

    data = formatData(data); // NOTE: (dia,mes) to numbers
    api.FeriadoApi().Update(id, data)
        .then(
            resp => {
                dispatch({
                    type: ACTION_TYPES.UPDATE,
                    payload: { id, ...data } // NOTE: destruct+inmut  {id:id,data:resp.data}
                })
                onSuccess()
            }
        )
        .catch(err => console.error("FeriadoApi.Update:", err))
}