import './App.css';
import {Router, Routes, Route} from "react-router-dom";
import API from './api.js';

function App() {
  return (
    <div className="App">
        <p>Main page, go to /api</p>
        <Router>
            <Routes>
                <Route path="/api" element={<API/>} />
            </Routes>
        </Router>

        <API/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
