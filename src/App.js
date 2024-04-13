import './App.css';
import Signup from './pages/signup';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Signup/> }/>
      </Routes>
    </Router>
  );
}

export default App;
