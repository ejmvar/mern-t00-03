

// import React, { Component } from 'react'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import * as actions from "../actions/FeriadoActions";
import { FeriadoForm } from './FeriadoForm';


const FeriadosList = (props) => {
    // NOTE: example
    // const [x, setX] = useState(0);
    // setX(5);

    const [dbg, set_dbg] = useState(true);
    const [x, setX] = useState(0);
    const [hasData, set_hasData] = useState(false);
    const [currIdx, set_currIdx] = useState(undefined);
    const [currDbId, set_currDbId] = useState(undefined);

    useEffect(() => {
        // return () => {effect};
        props.doListFeriados();
        console.log("EFFECT: doListFeriados");
        console.log(props);
        // }, [x])
    }
        // , [] // componentDidMount
        // , [props.x] // componentDidMount
        // , [props] // componentDidMount
        , [hasData] // componentDidMount : NOTE: works OK
        // , [x] // componentDidMount : NOTE: works OK
    )

    return (
        <div>
            <div className="info-group">
                Dbg Info
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
            form FeriadosList props: AAAAAAAAAAA
            <hr />
            <div className="db-show__area db-data__area">
                db-show__area
                db-data__area
                <br />
                <div className="db-data__group">
                    db-data__group
                    <div className="db-data__label">
                        db-data__label: Listado Feriados

                      </div>
                    <div className="db-data__rows">
                        db-data__rows


                        {
                            props.feriadosList.map((r, i) => {
                                return (
                                    <div key={i} >
                                        <br /> i: {i}  r: { r.motivo}
                                        {dbg ||
                                            <p>  <br /> r: {JSON.stringify(r)}</p>
                                        }
                                        <FeriadoForm
                                            {...({ currIdx, set_currIdx })}
                                        ></FeriadoForm>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

                <div className="db-datum__group">
                    db-datum__group
                    <div className="db-datum__label">
                        db-datum__label: Listado Feriados

                      </div>
                    <div className="db-datum__rows">
                        db-datum__rows

                </div>
                </div>





            </div>
            <hr />
                        debug data
            <hr />

            {
                props.feriadosList.map((r, i) => {
                    return (
                        <div key={i} >
                            <br /> i: {i}  r: { r.motivo}
                            {/* <br /> i: {i} */}
                            {/* <br /> r: {r ? "r" : "-"} */}
                            {/* <br /> r: {JSON.stringify(r)} */}
                            {dbg ||
                                <p>  <br /> r: {JSON.stringify(r)}</p>
                            }
                            <FeriadoForm
                                {...({ currIdx, set_currIdx })}
                            ></FeriadoForm>
                        </div>
                    )
                })
            }
            <form>

            </form>
        </div>
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
