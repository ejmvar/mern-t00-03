import React from 'react';

import './App.css';
import { FeriadoForm } from './components/FeriadoForm';
import FeriadosList from './components/FeriadosList';
import { store } from './actions/store';
import { Provider } from 'react-redux';
// <Provider store={store}>
// </Provider>

function App() {
  return (

    <Provider store={store}>

      <div className="zApp">
        <header className="zApp-header">

          <FeriadoForm></FeriadoForm>


        </header>
        <body className="zApp-body">
          <FeriadosList></FeriadosList>

        </body>
      </div>

    </Provider>


  );
}

export default App;

