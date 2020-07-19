

import React, { Component } from 'react'
import { connect } from 'react-redux';



const FeriadosList = (props) => {
    return (
        <div>
            form FeriadosList props:
        </div>
    )
}

// export default FeriadosList;
export default connect()(FeriadosList);
