import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from './pages/Landing'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import CardSignIn from './components/CardSignIn';
import CardSignUp from './components/CardSignUp';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/signin" element={<CardSignIn/>}/>
        <Route exact path="/signup" element={<CardSignUp/>}/>
        {/* <Route exact path="/" element= {}>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/subscribe" element={<Subscribe/>}/>
          
        </Route> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
