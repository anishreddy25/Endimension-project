import React, { useContext, useState } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import ProductTable from '../components/ProductTable';
import ProductFilters from '../components/ProductFilters';
import { getRenderPropValue } from 'antd/es/_util/getRenderPropValue';

const ProductListPage = () => {
  const { products } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const categories = [...new Set(products.map(product => product.category))];

  const handleSearch = (value, field) => {
    let filtered = products;

    if (field === 'name') {
      filtered = products.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
    } else if (field === 'description') {
      filtered = products.filter(product =>
        product.description.toLowerCase().includes(value.toLowerCase())
      );
    } else if (field === 'category') {
      filtered = products.filter(product =>
        product.category.toLowerCase().includes(value.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (value) => {
    if (value === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === value);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div style={{ padding: '24px' ,backgroundColor: "greenyellow"}}>
      <h1 style={{color:"red", fontStyle:"revert-layer", textAlign:"center"}}>Product List</h1>
      <div style={{ marginBottom: '24px' }}>
        <p>Total Products: {products.length}</p>
        <p>Unique Categories: {categories.length}</p>
      </div>
      <ProductFilters
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        categories={['All', ...categories]}
      />
      <Link to="/add-product">
        <Button type="primary" style={{ marginBottom: '16px' }}>Add Product</Button>
      </Link>
      <ProductTable products={filteredProducts} />
    </div>
  );
};

export default ProductListPage;
