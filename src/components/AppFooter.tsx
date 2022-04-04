import { FacebookFilled, FacebookOutlined, GooglePlusOutlined, InstagramFilled, TwitterOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { StyledButton, StyledHeadline } from './StyleComponent'

type Props = {}


const AppFooter = (props: Props) => {
  const textStyle = {
    marginBottom: "30px"
  }
  return (
    <>
      <Row gutter={20}>
        <Col span={8}>
          <div className="column" style={{ textAlign: "left", color: "white" }} >
            <StyledHeadline>Find us on</StyledHeadline>
            <li style={{ listStyleType: "none" }} className="nav-item" >
              <a href="javascript:;" style={textStyle}>Social:</a>
            </li>
            <a href="https://facebook.com"><FacebookFilled style={{ color: "var(--ant-primary-color)", fontSize: "30px", margin: "10px 10px 10px 0px" }} /></a>
            <a href="https://facebook.com"><InstagramFilled style={{ color: "var(--ant-primary-color)", fontSize: "30px", margin: "10px 10px 10px 0" }} /></a>
            <a href="https://facebook.com"><TwitterOutlined style={{ color: "var(--ant-primary-color)", fontSize: "30px", margin: "10px 10px 10px 0" }} /></a>
            <a href="https://facebook.com"><GooglePlusOutlined style={{ color: "var(--ant-primary-color)", fontSize: "30px", margin: "10px 10px 10px 0" }} /></a>
            <li style={{ listStyleType: "none" }} className="nav-item" >
              <a href="javascript:;" style={textStyle}>Store:</a>
            </li>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14895.455922776757!2d105.7467871!3d21.0381278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1648484664117!5m2!1svi!2s" width="100%" style={{ border: "none", }}></iframe>
          </div>

        </Col>
        <Col span={4}>
          <div className="column" style={{ textAlign: "left", color: "white" }} >
            <StyledHeadline >Resources</StyledHeadline>
            <ul style={{ display: "flex", flexDirection: "column", padding: "0" }}>
              <li className="nav-item"><a href="javascript:;" style={textStyle}>About us</a></li>
              <li className="nav-item"><a href="javascript:;" style={textStyle}>Contact us</a></li>
              <li className="nav-item"><a href="javascript:;" style={textStyle}>Blog</a></li>
              <li className="nav-item"><a href="javascript:;" style={textStyle}>License</a></li>
            </ul>
          </div>
        </Col>
        <Col span={4}>
          <div className="column" style={{ textAlign: "left", color: "white" }} >
            <StyledHeadline>Company</StyledHeadline>
            <ul style={{ display: "flex", flexDirection: "column", padding: "0" }}>
              <li className="nav-item"><a href="javascript:;" style={textStyle}>Support</a></li>
              <li className="nav-item"><a href="javascript:;" style={textStyle}>Jobs</a></li>
              <li className="nav-item"><a href="javascript:;" style={textStyle}>Privacy</a></li>
              <li className="nav-item"><a href="javascript:;" style={textStyle}>Guides</a></li>
              <li className="nav-item"><a href="javascript:;" style={textStyle}>Pricing</a></li>
            </ul>
          </div>
        </Col>
        <Col span={8}>
          <Form wrapperCol={{ span: 16, offset: 4 }} labelCol={{ span: 40, offset: 12, }} layout="vertical" style={{ textAlign: "center" }} >
            <StyledHeadline>Submit your email to receive our exclusive deals </StyledHeadline>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input placeholder="Please input your email" />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 16, offset: 4 }}
            >
              <Button type='primary' style={{ width: "100%" }} >Submit</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default AppFooter