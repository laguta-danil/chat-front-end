import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/HomePage';
import { ChatList } from './components/ChatList';

function App() {
  return (
    <div className="App">
      <HomePage />
      <ChatList />
    </div>
  );
}

export default App;
