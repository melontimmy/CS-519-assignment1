import './App.css';
import {Routes, Router, Route} from "react-router-dom";
import API from './api.js';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/api" element={<API/>} />
                <API/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
