import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/HomePage';
import { ChatComponent } from './components/ChatComponent';

function App() {
  return (
    <div className="App">
      <ChatComponent />
    </div>
  );
}

export default App;
