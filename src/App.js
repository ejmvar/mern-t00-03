import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FeriadoForm } from './components/FeriadoForm';
import FeriadosList from './components/FeriadosList';
// import { store } from './actions/store';
// import { Provider } from 'react-redux';
// <Provider store={store}>
// </Provider>

function App() {
  return (

    <div className="App">
      <header className="App-header">
        
<FeriadoForm></FeriadoForm>
<FeriadosList></FeriadosList>

        <img src={logo} className="App-logo" alt="logo" />
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


  );
}

export default App;
