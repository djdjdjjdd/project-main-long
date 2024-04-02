import React from 'react';
//import './App.css';
import Login from './component/login';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  
  BrowserRouter,
  Routes,
  Route, 
  
} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
            <Route path='/'element={<Login />} exact />
        </Routes>  
      </>
    </BrowserRouter>
  );
}

export default App;
