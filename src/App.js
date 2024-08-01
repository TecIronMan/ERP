

import './App.css';

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import ERP from './Components/PrivateComponents/ERP';
import AuthState from './Contexts/AuthStates';
import Main from './Components/PublicComponents/Main';
import './CSS/demo.css'
import Demo from './Components/PrivateComponents/Demo'


function App() {
 
  return (
    <AuthState>
    <Router>
   
    <Routes>
    <Route path='/*' element={<Main/>}/>
    <Route path='/success/*' element={<ERP/>}/>
    <Route path='/about' element={<Demo/>}/>
   
    </Routes>
    </Router>
    </AuthState>
  );
}

export default App;
