import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import './index.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import { useState } from 'react';

function App() {

  const [isLogged,setIsLogged]=useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
