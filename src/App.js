import './App.css';
import Home from './views/Home';
import Calendar from './views/Calendar';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
