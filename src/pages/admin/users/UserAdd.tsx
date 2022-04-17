import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelecter } from '../../../app/hooks';
import { Button, Form, Input, message, Select, Space } from "antd";
import { UserType } from '../../../type/userType';
import { StyledActionTitle } from '../../../components/StyleComponent';
import ImageUpload from '../../../components/ImageUpload';
import { AsyncCreateUser } from '../../../features/users/userThunk';

type Props = {}

const UserAdd = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [form] = Form.useForm<UserType>();
  const { errorMessage } = useAppSelecter(state => state.userReducer);
  const [fileList, setFileList] = useState<any>('');
  const onFinishAdd = async (post: UserType) => {
    post.image = post.image.file;
    dispatch(AsyncCreateUser(post)).unwrap().then((data) => {
      console.log(data);
      message.success(data.message, 2, () => { navigate("/admin/users") })
    }).catch((error) => { errorMessage ? message.error(errorMessage) : message.error(error.message) });
  };
  const onFailedAdd = () => {
    message.error("Input fields are required");
  };
  const onReset = () => {
    form.resetFields();
    setFileList([]);
  };
  const roles = [
    { value: 0, name: "member" },
    { value: 1, name: "admin" }
  ];
  return (
    <>
      <StyledActionTitle>Add new user</StyledActionTitle>
      <Form {...{ labelCol: { span: 6 }, wrapperCol: { span: 12 } }} form={form} name="Add user" onFinish={onFinishAdd} onFinishFailed={onFailedAdd} validateMessages={{
        string: {
          min: "${label} must be at least ${min} character"
        },
      }}>
        <ImageUpload imageList={[]} imagesCount={1} />
        <Form.Item name="username" label="Username" rules={[{ required: true }]} >
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]} >
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true, min: 5 }]} >
          <Input.Password />
        </Form.Item>
        <Form.Item name="role" label="Role" rules={[{ required: true }]} >
          <Select>
            {roles.map(item => <Select.Option value={item.value}>{item.name}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6 }}>
          <Space>
            <Button type="primary" htmlType='submit'>Add User</Button>
            <Button type="default" onClick={onReset}>Reset</Button>
          </Space>
        </Form.Item>

      </Form>
    </>

  )
}

export default UserAdd