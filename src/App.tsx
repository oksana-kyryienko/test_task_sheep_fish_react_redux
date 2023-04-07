import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import PageNotFound from './pages/PageNotFound';
import ProductList from './pages/ProductsPage';
import Navbar from './components/NavBar';

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Navbar>
  );
}

export default App;
