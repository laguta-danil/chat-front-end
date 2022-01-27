
import { HeaderMain } from './components/header/HeaderMain';
import React from "react";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { RegLog } from "./components/RegistrationLogin";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <HeaderMain />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/signup" element={<RegLog />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
