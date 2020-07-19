import React, { Component, useState } from 'react'


export const FeriadoForm = () => {

    const [r, set_r] = useState(0);


    return (
        <div>
            <p>
                FeriadoForm
            </p>

            <form autoComplete="off" noValidate>

                <table>
                    <tbody>
                        <tr>

                            <th> _id </th>
                            <td> {r._id} </td>
                            <th> id </th>
                            <td> {r.id} </td>
                            <th> motivo </th>
                            <td> {r.motivo} </td>
                            <th> tipo </th>
                            <td> {r.tipo} </td>
                            <th> mes </th>
                            <td> {r.mes} </td>
                            <th> dia </th>
                            <td> {r.dia} </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>

                        </tr>
                    </tfoot>
                </table>

            </form>

        </div>
    )
}


// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// export const FeriadoForm = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(FeriadoForm)