import React, { useContext } from 'react';
import { Button, Form, Input, Select, InputNumber } from 'antd';
import { ProductContext } from '../contexts/ProductContext';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddProductPage = () => {
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    addProduct({ id: uuidv4(), ...values });
    navigate('/');
  };

  return (
    <div style={{backgroundColor:"green", height:"100vh"}}>
      <h1 style={{color:"white"}}>Add Product</h1>
      <Form form={form} onFinish={handleFinish}>
        <Form.Item name="category" label="Category" rules={[{ required: true }]}>
          <Select>
            <Select.Option value="Electronics">Electronics</Select.Option>
            <Select.Option value="Clothing">Clothing</Select.Option>
            <Select.Option value="Books">Books</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Price" rules={[{ required: true, type: 'number', min: 0 }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProductPage;
