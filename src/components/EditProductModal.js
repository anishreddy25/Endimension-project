import React, { useContext } from 'react';
import { Modal, Form, Input, Select, InputNumber } from 'antd';
import { ProductContext } from '../contexts/ProductContext';

const EditProductModal = ({ product, onClose }) => {
  const { updateProduct } = useContext(ProductContext);
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then(values => {
      updateProduct({ ...product, ...values });
      onClose();
    });
  };

  return (
    <Modal
      visible={true}
      title="Edit Product"
      onCancel={onClose}
      onOk={handleOk}
    >
      <Form form={form} initialValues={product}>
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
      </Form>
    </Modal>
  );
};

export default EditProductModal;
