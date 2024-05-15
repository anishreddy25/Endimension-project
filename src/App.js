import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext';
import ProductListPage from './pages/ProductListPage';
import AddProductPage from './pages/AddProductPage';
import 'antd/dist/reset.css'; // Ant Design CSS import

function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/add-product" element={<AddProductPage />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
