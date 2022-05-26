import './App.css';
import Home from './views/Home';
import Calendar from './views/Calendar';
import Success from './views/Success';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/calendar" element={<Calendar />}/>
        <Route path="/success" element={<Success />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
