import React, { Component, useState } from 'react';


export const FeriadoForm = (props) => {

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

    // NOTE: can extract this for other forms as "useForm"
    // const {values, values_init, doChange} = useForm(values_init)
    const doChange = ev => {
        console.log("doChange ev:", ev);
        console.log("doChange PRE values:", values);
        const { name, value } = ev.target
        console.log("doChange {name,value}:", { name, value });

        set_values({
            ...values, [name]: value
        });

        console.log("doChange POS values:", values);
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
                            <th className="z-feriado__head-label"> Valor </th>
                            <th className="feriado__head-label__get"> Editado </th>

                        </tr>
                    </thead>
                    <tbody className="z-feriado-body">

                        <tr>
                            <td className="feriado__value-title" > _id </td>
                            <td className="feriado__value-show" > {values._id} {r._id} </td>
                            <td className="feriado__value-get" >
                                _id: <input type="text"
                                    name="_id"
                                    value={values._id}
                                    onChange={doChange}
                                >
                                </input>
                                {r._id} </td>
                        </tr>
                        <tr>
                            <td className="feriado__value-title" > id </td>
                            <td className="feriado__value-show" > {values.id} {r.id} </td>
                            <td className="feriado__value-get" >
                                id: <input type="text"
                                    name="id"
                                    value={values.id}
                                    onChange={doChange}
                                >
                                </input>
                                {r.id} </td>
                        </tr>
                        <tr>
                            <td className="feriado__value-title" > motivo </td>
                            <td className="feriado__value-show" > {values.motivo} {r.motivo} </td>
                            <td className="feriado__value-get" >
                                motivo: <input type="text"
                                    name="motivo"
                                    value={values.motivo}
                                    onChange={doChange}
                                >
                                </input>
                                {r.motivo} </td>
                        </tr>
                        <tr>
                            <td className="feriado__value-title" > tipo </td>
                            <td className="feriado__value-show" > {values.tipo} {r.tipo} </td>
                            <td className="feriado__value-get" >
                                tipo: <input type="text"
                                    name="tipo"
                                    value={values.tipo}
                                    onChange={doChange}
                                >
                                </input>
                                {r.tipo} </td>
                        </tr>
                        <tr>
                            <td className="feriado__value-title" > mes </td>
                            <td className="feriado__value-show" > {values.mes} {r.mes} </td>
                            <td className="feriado__value-get" >
                                mes: <input type="text"
                                    name="mes"
                                    value={values.mes}
                                    onChange={doChange}
                                >
                                </input>
                                {r.mes} </td>
                        </tr>
                        <tr>
                            <td className="feriado__value-title" > dia </td>
                            <td className="feriado__value-show" > {values.dia} {r.dia} </td>
                            <td className="feriado__value-get" >
                                dia: <input type="text"
                                    name="dia"
                                    value={values.dia}
                                    onChange={doChange}
                                >
                                </input>
                                {r.dia} </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>

                        </tr>
                    </tfoot>
                </table>

                <div className="feriado__buttons">
                    <button type="submit" onSubmit={doSubmit} className="feriado__button"> Acepta </button>
                    <button type="reset"   className="feriado__button"> Rechaza </button>
                </div>

            </form>

        </div>
    )
}

