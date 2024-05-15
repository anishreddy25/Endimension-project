import React, { useState } from 'react';
import { Input, Select } from 'antd';

const { Option } = Select;

const ProductFilters = ({ onSearch, onCategoryChange, categories }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value, field) => {
    setSearchValue(value);
    onSearch(value, field);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchValue, 'name'); // Assuming default search is by name
    }
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      <Input placeholder="Search by name" style={{ width: '200px', marginRight: '8px' }} onChange={(e) => handleSearch(e.target.value, 'name')} onKeyPress={handleKeyPress} />
      <Input placeholder="Search by description" style={{ width: '200px', marginRight: '8px' }} onChange={(e) => handleSearch(e.target.value, 'description')} onKeyPress={handleKeyPress} />
      <Select placeholder="Filter by category" style={{ width: '200px' }} onChange={onCategoryChange}>
        {categories.map(category => (
          <Option key={category} value={category}>{category}</Option>
        ))}
      </Select>
    </div>
  );
};

export default ProductFilters;


