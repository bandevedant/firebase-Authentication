import './App.css';
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import {Home }from './components/Home';
import  {ProtectedRoute } from './components/ProtectedRoute';
import {UserAuthContextProvider} from './context/UserAuthContext';


function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
      <Routes>
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
