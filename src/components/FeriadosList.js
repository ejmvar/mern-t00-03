

// import React, { Component } from 'react'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import * as actions from "../actions/FeriadoActions";
import { FeriadoForm } from './FeriadoForm';
// import { FeriadoShow } from './FeriadoShow'; // STUB - test if used
import EditIcon from "@material-ui/icons/Edit";

// const FeriadosList = (props) => {
const FeriadosList =  ({ classes, ...props }) => {
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
    const [saveMe, set_saveMe] = useState(false);


    useEffect(() => {
        console.log("FeriadosList.useEffect.currDbRec", currDbRec);

    }
        , [currDbRec]
    )

    useEffect(() => {
        // return () => {effect};

        console.log("FeriadosList.useEffect.props:1", props);
        props.doListFeriados();
        console.log("EFFECT: doListFeriados");
        console.log("FeriadosList.useEffect.props:2", props);
    }
        // , [props.x] // componentDidMount
        // , [props] // LOOP

        // , [] // ONCE but not loading into props.feriadosList
        // , [hasData] // componentDidMount : NOTE: works OK
        // , [x] // componentDidMount : NOTE: works OK

        // , [props.list] // ERROR !
        , [props.doListFeriados] // ERROR !
        // , [props.feriadosList] // Loop !
    )


    return (

        <div className="info-desk">
            <div className="info-group">
                {/* Dbg Info */}
                <div className="info-buttons">
                    <button className="info-button" onClick={() => set_dbg(!dbg)} >  {dbg ? "DeBuGgInG!" : "MuTeD"} </button>
                    <button className="info-button" onClick={() => setX(x + 1)} > Whole reload </button>
                </div>
                <div className="info-data">
                    Data:
                    form FeriadosList props:
                    <hr />
                    <div className="info-data__group">
                        <span className="info-data__label">  dbg:  </span>
                        <span className="info-data__value"> {dbg ? "DeBuGgInG!" : "MuTeD"} </span>
                    </div>
                    <div className="info-data__group">
                        <span className="info-data__label">  x:  </span>
                        <span className="info-data__value"> {x} </span>
                    </div>
                    <div className="info-data__group">
                        <span className="info-data__label"> hasData:  </span>
                        <span className="info-data__value"> {hasData} </span>
                    </div>
                    <div className="info-data__group">
                        <span className="info-data__label"> currIdx: </span>
                        <span className="info-data__value">  {currIdx} </span>
                    </div>
                    <div className="info-data__group">
                        <span className="info-data__label"> currDbId:  </span>
                        <span className="info-data__value"> {currDbId} </span>
                    </div>
                    <div className="info-data__group">
                        <span className="info-data__label"> props.list: </span>
                        <span className="info-data__value">  {props.list} </span>
                    </div>

                </div>
            </div>
            <div className="db-show__area db-data__area">
                <div className="db-data__group">



                    <div className="feriado-form-head">
                        Listado Feriados (editMe: {editMe}) === {editMe ? editMe : "-"}

                    </div>

                    <div className="db-data__rows">
                        <table className="db-data__table">
                            <thead>
                                <tr>
                                    <th> {dbg ? "_id" : ""} </th>
                                    <th> id </th>
                                    <th> motivo </th>
                                    <th> tipo </th>
                                    <th> mes </th>
                                    <th> dia </th>
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
                                // {...({ currIdx, set_currIdx })} // FIXME: must find which one fires the update
                                {...({ currDbId, currDbId })}
                                {...({ currDbRec, set_currDbRec })}

                                {...({ editMe, set_editMe })}
                            />
                            : ""}
                        {/* <p> FeriadoShow </p>
                        <FeriadoShow /> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

// export default FeriadosList;

// const mapStateToProps = state => {
//     return {
//         // list is stored at reducer FeriadoReducer
//         // feriadosList: state.FeriadosList.list .feriadosList.list
//         feriadosList: state.FeriadoReducer.list
//     }
// }
// NOTE: simplified "mapStateToProps"
const mapStateToProps = state => ({
    // list is stored at reducer FeriadoReducer
    // feriadosList: state.FeriadosList.list .feriadosList.list
    feriadosList: state.FeriadoReducer.list
})

// NOTE: now i can access:
// NOTE: this.props.feriadosList


// NOTE: map actions to props
const mapActionsToProps = {
    doListFeriados: actions.List
}

export default connect(mapStateToProps, mapActionsToProps)(FeriadosList);
