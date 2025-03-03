import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Register from './pages/Register.js';
import Dashboard from './pages/Dashboard.js';
import Profile from './pages/Profile.js';
import Payment from './pages/Payment.js';


function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} /> 
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/payment" element={<Payment />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
