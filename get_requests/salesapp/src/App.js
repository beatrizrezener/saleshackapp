import React from 'react';
import './App.css';

// var request = require('request');

function App() {

  function handleLogin() { 
    const url = 'http://localhost:5000/login';
    fetch(url)
        .then((response) =>  {
          console.log('respose');
          console.log(response.json());
        })
        .catch((error) => {
          console.error(error);
    });
  };

  function handleBattery() { 
    sentAlert('battery');
  };

  function handlePression() { 
    sentAlert('pression');
  };

  function handleEletric() { 
    sentAlert('eletric');
  };

  function handleGas() { 
    sentAlert('gas');
  };

  function handleEmission() { 
    sentAlert('emission');
  };

  function handleMotor() { 
    sentAlert('motor');
  };

  function handlePneu() { 
    sentAlert('pneu');
  };

  function handleClear() { 
    sentColor('clear');
  };

  function sentAlert(item) {
    sentColor(item);
    const url = 'http://localhost:5000/' + item;
    fetch(url)
        .then((response) =>  {
          console.log('respose');
          console.log(response.json());
        })
        .catch((error) => {
          console.error(error);
    });
  }

  function sentColor(item) {
    const params = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'false'
      },
    };
    fetch('http://localhost:3000/' + item, params)
    .then((response) => console.log(response.json()))
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
      <a href="#" onClick={handleLogin} style={{ color: 'white' }}>
        Login
      </a>
      <br />
      <a href="#" onClick={handleBattery} style={{ color: 'white' }}>
        Defeito Bateria
      </a>
      <br />
      <a href="#" onClick={handlePression} style={{ color: 'white' }}>
        Defeito Pressão
      </a>
      <br />
      <a href="#" onClick={handleEletric} style={{ color: 'white' }}>
        Defeito Elétrico
      </a>
      <br />
      <a href="#" onClick={handleGas} style={{ color: 'white' }}>
        Defeito Gasolina
      </a>
      <br />
      <a href="#" onClick={handleEmission} style={{ color: 'white' }}>
        Defeito Emissão de Gases
      </a>
      <br />
      <a href="#" onClick={handleMotor} style={{ color: 'white' }}>
        Defeito Motor
      </a>
      <br />
      <a href="#" onClick={handlePneu} style={{ color: 'white' }}>
        Defeito Pneu
      </a>
      <br />
      <a href="#" onClick={handleClear} style={{ color: 'white' }}>
        Clear
      </a>
      <br />
      </header>
    </div>
  );
}

export default App;
