

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
            <button onClick={() => set_dbg(!dbg)} >  {dbg ? "DeBuGgInG!" : "MuTeD"} </button>
            <button onClick={() => setX(x + 1)} > Whole reload </button>
            form FeriadosList props:
            <hr />
            <br /> x: {x}
            <br /> hasData: {hasData}
            <br /> currIdx: {currIdx}
            <br /> props.list: {props.list}
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
                            <FeriadoForm></FeriadoForm>
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
