import './App.css';
import './index.css'
import Home from './screens/Home';
import Login from './screens/Login';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './screens/Signup';
function App() {
  return (
    <Router> 
    <div>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/CreateUser" element={<Signup/>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
