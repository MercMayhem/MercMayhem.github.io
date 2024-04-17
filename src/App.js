import Setup from './pages/setup';
import Signup from './pages/signup';
import Setup2 from './pages/setup2';
import Confirm from './pages/confirm';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './context';

function App() {
  const [email, setEmail] = useState("")

  return (
    <Router>
      <UserContext.Provider value={[email, setEmail]}>
        <Routes>
          <Route path="/" element={ <Signup/> }/>
          <Route path="/setup" element={ <Setup/> }/>
          <Route path="/setup2" element={ <Setup2/> }/>
          <Route path="/confirmation" element={ <Confirm/> }/>
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
