import React, { Component, useState } from 'react';


export const FeriadoForm = (props) => {

    const FORM_ERROR = "Debe corregir los errores o RECHAZAR los cambios";
    const FORM_OK = "Puede ACEPTAR los cambios";
    const [r, set_r] = useState(0);
    const [editing, set_editing] = useState(0);

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

        console.log("validate PRE tmp:", tmp);
        // set_errors({ ...tmp });
        // console.log("validate POS tmp:", tmp);
        // console.log("validate POS errors:", errors);

        // if (prev == values)
        if (true || prev == values)
            // const isOk = Object.values(tmp).every(m => !m) // m===""
            // const 
            // isOk = Object.values(tmp).every(m => m == "") // m===""
            tmp.FORM = Object.values(tmp).every(m => m == "") // m===""
        // console.warn("isOk:", isOk);
        console.warn("tmp.FORM isOk:", tmp.FORM);

        // // tmp.FORM = isOk ? "Ok" : "notOk"
        // tmp.FORM = isOk ? FORM_OK : FORM_ERROR

        set_errors({ ...tmp });
        console.log("validate POS tmp:", tmp);
        console.log("validate POS errors:", errors);

        console.log("validate FRM tmp:", tmp.FORM);
        return Object.values(tmp).every(m => !m) // m===""
    }


    // NOTE: can extract this for other forms as "useForm"
    // const {values, values_init, doChange} = useForm(values_init)
    const doChange = ev => {
        console.log("doChange ev:", ev);
        console.log("doChange PRE values:", values);
        const { name, value } = ev.target
        console.log("doChange {name,value}:", { name, value });
        const fielfValue = { [name]: value };

        set_values({
            ...values,
            // [name]: value
            ...fielfValue
        });

        console.log("doChange POS values:", values);
        // // NOTE: if this form deserves validation on every keystroke!!
        // // NOTE: only handles values pre-change!!
        validate();
        validate(fielfValue);

    }

    const doSubmit = ev => {
        ev.preventDefault();

        console.log("doSubmit ev:", ev);
        console.log("doSubmit PRE values:", values);
        // const { name, value } = ev.target
        // console.log("doSubmit {name,value}:", { name, value });
        // set_values({

        // });

        console.log("doSubmit POS values:", values);
        // console.log("doSubmit POS validate():", validate() );
        // NOTE: if this form only deserves validation on submit!!
        if (!validate()) { window.alert(FORM_ERROR); }
    }

    return (
        <div className="feriado-form">
            <p className="feriado-form-head">
                FeriadoForm [NOTE: WIP]
            </p>

            <form autoComplete="off" noValidate className="feriado-form" onSubmit={doSubmit} >

                <table className="z-feriado-table">
                    <thead className="z-feriado__head">
                        <tr>

                            <th className="z-feriado__head-label"> Campo </th>
{editing?                            <th className="z-feriado__head-label"> Valor </th>
:                            <th className="feriado__head-label__get"> Editado </th>
}
                        </tr>
                    </thead>
                    <tbody className="z-feriado-body">

                        <tr>
                            <td className="feriado__value-title" > _id </td>
                            {editing ? <td className="feriado__value-show" > {values._id} {r._id} </td>
                                : <td className="feriado__value-get" >
                                    _id: <input type="text"
                                        name="_id" value={values._id} onChange={doChange}
                                    >
                                    </input>
                                    {r._id} {(errors._id) ?
                                        <p className="field-error"> err:   {errors._id}  </p>
                                        : <p className="field-ok"> &nbsp;  </p>}
                                </td>
                            }
                        </tr>
                        <tr>
                            <td className="feriado__value-title" > id </td>
                            {editing ? <td className="feriado__value-show" > {values.id} {r.id} </td>
                                : <td className="feriado__value-get" >
                                    id: <input type="text"
                                        name="id" value={values.id} onChange={doChange}
                                    >
                                    </input>
                                    {r.id} {(errors.id) ?
                                        <p className="field-error"> err:   {errors.id}  </p>
                                        : <p className="field-ok"> &nbsp;  </p>}
                                </td>
                            }
                        </tr>
                        <tr>
                            <td className="feriado__value-title" > motivo </td>
                            {editing ? <td className="feriado__value-show" > {values.motivo} {r.motivo} </td>
                                : <td className="feriado__value-get" >
                                    motivo: <input type="text"
                                        name="motivo" value={values.motivo} onChange={doChange}
                                    >
                                    </input>
                                    {r.motivo} {(errors.motivo) ?
                                        <p className="field-error"> err:   {errors.motivo}  </p>
                                        : <p className="field-ok"> &nbsp;  </p>}
                                </td>
                            }
                        </tr>
                        <tr>
                            <td className="feriado__value-title" > tipo </td>
                            {editing ? <td className="feriado__value-show" > {values.tipo} {r.tipo} </td>
                                : <td className="feriado__value-get" >
                                    tipo: <input type="text"
                                        name="tipo" value={values.tipo} onChange={doChange}
                                    >
                                    </input>
                                    {r.tipo} {(errors.tipo) ?
                                        <p className="field-error"> err:   {errors.tipo}  </p>
                                        : <p className="field-ok"> &nbsp;  </p>}
                                </td>
                            }
                        </tr>
                        <tr>
                            <td className="feriado__value-title" > mes </td>
                            {editing ? <td className="feriado__value-show" > {values.mes} {r.mes} </td>
                                : <td className="feriado__value-get" >
                                    mes: <input type="text"
                                        name="mes" value={values.mes} onChange={doChange}
                                    >
                                    </input>
                                    {r.mes} {(errors.mes) ?
                                        <p className="field-error"> err:   {errors.mes}  </p>
                                        : <p className="field-ok"> &nbsp;  </p>}
                                </td>
                            }
                        </tr>
                        <tr>
                            <td className="feriado__value-title" > dia </td>
                            {editing ? <td className="feriado__value-show" > {values.dia} {r.dia} </td>
                                : <td className="feriado__value-get" >
                                    dia: <input type="text"
                                        name="dia" value={values.dia} onChange={doChange}
                                    >
                                    </input>
                                    {r.dia} {(errors.dia) ?
                                        <p className="field-error"> err:   {errors.dia}  </p>
                                        : <p className="field-ok"> &nbsp;  </p>}
                                </td>
                            }
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>

                        </tr>
                    </tfoot>
                </table>

                <div className="feriado__buttons">
                    Errors: {JSON.stringify(errors)}
                </div>
                <div className="feriado__buttons">
                    <p>
                        Errors: {errors.FORM}
                    </p>
                    <p>
                        NO Errors: {errors.FORM_OK}
                    </p>
                </div>
                <div className="feriado__buttons">
                    <button type="submit" onSubmit={doSubmit} className="feriado__button"> Acepta </button>
                    <button type="reset" className="feriado__button"> Rechaza </button>
                </div>

            </form>

        </div>
    )
}

