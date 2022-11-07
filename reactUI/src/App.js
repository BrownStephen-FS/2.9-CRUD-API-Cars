import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Car from './pages/Car';

function App() {
  return (
    <Router>
       <Routes>
         <Route path="/" exact element={<Home />} />
         <Route path="/students/:id" exact element={<Car />} />
       </Routes>
    </Router>
   );
}

export default App;
