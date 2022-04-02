import React from 'react'
import { Form, Button, Checkbox, message, Input, Card } from "antd"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authAsyncLogin } from '../../features/auths/authThunk';
import { useAppDispatch } from '../../app/hooks';
import { LoginType } from '../../type/authType';

type Props = {}

const Login = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onFinish = async (post: LoginType) => {
    const { meta, payload } = await dispatch(authAsyncLogin(post));
    console.log(meta, payload);
    if (meta.requestStatus == "fulfilled") {
      message.success(payload.message, 2, () => {
        navigate("/");
      })
    }
    else {
      message.error(payload);
    }
  };
  const onFinishFailed = () => {
    message.error('Input fields are required');
  };
  return (
    <Card title="Login" style={{ margin: "100px auto", width: "400px" }}>
      <Form name='login'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
        initialValues={{ remember: true }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email"
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password"
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Button type='primary' htmlType='submit'>
            Login
          </Button>
          <Button type='default' style={{ marginLeft: "5px" }} htmlType='reset'>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </Card >
  )
}

export default Login