import React from 'react';
import './App.css';
import Logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="logo" />
        <p>
          LAST STOP: FREEDOM
        </p>
        <hr
          style={{
            width: '35vw',
            opacity: 0.5,
            marginBottom: 20
          }}
        />
        <em>There is a solution.</em>
        <br />
        <br />
      </header>
    </div>
  );
}

export default App;
