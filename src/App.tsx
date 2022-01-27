import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/HomePage';
import { RegLog } from './components/RegistrationLogin';

function App() {
  return (
    <div className="App">
      <HomePage />
      <RegLog />
    </div>
  );
}

export default App;
