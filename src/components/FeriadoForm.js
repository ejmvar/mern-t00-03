import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from "../actions/FeriadoActions";

// export const FeriadoForm = ({ classes, ...props }) => {
// export const FeriadoForm = (...props) => { // NOTE: must be immutable
export const FeriadoForm = ({ ...props }) => { // NOTE: must be immutable

    const FORM_ERROR = "Debe corregir los errores o RECHAZAR los cambios";
    const [r, set_r] = useState(0); // NOTE: "set_r" unused

    const values_init = {
        _id: "",
        id: "",
        motivo: "",
        tipo: "",
        mes: "",
        dia: "",
    }
    const [values, set_values] = useState(values_init);

    const [errors, set_errors] = useState({});

    useEffect(() => {
        // FIXME: never gets called
        console.log("FeriadoForm.useEffect.currDbRec.props  for currDbRec:", props);

        if (props.currDbId != 0) {
            set_values({ ...props.currDbRec });
        }
    }, [props.currDbRec]) // FIXME: must find which one fires the update

    // NOTE: full form : validate()
    // NOTE: form field : validate(fieldname:value)
    const validate = (prev = values) => {
        // NOTE: Only validate not empty values
        let tmp = {};
        if (!prev || "_id" in prev) tmp._id = prev._id ? "" : "_id: no puede estar en blanco";
        if (!prev || "id" in prev) tmp.id = prev.id ? "" : "id: no puede estar en blanco";
        if (!prev || "motivo" in prev) tmp.motivo = prev.motivo ? "" : "motivo: no puede estar en blanco";
        if (!prev || "tipo" in prev) tmp.tipo = prev.tipo ? "" : "tipo: no puede estar en blanco";
        if (!prev || "mes" in prev) tmp.mes = prev.mes ? "" : "mes: no puede estar en blanco";
        if (!prev || "dia" in prev) tmp.dia = prev.dia ? "" : "dia: no puede estar en blanco";

        const isOk = Object.values(tmp).every(m => m == "") // m===""
        set_errors({ ...tmp });

        return isOk;
    }


    // NOTE: can extract this for other forms as "useForm"
    // const {values, values_init, doChange} = useForm(values_init)
    const doChange = ev => {
        const { name, value } = ev.target
        const fielfValue = { [name]: value };

        set_values({
            ...values,
            ...fielfValue
        });

        // // NOTE: if this form deserves validation on every keystroke!!
        validate();
        validate(fielfValue);
    }

    const doSubmit = ev => {
        ev.preventDefault();

        // NOTE: if this form only deserves validation on submit!!
        if (!validate()) {
            window.alert(FORM_ERROR);
        }
        else {
            props.set_saveMe(props.currDbId);
            props.set_currDbRec(values);

            const onSuccess = () => {
                // resetForm() // NOTE: unnecessary, it's hidden once rejected
                alert("FIXME: Guardado debe actualizar la lista!!", { appearance: 'success' });
            }
            console.log("FeriadoForm.doSubmit !! props.doUpdateFeriados:", props.doUpdateFeriados);
            // FIXME: !?!? props.doUpdateFeriados(props.currentId, values, onSuccess);

        }
    }

    return (
        <div className="feriado-form">
            <span className="feriado-form-head">
                Feriado detallado
            </span>
            <form autoComplete="off" noValidate className="feriado-form" onSubmit={doSubmit} >
                <table className="feriado-table">
                    {(true) ? "" :
                        <thead className="feriado__head">
                            <tr>
                                <th className="z-feriado__head-label"> Campo </th>
                                {!props.editMe ? <th className="z-feriado__head-label"> Valor </th>
                                    : <th className="feriado__head-label__get"> Editado </th>
                                }
                            </tr>
                        </thead>
                    }
                    <tbody className="z-feriado-body">
                        <tr>
                            <td className="feriado__value-title" > _id </td>
                            {!props.editMe ? <td className="feriado__value-show" > {values._id} {r._id} </td>
                                : <td className="feriado__value-get" >
                                    <input type="text"
                                        name="_id" value={values._id} onChange={doChange}
                                    >
                                    </input>
                                    {(errors._id) ?
                                        <p className="field-error">    {errors._id}  </p>
                                        : <p className="field-ok"> &nbsp;  </p>}
                                </td>
                            }
                        </tr>
                        <tr>
                            <td className="feriado__value-title" > id </td>
                            {!props.editMe ? <td className="feriado__value-show" > {values.id} {r.id} </td>
                                : <td className="feriado__value-get" >
                                    <input type="text"
                                        name="id" value={values.id} onChange={doChange}
                                    >
                                    </input>
                                    {(errors.id) ?
                                        <p className="field-error">    {errors.id}  </p>
                                        : <p className="field-ok"> &nbsp;  </p>}
                                </td>
                            }
                        </tr>
                        <tr>
                            <td className="feriado__value-title" > motivo </td>
                            {!props.editMe ? <td className="feriado__value-show" > {values.motivo} {r.motivo} </td>
                                : <td className="feriado__value-get" >
                                    <input type="text"
                                        name="motivo" value={values.motivo} onChange={doChange}
                                    >
                                    </input>
                                    {(errors.motivo) ?
                                        <p className="field-error">    {errors.motivo}  </p>
                                        : <p className="field-ok"> &nbsp;  </p>}
                                </td>
                            }
                        </tr>
                        <tr>
                            <td className="feriado__value-title" > tipo </td>
                            {!props.editMe ? <td className="feriado__value-show" > {values.tipo} {r.tipo} </td>
                                : <td className="feriado__value-get" >
                                    <input type="text"
                                        name="tipo" value={values.tipo} onChange={doChange}
                                    >
                                    </input>
                                    {(errors.tipo) ?
                                        <p className="field-error">    {errors.tipo}  </p>
                                        : <p className="field-ok"> &nbsp;  </p>}
                                </td>
                            }
                        </tr>
                        <tr>
                            <td className="feriado__value-title" > mes </td>
                            {!props.editMe ? <td className="feriado__value-show" > {values.mes} {r.mes} </td>
                                : <td className="feriado__value-get" >
                                    <input type="text"
                                        name="mes" value={values.mes} onChange={doChange}
                                    >
                                    </input>
                                    {(errors.mes) ?
                                        <p className="field-error">    {errors.mes}  </p>
                                        : <p className="field-ok"> &nbsp;  </p>}
                                </td>
                            }
                        </tr>
                        <tr>
                            <td className="feriado__value-title" > dia </td>
                            {!props.editMe ? <td className="feriado__value-show" > {values.dia} {r.dia} </td>
                                : <td className="feriado__value-get" >
                                    <input type="text"
                                        name="dia" value={values.dia} onChange={doChange}
                                    >
                                    </input>
                                    {(errors.dia) ?
                                        <p className="field-error">    {errors.dia}  </p>
                                        : <p className="field-ok"> &nbsp;  </p>}
                                </td>
                            }
                        </tr>
                    </tbody>
                </table>

                {props.editMe ?
                    <div className="feriado__buttons">
                        <button type="submit" onSubmit={doSubmit} className="feriado__button"> Acepta </button>
                        <button type="reset" className="feriado__button"
                            onClick={() => {
                                props.set_editMe("");
                                props.set_editMe(false);
                                set_values(values_init);
                                props.set_currDbId(undefined);
                            }}
                        >
                            Rechaza </button>
                    </div>
                    : ""}
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    feriadosList: state.FeriadoReducer.list
})

const mapActionsToProps = {
    doUpdateFeriados: actions.Update,
    // NOTE: and any other actions to implement on form
}

export default connect(mapStateToProps, mapActionsToProps)(FeriadoForm);
// FIXME: mappings not available at props!!!