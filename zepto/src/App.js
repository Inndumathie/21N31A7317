// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
// import ProductPage from './pages/ProductPage';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    {/* Route for displaying all products */}
                    <Route path="/" element={<AllProducts />} />

                    {/* Route for displaying details of a specific product */}
                    {/* <Route path="/products/:id" element={<ProductPage />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
