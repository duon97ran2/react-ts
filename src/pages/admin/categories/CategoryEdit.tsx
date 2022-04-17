import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelecter } from '../../../app/hooks';
import { Button, Form, Input, message, Select, Space } from "antd";
import { StyledActionTitle } from '../../../components/StyleComponent';
import ImageUpload from '../../../components/ImageUpload';
import { CategoryType } from '../../../type/categoryType';
import { AsyncUpdateCategory } from '../../../features/categories/categoryThunk';



type Props = {}

const CategoryEdit = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [form] = Form.useForm<CategoryType>();
  const { errorMessage, categories, isFetching } = useAppSelecter(state => state.categoryReducer);
  const [fileList, setFileList] = useState<any>('');
  const { id } = useParams();
  const category = categories.find(item => item._id === id);
  const onFinishAdd = async (post: CategoryType) => {
    post.image = post.image.file;
    post._id = id;
    dispatch(AsyncUpdateCategory(post)).unwrap().then(() => {
      message.success("Category updated successfully", 2, () => { navigate("/admin/categories") })
    }).catch((error: any) => { errorMessage ? message.error(errorMessage) : message.error(error.message) });
  };
  const onFailedAdd = () => {
    message.error("Input fields are required");
  };
  const onReset = () => {
    form.resetFields();
    setFileList(undefined);
  };
  useEffect(() => {
    if (!isFetching) {
      if (category) {
        form.setFieldsValue(category);
        setFileList(category?.image);
      }
    }
  }, [isFetching])
  return (
    <>
      <StyledActionTitle>Update category</StyledActionTitle>
      <Form {...{ labelCol: { span: 6 }, wrapperCol: { span: 12 } }} form={form} name="Add category" onFinish={onFinishAdd} onFinishFailed={onFailedAdd} >
        <ImageUpload imageList={fileList ? [fileList] : []} imagesCount={1} />
        <Form.Item name="name" label="Category name" rules={[{ required: true }]} >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6 }}>
          <Space>
            <Button type="primary" htmlType='submit'>Update</Button>
            <Button type="default" onClick={onReset}>Reset</Button>
          </Space>
        </Form.Item>

      </Form>
    </>

  )
}

export default CategoryEdit