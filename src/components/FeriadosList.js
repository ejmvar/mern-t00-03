

// import React, { Component } from 'react'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import * as actions from "../actions/FeriadoActions";
import { FeriadoForm } from './FeriadoForm';
// import { FeriadoShow } from './FeriadoShow'; // STUB - test if used
import EditIcon from "@material-ui/icons/Edit";

// const FeriadosList = (props) => {
const FeriadosList = ({ classes, ...props }) => {
    // NOTE: example
    // const [x, setX] = useState(0);
    // setX(5);

    const [dbg, set_dbg] = useState(false);
    const [x, setX] = useState(0);
    const [hasData, set_hasData] = useState(false);
    const [currIdx, set_currIdx] = useState(undefined);
    const [currDbId, set_currDbId] = useState(undefined);
    const [currDbRec, set_currDbRec] = useState({});

    const [editMe, set_editMe] = useState(false);
    const [saveMe, set_saveMe] = useState(0); // FIXME: unnecesary


    useEffect(() => {
        if (saveMe) {
            props.doUpdateFeriados(currDbId, currDbRec,
                () => { window.alert("Registro actualizado!"); }
            );
            set_saveMe(0);
        }

    }, [saveMe])

    useEffect(() => {
        console.log("FeriadosList.useEffect.currDbRec doSubmit", currDbRec);

    }
        , [currDbRec]
    )

    useEffect(() => {
        props.doListFeriados();
    }, [props.doListFeriados])


    return (
        <div className="info-desk">
            <div className="db-show__area db-data__area">
                <div className="db-data__group">

                    <div className="feriado-form-head">
                        Listado Feriados
                    </div>

                    <div className="db-data__rows">
                        <table className="db-data__table">
                            <thead>
                                <tr>
                                    <th> {dbg ? "_id" : ""} </th>
                                    <th> Id </th>
                                    <th> Motivo </th>
                                    <th> Tipo </th>
                                    <th> Mes </th>
                                    <th> Dia </th>
                                    <td> {dbg ? "__v" : ""} </td>
                                    <td>  EDIT    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.feriadosList.map((r, i) => {
                                        return (
                                            <tr key={i} className="db-data__table-row"
                                                onClick={() => {
                                                    set_currIdx(i);
                                                    set_currDbId(r._id);
                                                    set_currDbRec(r); // NOTE: outside of state ??
                                                }
                                                }
                                            >
                                                <td>  {dbg ? r._id : ""}      </td>
                                                <td>  {r.id}                </td>
                                                <td>  {r.motivo}            </td>
                                                <td>  {r.tipo}              </td>
                                                <td>  {r.mes}               </td>
                                                <td>  {r.dia}               </td>
                                                <td>  {dbg ? r.__v : ""}    </td>
                                                <td>
                                                    <button>
                                                        <EditIcon color="primary"
                                                            onClick={
                                                                () => {
                                                                    set_currIdx(r.id);
                                                                    set_currDbId(r._id);
                                                                    set_currDbRec(r); // NOTE: outside of state
                                                                    set_editMe("ON"); // NOTE: editMe must propagate to forms
                                                                }
                                                            }
                                                        />
                                                    </button>
                                                </td>
                                            </tr>

                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="db-datum__group">


                    <div className="db-datum__area-head">
                        <div className="db-datum__area-head___title">
                            {!currDbId ?
                                "Indique la línea del feriado de interés para ver el detalle en esta área"
                                :
                                (props.feriadosList[currIdx].motivo)
                            }
                            {(false && currIdx) ?
                                <p> <br /> {currDbId} : {currIdx} </p>
                                : ""
                            }
                        </div>

                    </div>







                    <div className="db-datum__rows">
                        {currDbId ?
                            <FeriadoForm
                                {...({ currDbId, set_currDbId })}
                                {...({ currDbRec, set_currDbRec })}
                                {...({ editMe, set_editMe })}
                                {...({ saveMe, set_saveMe })}


                            />
                            : ""}

                    </div>
                </div>
            </div>
        </div >
    )
}


const mapStateToProps = state => ({
    feriadosList: state.FeriadoReducer.list
})

const mapActionsToProps = {
    doListFeriados: actions.List,
    doUpdateFeriados: actions.Update,
}

export default connect(mapStateToProps, mapActionsToProps)(FeriadosList);
