import { Button, Form, Input, InputNumber, message, Select } from 'antd';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelecter } from '../../../app/hooks';
import ImageUpload from '../../../components/ImageUpload';
import { StyledActionTitle } from '../../../components/StyleComponent';
import { AsyncCreateProduct } from '../../../features/products/productThunk';
import { ProductType } from '../../../type/productType';

type ProductProps = {
}


const ProductAdd = (props: ProductProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { categories } = useAppSelecter(state => state.categoryReducer);
  const [form] = Form.useForm<ProductType>();
  const { errorMessage } = useAppSelecter(state => state.productReducer);
  const [fileList, setFileList] = useState<any>([]);
  const onReset = () => {
    form.resetFields();
    setFileList([]);
  };
  const onFinishAdd = (post: ProductType) => {
    post.image = post.image.fileList;
    dispatch(AsyncCreateProduct(post)).unwrap().then(() => { message.success("Add product success", 2, () => { navigate("/admin/products") }) }).catch((error) => errorMessage ? message.error(errorMessage) : message.error(error.message));
  };
  const onFailedAdd = () => {
    message.error('Input fields are required');
  };
  return (
    <>
      <StyledActionTitle>Add New Product</StyledActionTitle>
      <Form {...{ labelCol: { span: 6 }, wrapperCol: { span: 12 } }} name='Add product' onFinish={onFinishAdd} form={form} onFinishFailed={onFailedAdd} validateMessages={{
        required: '${label} is required',
        types: {
          number: '${label} must be a number'
        },
        string: {
          min: "${label} must be at least ${min} character"

        },
        number: {
          min: "${label} must be greater than 0",
          range: "${label} must be between ${min} and ${max}"
        },


      }}>
        <ImageUpload imageList={fileList} imagesCount={8} />
        <Form.Item name="name" label="Name" rules={[{ required: true, min: 5 }]} >
          <Input />
        </Form.Item>
        <Form.Item name="slug" label="slug" rules={[{ required: true, min: 5 }]} >
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Price" rules={[{ required: true, type: "number", min: 1 }]} >
          <InputNumber />
        </Form.Item>
        <Form.Item name="discount" label="Discount" rules={[{ type: "number", min: 1, max: 99 }]} >
          <InputNumber />
        </Form.Item>
        <Form.Item name="stock" label="Stock" rules={[{ type: "number", required: true, min: 1, max: 99 }]} >
          <InputNumber />
        </Form.Item>
        <Form.Item name="description" label="Description" >
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="category" label="Category" rules={[{ required: true }]} >
          <Select>
            {categories.map((item, index) => <Select.Option value={item._id} key={index + 1}>{item.name}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6 }} >
          <Button type="primary" htmlType='submit'>Add Product</Button>
          <Button type="default" style={{ marginLeft: "5px" }} onClick={onReset}>Reset</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default ProductAdd