import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelecter } from '../../../app/hooks';
import { Button, Form, Input, message, Select, Space } from "antd";
import { StyledActionTitle } from '../../../components/StyleComponent';
import ImageUpload from '../../../components/ImageUpload';
import { CategoryType } from '../../../type/categoryType';
import { AsyncCreateCategory } from '../../../features/categories/categoryThunk';


type Props = {}

const CategoryAdd = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [form] = Form.useForm<CategoryType>();
  const { errorMessage } = useAppSelecter(state => state.categoryReducer);
  const [fileList, setFileList] = useState<any>('');
  const onFinishAdd = async (post: CategoryType) => {
    post.image = post.image.file;
    dispatch(AsyncCreateCategory(post)).unwrap().then(() => {
      message.success("Category created successfully", 2, () => { navigate("/admin/categories") })
    }).catch((error) => { errorMessage ? message.error(errorMessage) : message.error(error.message) });
  };
  const onFailedAdd = () => {
    message.error("Input fields are required");
  };
  const onReset = () => {
    form.resetFields();
    setFileList([]);
  };
  return (
    <>
      <StyledActionTitle>Add new category</StyledActionTitle>
      <Form {...{ labelCol: { span: 6 }, wrapperCol: { span: 12 } }} form={form} name="Add category" onFinish={onFinishAdd} onFinishFailed={onFailedAdd} >
        <ImageUpload imageList={[]} imagesCount={1} />
        <Form.Item name="name" label="Category name" rules={[{ required: true }]} >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6 }}>
          <Space>
            <Button type="primary" htmlType='submit'>Add Category</Button>
            <Button type="default" onClick={onReset}>Reset</Button>
          </Space>
        </Form.Item>

      </Form>
    </>

  )
}

export default CategoryAdd