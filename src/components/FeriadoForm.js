import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from "../actions/FeriadoActions";

// export const FeriadoForm = ({ classes, ...props }) => {
// export const FeriadoForm = (...props) => { // NOTE: must be immutable
export const FeriadoForm = ({ ...props }) => { // NOTE: must be immutable

    const FORM_ERROR = "Debe corregir los errores o RECHAZAR los cambios";
    const FORM_OK = "Puede ACEPTAR los cambios";
    const [r, set_r] = useState(0);

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

    useEffect(
        () => {
            console.warn("FeriadoForm.useEffect.currDbId:", props.currDbId);
            console.warn("FeriadoForm.useEffect.currDbId: currDbRec", props.currDbRec);
            console.warn("FeriadoForm.useEffect.currDbId: feriadosList", props.feriadosList);
            console.warn("FeriadoForm.useEffect.currDbId: props", props);
            // props.feriadosList
        }
        , [props.currDbId]
    )

    // NOTE: FormList Edit() -> set_currIdx (values)
    useEffect(() => {
        // FIXME: never gets called
        console.log("FeriadoForm.useEffect.currDbRec.props  for currDbRec:", props);

        if (props.currDbId != 0) {
            // FIXME: must set modified values !!!
            set_values({
                // ...props.feriadosList.find(x => x.id == props.currIdx)


                ...props.currDbRec
                // ...values,
                // [name]: value
                // ...fielfValue


            });
        }
    }, [props.currDbRec]) // FIXME: must find which one fires the update

    // NOTE: full form : validate()
    // NOTE: form field : validate(fieldname:value)
    const validate = (prev = values) => {
        console.log("validate PRE prev:", prev);
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
                // resetForm()
                alert("FIXME: Guardado debe actualizar la lista!!", { appearance: 'success' });
            }
            console.log("FeriadoForm.doSubmit !! props.doUpdateFeriados:", props.doUpdateFeriados);
            // FIXME: !?!? props.doUpdateFeriados(props.currentId, values, onSuccess);

        }
    }

    return (
        <div className="feriado-form">
            <div>
                Listado Feriados
             <p> (props.editMe: {props.editMe}) === {props.editMe ? props.editMe : "-"} </p>
                <p> (props.saveMe: {props.saveMe}) === {props.saveMe ? props.saveMe : "-"} </p>
                <p> (props.dbg: {props.dbg}) === {props.dbg ? props.dbg : "-"} </p>

                <p> PROPS : {JSON.stringify(props)} </p>

                <p> VALUES : {JSON.stringify(values)} </p>

            </div>
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

                {/* <div className="feriado__buttons">
                    Errors: {JSON.stringify(errors)}
                </div> */}

                {props.editMe ?
                    <div className="feriado__buttons">
                        <button type="submit" onSubmit={doSubmit} className="feriado__button"> Acepta </button>

                        <button type="reset" className="feriado__button"
                            // onClick={() => set_editing(false)}
                            // onClick={() => set_values(values_init)}

                            // onClick={() => props.seteditme set_values(values_init)}
                            onClick={() => {
                                props.set_editMe("");
                                props.set_editMe(false);
                                set_values(values_init);
                                props.set_currDbId(undefined);
                                // set_values(values_init);
                            }}
                        >
                            Rechaza </button>
                    </div>
                    : ""}
            </form>
        </div>
    )
}


// NOTE: simplified "mapStateToProps"
const mapStateToProps = state => ({
    // // list is stored at reducer FeriadoReducer
    // // feriadosList: state.FeriadosList.list .feriadosList.list
    // feriadosList: state.FeriadoReducer().list
    feriadosList: state.FeriadoReducer.list
})

// NOTE: now i can access:
// NOTE: this.props.feriadosList


// NOTE: map actions to props
// const mapActionsToProps = {
//     doListFeriados: actions.List
// }
const mapActionsToProps = {
    // doListFeriados: actions.List,
    doUpdateFeriados: actions.Update,
    // NOTE: and any other actions to implement on form
}

export default connect(mapStateToProps, mapActionsToProps)(FeriadoForm);

