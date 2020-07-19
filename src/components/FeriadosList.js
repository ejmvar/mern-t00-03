

import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from "../actions/FeriadoActions";


const FeriadosList = (props) => {
    return (
        <div>
            form FeriadosList props:
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
const mapActionsToProps={
    doListFeriados: actions.List
}

export default connect(mapStateToProps)(FeriadosList);
