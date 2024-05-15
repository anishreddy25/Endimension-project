import React, { useContext, useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { ProductContext } from '../contexts/ProductContext';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const ProductTable = () => {
  const { products, deleteProduct } = useContext(ProductContext);
  const [sortedInfo, setSortedInfo] = useState({});

  const handleDelete = (id) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this product?',
      icon: <ExclamationCircleOutlined />,
      onOk: () => deleteProduct(id),
    });
  };

  const columns = [
    { title: 'Category', dataIndex: 'category', key: 'category', sorter: (a, b) => a.category.localeCompare(b.category), sortOrder: sortedInfo.columnKey === 'category' && sortedInfo.order },
    { title: 'Name', dataIndex: 'name', key: 'name', sorter: (a, b) => a.name.localeCompare(b.name), sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order },
    { title: 'Description', dataIndex: 'description', key: 'description', sorter: (a, b) => a.description.localeCompare(b.description), sortOrder: sortedInfo.columnKey === 'description' && sortedInfo.order },
    { title: 'Price', dataIndex: 'price', key: 'price', sorter: (a, b) => a.price - b.price, sortOrder: sortedInfo.columnKey === 'price' && sortedInfo.order },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, product) => (
        <>
          <Link to={`/edit-product/${product.id}`}>
            <Button type="primary" style={{ marginRight: '8px' }}>Edit</Button>
          </Link>
          <Button type="link" danger onClick={() => handleDelete(product.id)}>Delete</Button>
        </>
      ),
    },
  ];

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        bordered
        pagination={{ pageSize: 10 }}
        onChange={handleChange}
        style={{ marginBottom: '16px' }}
      />
    </div>
  );
};

export default ProductTable;
