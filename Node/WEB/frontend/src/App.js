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
