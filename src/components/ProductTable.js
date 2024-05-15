import React, { useContext, useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { ProductContext } from '../contexts/ProductContext';
import EditProductModal from './EditProductModal';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const ProductTable = () => {
  const { products, deleteProduct } = useContext(ProductContext);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleDelete = (id) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this product?',
      icon: <ExclamationCircleOutlined />,
      onOk: () => deleteProduct(id),
    });
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const columns = [
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    {
      title: 'Actions', key: 'actions', render: (_, product) => (
        <>
          <Button
            style={{ marginRight: '8px', backgroundColor: '#1890ff', borderColor: '#1890ff', color: '#fff' }}
            onClick={() => handleEdit(product)}
          >
            Edit
          </Button>
          <Button
            style={{ backgroundColor: '#ff4d4f', borderColor: '#ff4d4f', color: '#fff' }}
            onClick={() => handleDelete(product.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        style={{ marginBottom: '16px' }}
        bordered
      />
      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductTable;
