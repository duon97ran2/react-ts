import React from 'react'
import { Form, Checkbox, Button, Input, Card, message } from "antd"
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelecter } from '../../app/hooks'
import { authAsyncRegister } from '../../features/auths/authThunk'

type Props = {}

const Register = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onFinish = async (post: any) => {
    const { meta, payload } = await dispatch(authAsyncRegister(post));
    if (meta.requestStatus == "fulfilled") {
      message.success("Register success", 2, () => { navigate("/login") });
    }
    else {
      message.error(payload);
    }
  };
  const onFinishFailed = (error: any) => {
    message.error("Input fields are required");
  }
  return (
    <Card title="Register" style={{ width: "400px", margin: "100px auto" }}>
      <Form
        name="register"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <div style={{ margin: "12px", textAlign: "center" }}>
          <span >Already has an account? <Link to="login">Login now</Link> </span>
        </div>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Register