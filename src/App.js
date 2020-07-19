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

      <div className="App">
        <header className="App-header">

          <FeriadoForm></FeriadoForm>
          <FeriadosList></FeriadosList>

          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>

    </Provider>


  );
}

export default App;
