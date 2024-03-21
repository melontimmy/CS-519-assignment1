import './App.css';
import {Switch, Route} from "react-router-dom";
import API from './api.js';

function App() {
  return (
    <div className="App">
        <p>Main page, go to /api</p>
        <Switch>
            <Route path="/api" element={<API/>} />
        </Switch>
        <API/>
    </div>
  );
}

export default App;
