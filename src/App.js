import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/customers" element={<CustomerList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
